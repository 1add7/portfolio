/**
 * 构建并将 dist/ 发布到 gh-pages 分支。
 *
 * 用法：npm run deploy
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

const remote = gitOutput(['remote', 'get-url', 'origin'], root)
const publishDir = mkdtempSync(path.join(tmpdir(), 'portfolio-deploy-'))
cpSync(path.join(root, 'dist'), publishDir, { recursive: true })

console.log('› 推送到 gh-pages 分支…')
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
git(['remote', 'add', 'origin', remote], publishDir)
git(['push', '--force', 'origin', 'gh-pages'], publishDir)

rmSync(publishDir, { recursive: true, force: true })

console.log('\n✓ 发布完成：https://1add7.github.io/portfolio/')
console.log('  （GitHub Pages 一般需要 30 秒左右生效，强制刷新生效更快）')
