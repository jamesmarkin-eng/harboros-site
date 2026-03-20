import { useEffect, RefObject } from 'react'

export function useStars(ref: RefObject<HTMLDivElement>, count: number = 65) {
  useEffect(() => {
    const wrap = ref.current
    if (!wrap) return
    wrap.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const sz = Math.random() * 1.8 + 0.5
      s.style.cssText = [
        `width:${sz}px`,
        `height:${sz}px`,
        `top:${Math.random() * 72}%`,
        `left:${Math.random() * 100}%`,
        `--dur:${3 + Math.random() * 5}s`,
        `--del:${Math.random() * 6}s`,
      ].join(';')
      wrap.appendChild(s)
    }
  }, [ref, count])
}
