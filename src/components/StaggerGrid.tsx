import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StaggerGridProps {
  items: Array<{ id: number; title: string; color: string }>
}

const StaggerGrid = ({ items }: StaggerGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const boxes = grid.querySelectorAll('.stagger-item')

    gsap.fromTo(
      boxes,
      {
        opacity: 0,
        scale: 0,
        rotation: -180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: {
          amount: 1,
          grid: 'auto',
          from: 'center'
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: grid,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Hover effect
    boxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        gsap.to(box, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      box.addEventListener('mouseleave', () => {
        gsap.to(box, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  }, [items])

  return (
    <div ref={gridRef} className="stagger-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className="stagger-item"
          style={{ backgroundColor: item.color }}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default StaggerGrid

