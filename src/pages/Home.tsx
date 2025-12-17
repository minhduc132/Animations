import ModernHero from '../components/ModernHero'
import TextReveal from '../components/TextReveal'
import ModernCard from '../components/ModernCard'
import FeatureSection from '../components/FeatureSection'
import ScrollSection from '../components/ScrollSection'
import ParallaxBox from '../components/ParallaxBox'
import StaggerGrid from '../components/StaggerGrid'
import '../styles/home.css'
import '../styles/components.css'

const Home = () => {
  const cards = [
    {
      id: 1,
      title: 'Smooth Animations',
      description: 'Tạo các animation mượt mà và chuyên nghiệp với GSAP',
      icon: '✨',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))'
    },
    {
      id: 2,
      title: 'Scroll Triggers',
      description: 'Kích hoạt animation khi scroll đến vị trí cụ thể',
      icon: '🎯',
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.2))'
    },
    {
      id: 3,
      title: 'Timeline Control',
      description: 'Điều khiển nhiều animation cùng lúc với Timeline',
      icon: '⏱️',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))'
    },
    {
      id: 4,
      title: 'Performance',
      description: 'Hiệu suất cao với GPU acceleration',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))'
    }
  ]

  const features = [
    {
      title: 'Magnetic Effects',
      description: 'Tạo hiệu ứng từ tính khi hover vào các element',
      icon: '🧲'
    },
    {
      title: 'Scroll Animations',
      description: 'Animation tự động kích hoạt khi scroll đến vị trí',
      icon: '📜'
    },
    {
      title: 'Glassmorphism',
      description: 'Hiệu ứng kính mờ hiện đại và đẹp mắt',
      icon: '🔮'
    },
    {
      title: '3D Transforms',
      description: 'Chuyển đổi 3D mượt mà với perspective',
      icon: '🎨'
    }
  ]

  const gridItems = [
    { id: 1, title: 'Item 1', color: '#6366f1' },
    { id: 2, title: 'Item 2', color: '#8b5cf6' },
    { id: 3, title: 'Item 3', color: '#ec4899' },
    { id: 4, title: 'Item 4', color: '#f59e0b' },
    { id: 5, title: 'Item 5', color: '#10b981' },
    { id: 6, title: 'Item 6', color: '#3b82f6' },
    { id: 7, title: 'Item 7', color: '#ef4444' },
    { id: 8, title: 'Item 8', color: '#14b8a6' },
    { id: 9, title: 'Item 9', color: '#f97316' }
  ]

  return (
    <div className="home-page">
      <ModernHero />

      <section className="section modern-section">
        <TextReveal text="Khám phá các tính năng của GSAP" delay={0.5} />
        <div className="modern-cards-container">
          {cards.map((card, index) => (
            <ModernCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              index={index}
            />
          ))}
        </div>
      </section>

      <FeatureSection
        title="Tính năng nổi bật"
        description="Khám phá các tính năng mạnh mẽ của GSAP để tạo ra những trải nghiệm người dùng tuyệt vời"
        features={features}
      />

      <ParallaxBox speed={0.3} className="parallax-section">
        <div className="parallax-content">
          <h2>Parallax Effect</h2>
          <p>Cuộn trang để xem hiệu ứng parallax mượt mà</p>
        </div>
      </ParallaxBox>

      <ScrollSection className="scroll-section-wrapper">
        <div className="scroll-element">
          <h2>Scroll Trigger Animation</h2>
          <p>Animation này sẽ kích hoạt khi bạn scroll đến đây</p>
        </div>
        <div className="scroll-element">
          <h2>Một element khác</h2>
          <p>Mỗi element sẽ animate riêng biệt với timing khác nhau</p>
        </div>
        <div className="scroll-element">
          <h2>Rất mượt mà</h2>
          <p>GSAP đảm bảo hiệu suất cao và animation mượt mà</p>
        </div>
      </ScrollSection>

      <section className="section modern-section">
        <TextReveal text="Stagger Grid Animation" delay={0.2} />
        <StaggerGrid items={gridItems} />
      </section>

      <section className="section modern-section">
        <TextReveal text="Cảm ơn bạn đã xem!" delay={0.3} />
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginTop: '2rem' }}>
          Demo GSAP animations với các hiệu ứng hiện đại và mượt mà
        </p>
      </section>
    </div>
  )
}

export default Home

