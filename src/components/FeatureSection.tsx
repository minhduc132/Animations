import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FeatureSectionProps {
  title: string
  description: string
  features: Array<{ title: string; description: string; icon?: string }>
  reverse?: boolean
}

const FeatureSection = ({ title, description, features, reverse = false }: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Description animation
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Features animation
    if (featuresRef.current) {
      const featureItems = featuresRef.current.querySelectorAll('.feature-item')
      
      featureItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: reverse ? 50 : -50,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }
  }, [features, reverse])

  return (
    <section ref={sectionRef} className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2 ref={titleRef} className="feature-title">{title}</h2>
          <p ref={descRef} className="feature-description">{description}</p>
        </div>
        <div ref={featuresRef} className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              {feature.icon && (
                <div className="feature-icon">
                  <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                </div>
              )}
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

