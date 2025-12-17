import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface ModernCardProps {
  title: string
  description: string
  icon?: string
  gradient?: string
  index?: number
}

const ModernCard = ({ title, description, icon, gradient, index = 0 }: ModernCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Initial animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      }
    )
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) * 0.1
    const moveY = (y - centerY) * 0.1

    gsap.to(card, {
      x: moveX,
      y: moveY,
      rotationY: moveX * 0.05,
      rotationX: -moveY * 0.05,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return

    gsap.to(card, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    const card = cardRef.current
    if (!card) return

    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      className="modern-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        background: gradient || 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      {icon && (
        <div className="card-icon">
          <span style={{ fontSize: '3rem' }}>{icon}</span>
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className={`card-glow ${isHovered ? 'active' : ''}`}></div>
    </div>
  )
}

export default ModernCard

