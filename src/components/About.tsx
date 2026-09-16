import Card from './Card'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">关于我</h2>
          <span className="section-sub">一句话介绍 + 教育背景</span>
        </div>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>{profile.intro}</p>
            <p>{profile.introSecond}</p>

            <div className="about-goal">
              <span className="about-goal-label">求职意向</span>
              <strong>前端开发工程师 · 2027 届校招 / 实习</strong>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="about-card">
              <p className="eyebrow">教育经历</p>
              <h3 className="about-school">{profile.education.school}</h3>
              <p className="about-major">
                {profile.education.major} · {profile.education.degree} · 2027 届
              </p>

              <ul className="about-list">
                <li>
                  <span>在读时间</span>
                  <strong>{profile.education.period}</strong>
                </li>
                <li>
                  <span>英语水平</span>
                  <strong>CET-4</strong>
                </li>
                <li>
                  <span>实习经历</span>
                  <strong>2026.03 — 2026.09</strong>
                </li>
              </ul>
            </Card>

            <Card className="about-card about-card-now">
              <p className="eyebrow">现在在做</p>
              <ul className="about-now">
                <li>持续迭代个人 AI 知识树项目（Agent + RAG）</li>
                <li>把实习中的工程化经验沉淀成可复用的组件与方案</li>
                <li>准备 2027 届前端校招</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
