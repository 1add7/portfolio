import { useEffect, useState } from 'react'

type TypewriterOptions = {
  typeSpeed?: number
  deleteSpeed?: number
  holdTime?: number
}

/** 循环打字机效果，逐字打出 / 逐字删除。 */
export function useTypewriter(words: readonly string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 110, deleteSpeed = 55, holdTime = 1600 } = options
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const current = words[index % words.length]

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdTime)
      return () => window.clearTimeout(hold)
    }

    if (deleting && text === '') {
      // 一个词删完后停顿一下再打下一个词
      const pause = window.setTimeout(() => {
        setDeleting(false)
        setIndex((value) => (value + 1) % words.length)
      }, 420)
      return () => window.clearTimeout(pause)
    }

    const timer = window.setTimeout(
      () => {
        setText((value) => (deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)))
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => window.clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdTime])

  return text
}
