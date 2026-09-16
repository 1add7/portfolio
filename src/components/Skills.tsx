import Card from './Card'
import Reveal from './Reveal'
import { skillGroups } from '../data/profile'
import './Skills.css'

const marqueeItems = [
  'React',
  'Vue 3',
  'TypeScript',
  'React Native',
  'Vite',
  'Webpack',
  'Zustand',
  'Pinia',
  'Node.js',
  'Expo',
  'SSE',
  'AES',
  'Git',
  'ESLint',
  'Ant Design',
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">技能栈</h2>
          <span className="section-sub">日常真正在用的工具与方法</span>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90}>
              <Card className="skill-card">
                <div className="skill-card-head">
                  <h3>{group.title}</h3>
                  <span className="skill-badge">{group.caption}</span>
                </div>
                <p className="skill-detail">{group.detail}</p>
                <ul className="tag-list skill-tags">
                  {group.keywords.map((keyword) => (
                    <li className="tag" key={keyword}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
