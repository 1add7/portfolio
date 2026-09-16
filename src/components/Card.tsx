import type { MouseEvent, ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li' | 'section'
}

/** 带鼠标跟随高光的卡片，配合 global.css 里的 .card 使用。 */
export default function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    target.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <Tag className={`card ${className}`.trim()} onMouseMove={handleMove}>
      {children}
    </Tag>
  )
}
