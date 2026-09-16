import type { CSSProperties } from 'react'
import Avatar from './Avatar'
import Card from './Card'
import { profile } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'
import { useTypewriter } from '../hooks/useTypewriter'
import './Hero.css'

const nameChars = [...profile.name]

function Stat({ value, unit, label }: { value: string; unit: string; label: string }) {
  const count = useCountUp(Number(value))

  return (
    <li className="hero-stat">
      <span className="hero-stat-value">
        {count}
        <em>{unit}</em>
      </span>
      <span className="hero-stat-label">{label}</span>
    </li>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            {profile.latinName}
            <span className="hero-dot" />
            求职中
          </p>

          <h1 className="hero-name">
            {nameChars.map((char, index) => (
              <span key={`${char}-${index}`} style={{ '--i': index } as CSSProperties}>
                {char}
              </span>
            ))}
          </h1>

          <p className="hero-role">
            <span className="hero-role-prefix">/ </span>
            <span className="hero-role-typed">{typed}</span>
            <span className="hero-caret" aria-hidden="true" />
          </p>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              看看我的项目
              <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.contact.email}`}>
              发邮件
            </a>
            <a
              className="btn btn-ghost"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              简历 PDF
            </a>
          </div>

          <ul className="tag-list hero-tags">
            {profile.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Card className="hero-card">
          <div className="hero-card-top">
            <Avatar src={profile.avatar} initial={profile.initial} name={profile.name} />
            <div>
              <p className="hero-card-name">{profile.name}</p>
              <p className="hero-card-title">{profile.title}</p>
            </div>
          </div>

          <dl className="hero-facts">
            {profile.facts.map((fact) => (
              <div className="hero-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a className="hero-card-link" href={profile.contact.github} target="_blank" rel="noreferrer">
            {profile.contact.githubLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </Card>
      </div>

      <ul className="container hero-stats">
        {profile.stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} unit={stat.unit} label={stat.label} />
        ))}
      </ul>
    </section>
  )
}
