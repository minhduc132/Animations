import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Background animation
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      )
    }

    // Title animation
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, rotationX: -90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: 'power3.out' },
        0.3
      )
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
        0.6
      )
    }

    // Button animation
    if (buttonRef.current) {
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        0.9
      )
    }

    // Floating animation for background
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }
  }, [])

  const handleButtonClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      })
    }
  }

  return (
    <section ref={heroRef} className="hero-section">
      <div ref={bgRef} className="hero-bg"></div>
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          GSAP Animation
          <br />
          <span className="gradient-text">Showcase</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Khám phá sức mạnh của GreenSock Animation Platform
        </p>
        <button ref={buttonRef} onClick={handleButtonClick} className="hero-button">
          Bắt đầu khám phá
        </button>
      </div>
    </section>
  )
}

export default HeroSection

