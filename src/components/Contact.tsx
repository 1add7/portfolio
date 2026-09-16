import { useEffect, useState } from 'react'
import Card from './Card'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.contact.email}`
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index">06</span>
          <h2 className="section-title">联系我</h2>
          <span className="section-sub">随时欢迎交流机会与想法</span>
        </div>

        <Reveal>
          <Card className="contact-card">
            <div className="contact-main">
              <h3>想聊聊前端的机会？</h3>
              <p>
                我正在寻找 2027 届前端开发校招 / 实习机会。如果你对我的项目有兴趣，或者想聊
                Agent、跨端、工程化这些话题，欢迎直接联系我。
              </p>

              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.contact.email}`}>
                  写邮件给我
                  <span aria-hidden="true">→</span>
                </a>
                <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                  {copied ? '已复制 ✓' : '复制邮箱'}
                </button>
                <a
                  className="btn btn-ghost"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <ul className="contact-list">
              <li>
                <span>邮箱</span>
                <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              </li>
              <li>
                <span>电话</span>
                <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={profile.contact.github} target="_blank" rel="noreferrer">
                  {profile.contact.githubLabel}
                </a>
              </li>
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
