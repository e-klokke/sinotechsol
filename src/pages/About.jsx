import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}
          >
            About Sino Technology Solutions
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
            Enterprise-grade technology strategy for mid-market organizations — without the bureaucracy or vendor lock-in.
          </p>
        </div>
      </div>

      {/* Founder & Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Eric Bell spent 15 years building IT infrastructure for large enterprises — including managing systems for 40,000+ users at Duke University and Duke Medical Center. He holds a Master's degree in Digital Forensics and dual Ethical Hacking certifications, bringing security expertise that most consultants outsource.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                In 2024, he founded Sino Technology Solutions to give mid-market companies access to enterprise-grade technology strategy — without the bureaucracy or vendor lock-in.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                As a certified partner with Cisco, Dell, Oracle, AWS, Lenovo, and HP, Eric recommends what fits, not what pays the highest margin. STS is built to serve healthcare, financial, educational, and government organizations who need infrastructure that's secure, scalable, and built right the first time.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                A former professional athlete, Eric brings the same discipline and competitive edge to technology that earned results on the court. He stays ahead of emerging trends — from AI integration to evolving technology solutions — so his clients don't have to.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {/* Founder Card */}
              <div style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '50%',
                  height: '100%',
                  background: 'radial-gradient(circle at 100% 0%, rgba(6,182,212,0.15) 0%, transparent 70%)'
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>FOUNDER & CEO</p>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>Eric Bell</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[
                      '15 years enterprise IT infrastructure',
                      'Master\'s in Digital Forensics',
                      'Dual Ethical Hacking certifications',
                      '40,000+ user environments (Duke University & Duke Medical)',
                      'Former professional athlete'
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                        <CheckCircle size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why Choose Us */}
              <div style={{
                backgroundColor: 'var(--background)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Why Choose STS</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Vendor-Neutral Recommendations — We recommend what fits, not what pays',
                    'Security-First Approach — Digital forensics and ethical hacking expertise built in',
                    'Enterprise Experience — 15 years managing large-scale infrastructure',
                    'Technology Partnerships — Cisco, Dell, Oracle, AWS, Lenovo, HP',
                    'Industry Focus — Healthcare, financial, educational, and government',
                    'Tampa, FL Headquarters — Serving clients nationwide'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.05rem' }}>
                      <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section style={{ backgroundColor: 'white', padding: '3rem 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em', color: 'var(--light-text)', textTransform: 'uppercase' }}>Certified Technology Partnerships</p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            {['Cisco', 'Dell', 'Oracle', 'AWS', 'Lenovo', 'HP'].map((partner, i) => (
              <div key={i} style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--text)',
                letterSpacing: '0.02em'
              }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
