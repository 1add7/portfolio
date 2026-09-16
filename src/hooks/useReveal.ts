import { useEffect, useRef, useState } from 'react'

/**
 * 元素进入视口后返回 true，用于触发滚动入场动画。
 * 只触发一次，避免来回滚动时反复播放。
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  // 不支持 IntersectionObserver 的环境直接认为元素已进入视口
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
