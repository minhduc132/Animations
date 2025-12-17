import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const AnimatedButton = ({ children, onClick, variant = 'primary', className = '' }: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    // Initial animation
    gsap.fromTo(
      button,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
    )
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) * 0.2
    const moveY = (y - centerY) * 0.2

    gsap.to(button, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    const button = buttonRef.current
    if (!button) return

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    const ripple = rippleRef.current
    if (!button || !ripple) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.set(ripple, {
      left: x,
      top: y,
      scale: 0,
      opacity: 1
    })

    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })

    // Button click animation
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    })

    onClick?.()
  }

  return (
    <button
      ref={buttonRef}
      className={`animated-button ${variant} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="button-content">{children}</span>
      <span ref={rippleRef} className="button-ripple"></span>
    </button>
  )
}

export default AnimatedButton

