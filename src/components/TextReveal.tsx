import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TextRevealProps {
  text: string
  delay?: number
  className?: string
}

const TextReveal = ({ text, delay = 0, className = '' }: TextRevealProps) => {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    // Split text into words
    const words = text.split(' ')
    textElement.innerHTML = words
      .map((word, i) => `<span class="word" style="display: inline-block; opacity: 0;">${word}</span>`)
      .join(' ')

    const wordElements = textElement.querySelectorAll('.word')

    // Animate each word
    gsap.to(wordElements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: delay,
      ease: 'power3.out'
    })

    // Initial state
    gsap.set(wordElements, { y: 50, opacity: 0 })
  }, [text, delay])

  return (
    <h2 ref={textRef} className={`text-reveal ${className}`}></h2>
  )
}

export default TextReveal

