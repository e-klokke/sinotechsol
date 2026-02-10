import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Server, Cloud, Activity, Cpu, Truck, Shield, Handshake, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '50px',
                marginBottom: '2rem',
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                backgroundColor: 'rgba(6,182,212,0.08)'
              }}>
                <Shield size={14} />
                HEALTHCARE &middot; FINANCIAL &middot; EDUCATION &middot; GOVERNMENT
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                color: 'white',
                lineHeight: '1.15',
                fontWeight: '800'
              }}>
                Next-Generation<br />
                <span style={{
                  background: 'linear-gradient(90deg, var(--accent), #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Infrastructure Services</span>
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                color: '#cbd5e1',
                marginBottom: '2.5rem',
                lineHeight: '1.8',
                maxWidth: '700px',
                margin: '0 auto 2.5rem'
              }}>
                Enterprise-grade technology strategy for mid-market organizations.
                We recommend what fits — not what pays the highest margin — and we build what we recommend.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/services" style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'var(--secondary)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.05rem'
                }}>
                  Explore Our Services <ArrowRight size={20} />
                </Link>
                <Link to="/contact" style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1.05rem'
                }}>
                  Request a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '2rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            color: 'var(--light-text)',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            {[
              { icon: Shield, label: '15 Years Enterprise IT' },
              { icon: Handshake, label: 'Cisco · Dell · Oracle · AWS Partners' },
              { icon: Building2, label: 'Security-First Architecture' },
              { icon: Globe, label: 'Tampa, FL — Serving Nationwide' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <item.icon size={18} color="var(--secondary)" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next-Gen Infrastructure Feature */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              FEATURED CAPABILITY
            </div>
            <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
              Next-Generation Infrastructure Services
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: '1.7' }}>
              Production-ready solutions for autonomous vehicles, robotics, and commercial trucking.
              Infrastructure that's secure, scalable, and built right the first time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: Truck,
                title: 'Autonomous Vehicles & Trucking',
                desc: 'Infrastructure for autonomous cars and commercial trucking — real-time telemetry, V2X systems, fleet management, and safety-critical computing.'
              },
              {
                icon: Activity,
                title: 'Robotics Integration',
                desc: 'Infrastructure for industrial, commercial, and medical robotics. Warehouse automation, manufacturing systems, and on-device edge computing.'
              },
              {
                icon: Cpu,
                title: 'Edge Computing & Sensor Fusion',
                desc: 'Low-latency distributed computing for mission-critical autonomous systems. On-device processing, sensor fusion, and real-time analytics.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <item.icon size={36} color="var(--accent)" style={{ marginBottom: '1.25rem' }} />
                <h3 style={{ color: 'white', fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '0' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/autonomy" style={{
              color: 'var(--accent)',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.05rem',
              borderBottom: '2px solid var(--accent)',
              paddingBottom: '0.2rem'
            }}>
              Learn More About Advanced Capabilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* All Services Preview */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Six Specialized Domains
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              From cybersecurity to autonomous systems, we deliver enterprise-grade capabilities across healthcare, financial, educational, and government sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: Server, title: 'Cybersecurity & Digital Forensics', desc: 'AI-powered threat detection, fraud prevention, and incident response — backed by real forensics expertise.' },
              { icon: Globe, title: 'Government Technology Solutions', desc: 'Technology procurement and integration for public sector organizations. Compliance-first deployments.' },
              { icon: Cloud, title: 'Strategic IT Advisory', desc: 'Technology roadmaps, infrastructure optimization, and digital transformation consulting.' },
              { icon: Activity, title: 'Sports Technology Infrastructure', desc: 'Performance analytics, facility IT infrastructure, and proprietary management platforms.' },
              { icon: Truck, title: 'Autonomous Vehicles & Trucking', desc: 'Infrastructure for autonomous cars, commercial trucking, fleet systems, and edge computing.' },
              { icon: Cpu, title: 'Robotics & Edge Intelligence', desc: 'Industrial, commercial, and medical robotics infrastructure with edge computing and sensor fusion.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--background)',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)'
                }}>
                  <service.icon size={28} color="var(--secondary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sino Tech */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>
                Why Organizations Choose STS
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Founded by Eric Bell — 15 years of enterprise IT infrastructure experience, including managing systems for 40,000+ users at Duke University and Duke Medical Center. We combine deep technical expertise with a vendor-neutral approach.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                We recommend what fits, not what pays the highest margin. Our technology partnerships with Cisco, Dell, Oracle, AWS, Lenovo, and HP give us the flexibility to build the right solution for every client.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { label: 'Security Expertise', detail: 'Master\'s in Digital Forensics, dual Ethical Hacking certs' },
                { label: 'Technology Partners', detail: 'Cisco, Dell, Oracle, AWS, Lenovo, HP' },
                { label: 'Dual Capability', detail: 'Strategic consulting + proprietary product development' },
                { label: 'Emerging Tech Focus', detail: 'AI, autonomous systems, healthcare robotics, edge computing' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={18} color="var(--accent)" />
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0' }}>{item.label}</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0', lineHeight: '1.5' }}>{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Products Teaser */}
      <section className="section" style={{ backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(6,182,212,0.1)', color: 'var(--accent)', borderRadius: '20px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block' }}>
            PROPRIETARY PRODUCTS
          </div>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>We Build What We Recommend</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Orchestrate AI, Legacy Vault, and ClubOs — our proprietary products demonstrate our ability to deliver innovative solutions, not just consulting advice.
          </p>
          <Link to="/products" style={{
            color: 'white',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: '0.2rem'
          }}>
            View Our Products <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Ready to Modernize Your Infrastructure?</h2>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Secure, scalable infrastructure — built right the first time. Let's discuss how STS can support your organization's technology goals.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              padding: '1rem 2.5rem',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Request a Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/services" style={{
              padding: '1rem 2.5rem',
              backgroundColor: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
