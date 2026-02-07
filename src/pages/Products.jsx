import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, MessageSquare, Users, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'orchestrate',
      icon: Zap,
      name: 'Orchestrate',
      tagline: 'AI Sports Executive Assistant',
      description: 'Intelligent AI assistant designed specifically for sports executives, coaches, and administrators. Streamlines decision-making, analyzes performance data, and provides actionable insights.',
      features: [
        'Real-time performance analytics',
        'Automated report generation',
        'Strategic planning assistance',
        'Multi-language support'
      ],
      color: '#3b82f6'
    },
    {
      id: 'legacy-vault',
      icon: MessageSquare,
      name: 'Legacy Vault',
      tagline: 'Athletic Storytelling Platform',
      description: 'Preserve and share the stories of athletes, artists, and musicians. A digital archive that captures experiences, achievements, and wisdom for future generations.',
      features: [
        'Multimedia story capture',
        'Timeline visualization',
        'Community engagement',
        'Legacy preservation'
      ],
      color: '#06b6d4'
    },
    {
      id: 'clubos',
      icon: Users,
      name: 'ClubOs',
      tagline: 'Sports Organization Management',
      description: 'Comprehensive internal portal for sports clubs and academies. Manage scheduling, documentation, messaging, and coaching tools—all in one platform.',
      features: [
        'Scheduling & calendar management',
        'Document storage & sharing',
        'Team messaging & communication',
        'Coaching tools & analytics'
      ],
      color: '#8b5cf6'
    }
  ];

  return (
    <div className="products-page">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(6,182,212,0.2)',
              color: 'var(--accent)',
              borderRadius: '20px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              PROPRIETARY TECHNOLOGY
            </div>
            <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
              Our Products
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
              Innovation in action. We don't just consult—we build cutting-edge solutions for the sports and technology industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '3rem' }}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  padding: '3rem',
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f1f5f9',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${product.color}, ${product.color}99)`
                }} />

                <div>
                  <div style={{
                    display: 'inline-flex',
                    padding: '1.2rem',
                    backgroundColor: `${product.color}15`,
                    borderRadius: '16px',
                    marginBottom: '1.5rem'
                  }}>
                    <product.icon size={40} color={product.color} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{product.name}</h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: product.color,
                    fontWeight: '600',
                    marginBottom: '1.5rem'
                  }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text)' }}>
                    {product.description}
                  </p>
                </div>

                <div style={{
                  backgroundColor: 'var(--background)',
                  padding: '2rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}>Key Features:</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      {product.features.map((feature, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: product.color,
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{
                    padding: '1rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `2px solid ${product.color}20`,
                    textAlign: 'center'
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '0'
                    }}>
                      Beta Program Available
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Interested in our products?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--light-text)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join our beta program or learn more about how these solutions can transform your organization.
          </p>
          <Link to="/contact" style={{
            padding: '1rem 2.5rem',
            backgroundColor: 'var(--secondary)',
            color: 'white',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '1.1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            Get Early Access <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
