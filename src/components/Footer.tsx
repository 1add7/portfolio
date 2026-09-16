import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · 用 React + Vite 手写的个人主页
        </p>
        <a href="#top">回到顶部 ↑</a>
      </div>
    </footer>
  )
}
