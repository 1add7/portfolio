/**
 * 构建并将 dist/ 发布到 gh-pages 分支。
 *
 * 用法：npm run deploy
 *
 * 会推送到本仓库配置的**所有** remote，所以 GitHub 上的多个仓库
 * （例如 portfolio 与 resume）可以保持同步更新。
 *
 * 之所以不用 GitHub Actions：该账号的 Actions 被 billing 限制锁定
 * （运行记录提示 "account is locked due to a billing issue"），
 * 分支发布不消耗 Actions 额度，效果相同。
 */

import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
// Windows 上 Node 20 起不能直接 execFileSync('npm.cmd', …)（会 EINVAL），需要 shell
const isWindows = process.platform === 'win32'
const npm = isWindows ? 'npm.cmd' : 'npm'

function git(args, cwd) {
  execFileSync('git', args, { cwd, stdio: 'inherit' })
}

function gitOutput(args, cwd) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim()
}

console.log('› 构建静态文件…')
execFileSync(npm, ['run', 'build'], { cwd: root, stdio: 'inherit', shell: isWindows })

const remotes = gitOutput(['remote'], root)
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .map((name) => ({ name, url: gitOutput(['remote', 'get-url', name], root) }))

if (remotes.length === 0) {
  throw new Error('这个仓库还没有配置 git remote，先执行：git remote add origin <仓库地址>')
}

const publishDir = mkdtempSync(path.join(tmpdir(), 'portfolio-deploy-'))
cpSync(path.join(root, 'dist'), publishDir, { recursive: true })

console.log(`› 推送到 ${remotes.length} 个 remote 的 gh-pages 分支…`)
git(['init', '-b', 'gh-pages', '--quiet'], publishDir)
git(['add', '-A'], publishDir)
git(
  [
    '-c',
    'user.name=deploy',
    '-c',
    'user.email=deploy@users.noreply.github.com',
    'commit',
    '--quiet',
    '-m',
    `deploy: ${new Date().toISOString()}`,
  ],
  publishDir,
)

for (const { name, url } of remotes) {
  git(['remote', 'add', name, url], publishDir)
  git(['push', '--force', name, 'gh-pages'], publishDir)
  console.log(`   ✓ ${name} → ${url}`)
}

rmSync(publishDir, { recursive: true, force: true })

console.log('\n✓ 发布完成：https://1add7.github.io/resume/')
console.log('  （GitHub Pages 一般需要 30 秒左右生效，强制刷新生效更快）')
