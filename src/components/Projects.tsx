import Card from './Card'
import Reveal from './Reveal'
import { featuredProject } from '../data/profile'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">项目经历</h2>
          <span className="section-sub">从需求到上线的完整链路</span>
        </div>

        <Reveal>
          <Card className="project-card" as="article">
            <div className="project-head">
              <div>
                <span className="project-kind">{featuredProject.kind}</span>
                <h3 className="project-name">{featuredProject.name}</h3>
                <p className="project-tagline">{featuredProject.tagline}</p>
              </div>
              <span className="project-mark" aria-hidden="true">
                {'{ }'}
              </span>
            </div>

            <ul className="tag-list project-stack">
              {featuredProject.stack.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <ol className="project-highlights">
              {featuredProject.highlights.map((highlight, index) => (
                <li key={highlight.title}>
                  <span className="project-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.detail}</p>
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <p className="projects-note">
            实习期间参与的两款线上产品，见上方
            <a href="#experience">实习经历</a>
            。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
