import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.anim-up')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return containerRef
}
