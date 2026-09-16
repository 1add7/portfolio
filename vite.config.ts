import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // 用相对路径，这样部署到 GitHub Pages 的 https://<user>.github.io/<repo>/ 子路径
  // 或根域名、Vercel/Netlify 都能直接跑，不需要为仓库名改配置
  base: './',
  plugins: [react()],
})
