import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxBoxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

const ParallaxBox = ({ children, speed = 0.5, className = '' }: ParallaxBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    gsap.to(box, {
      y: (i, el) => {
        return (1 - speed) * ScrollTrigger.maxScroll(window) * speed
      },
      ease: 'none',
      scrollTrigger: {
        trigger: box,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }, [speed])

  return (
    <div ref={boxRef} className={`parallax-box ${className}`}>
      {children}
    </div>
  )
}

export default ParallaxBox

