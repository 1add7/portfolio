import Card from './Card'
import Reveal from './Reveal'
import { experience } from '../data/profile'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">实习经历</h2>
          <span className="section-sub">6 个月 · 2 款线上产品</span>
        </div>

        <Reveal className="timeline-wrap">
          <div className="timeline">
            <div className="timeline-head">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-title">
                <h3>{experience.company}</h3>
                <p>
                  {experience.role} · {experience.duration}
                </p>
              </div>
              <span className="timeline-period">{experience.period}</span>
            </div>

            <p className="timeline-summary">{experience.summary}</p>

            <div className="product-list">
              {experience.products.map((product, productIndex) => (
                <Card className="product-card" as="article" key={product.name}>
                  <header className="product-head">
                    <div>
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-summary">{product.summary}</p>
                    </div>
                    <span className="product-badge">
                      产品 {String(productIndex + 1).padStart(2, '0')}
                    </span>
                  </header>

                  <ul className="tag-list product-stack">
                    {product.stack.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ol className="highlight-list">
                    {product.highlights.map((highlight, index) => (
                      <li key={highlight.title}>
                        <span className="highlight-index" aria-hidden="true">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h5>{highlight.title}</h5>
                          <p>{highlight.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
