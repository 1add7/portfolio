import Card from './Card'
import Reveal from './Reveal'
import { notes } from '../data/profile'
import './Notes.css'

export default function Notes() {
  return (
    <section className="section" id="notes">
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <h2 className="section-title">笔记</h2>
          <span className="section-sub">把踩过的坑写成文章（内容整理中）</span>
        </div>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 90} className="notes-item">
              <Card className="note-card" as="article">
                <div className="note-top">
                  <span className="note-status">{note.status}</span>
                  <span className="note-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
                <h3 className="note-title">{note.title}</h3>
                <ul className="tag-list note-topics">
                  {note.topics.map((topic) => (
                    <li className="tag" key={topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="notes-hint">
            这一块现在是占位卡片，文案在 <code>src/data/profile.ts</code> 的 <code>notes</code>
            里。之后接入 Markdown 渲染（或直接写文章页）就能变成真正的博客列表。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
