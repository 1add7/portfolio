import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  /** 动画延迟（毫秒），用于做逐个入场的错峰效果 */
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, delay = 0, className = '', style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
