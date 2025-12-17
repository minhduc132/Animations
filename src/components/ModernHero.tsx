import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedButton from './AnimatedButton'

const ModernHero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bgElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Background elements animation
    if (bgElementsRef.current) {
      const elements = bgElementsRef.current.querySelectorAll('.bg-element')
      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0, rotation: 0 },
          {
            opacity: 0.1,
            scale: 1,
            rotation: 360,
            duration: 2,
            delay: index * 0.2,
            ease: 'power2.out',
            repeat: -1,
            yoyo: true
          }
        )
      })
    }

    // Title split animation
    if (titleRef.current) {
      const words = titleRef.current.textContent?.split(' ') || []
      titleRef.current.innerHTML = words
        .map((word) => `<span class="word-wrapper"><span class="word">${word}</span></span>`)
        .join(' ')

      const wordElements = titleRef.current.querySelectorAll('.word')
      
      tl.fromTo(
        wordElements,
        {
          opacity: 0,
          y: 100,
          rotationX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out'
        }
      )
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
    }

    // Button animation
    if (buttonRef.current) {
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )
    }

    // Floating animation
    gsap.to([titleRef.current, subtitleRef.current, buttonRef.current], {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2
    })
  }, [])

  return (
    <section ref={heroRef} className="modern-hero">
      <div ref={bgElementsRef} className="hero-bg-elements">
        <div className="bg-element" style={{ top: '10%', left: '10%' }}></div>
        <div className="bg-element" style={{ top: '20%', right: '15%' }}></div>
        <div className="bg-element" style={{ bottom: '15%', left: '20%' }}></div>
        <div className="bg-element" style={{ bottom: '25%', right: '10%' }}></div>
      </div>
      
      <div className="hero-gradient"></div>
      
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-main-title">
          Build Beautiful
          <br />
          <span className="gradient-text">Animations</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Tạo các animation mượt mà và chuyên nghiệp với GSAP
          <br />
          Khám phá sức mạnh của GreenSock Animation Platform
        </p>
        <div ref={buttonRef} className="hero-buttons">
          <AnimatedButton variant="primary" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Bắt đầu ngay
          </AnimatedButton>
          <AnimatedButton variant="outline" onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}>
            Xem demo
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}

export default ModernHero

