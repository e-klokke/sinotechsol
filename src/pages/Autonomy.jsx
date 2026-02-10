import { motion } from 'framer-motion';
import { Cpu, Truck, Activity, ArrowRight, Zap, Car, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Autonomy = () => {
  return (
    <div className="autonomy-page">
      {/* Hero Section - Darker, High Tech Theme */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0a0a',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 60%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              marginBottom: '2rem',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              <Zap size={16} fill="currentColor" />
              <span>ADVANCED CAPABILITIES</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              fontWeight: '800',
              background: 'linear-gradient(to right, #ffffff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Next-Generation<br />
              Infrastructure Services
            </h1>

            <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '3rem', maxWidth: '700px', lineHeight: '1.6' }}>
              Production-ready infrastructure solutions for autonomous vehicles, robotics, and commercial trucking. Secure, scalable systems built right the first time.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '1rem 2.5rem',
                backgroundColor: 'var(--white)',
                color: 'black',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                Discuss Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/services" style={{
                padding: '1rem 2.5rem',
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section" style={{ backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: Car,
                title: 'Autonomous Vehicle Infrastructure',
                desc: 'End-to-end infrastructure for autonomous car operations. Real-time telemetry, V2X communication systems, sensor data processing, and safety-critical computing platforms. From pilot programs to production-scale deployment.',
                example: 'Autonomous vehicle companies, OEMs, mobility startups'
              },
              {
                icon: Truck,
                title: 'Commercial Trucking & Fleet Systems',
                desc: 'Intelligent fleet infrastructure for autonomous and semi-autonomous trucking. Route optimization, platooning systems, regulatory compliance, and real-time fleet telemetry across long-haul and last-mile operations.',
                example: 'Trucking fleets, logistics companies, freight operators'
              },
              {
                icon: Bot,
                title: 'Robotics Integration & Edge Computing',
                desc: 'Infrastructure for industrial and commercial robotics — warehouse automation, medical robotics, and manufacturing systems. Low-latency edge computing for on-device decision-making and real-time analytics.',
                example: 'Warehousing, manufacturing, healthcare robotics'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <item.icon size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '1.5rem' }}>{item.desc}</p>
                <div style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(6,182,212,0.1)',
                  borderRadius: '8px',
                  borderLeft: '3px solid var(--accent)'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0' }}>
                    <strong style={{ color: 'var(--accent)' }}>For:</strong> {item.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', color: 'white', borderTop: '1px solid #1e293b' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Infrastructure Challenges We Solve</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Autonomous systems demand infrastructure that's fundamentally different from traditional IT. We build it.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              'Real-time telemetry & data pipelines',
              'Safety-critical compute platforms',
              'V2X & vehicle communication systems',
              'Edge processing at the fleet level',
              'Regulatory & compliance alignment',
              'Sensor fusion infrastructure'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <Cpu size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to deploy next-generation infrastructure?</h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Let's discuss how autonomous vehicle, trucking, or robotics infrastructure can transform your operations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              padding: '1rem 3rem',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.1rem'
            }}>
              Schedule Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/services" style={{
              padding: '1rem 3rem',
              backgroundColor: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '600',
              display: 'inline-block',
              fontSize: '1.1rem'
            }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Autonomy;
