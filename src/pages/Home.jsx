import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Server, Cloud, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px' // Navbar clearance
      }}>
        {/* Abstract Background Shapes */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}>
              Next-Generation Technology Integration for <span style={{ color: 'var(--accent)' }}>Government, Sports & Enterprise</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              We don't just consult—we build. From cybersecurity and autonomous systems to proprietary AI products, we deliver emerging technology solutions that give you a competitive edge.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/services" style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'var(--secondary)', 
                color: 'white', 
                borderRadius: '8px', 
                fontWeight: '600', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link to="/about" style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                borderRadius: '8px', 
                fontWeight: '600' 
              }}>
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Emerging Technology. Real Solutions.</h2>
            <p style={{ fontSize: '1.1rem' }}>From cybersecurity to autonomous systems, we deliver cutting-edge capabilities across six specialized domains.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Server, title: 'Cybersecurity & Forensics', desc: 'AI-powered threat detection and fraud prevention.' },
              { icon: Globe, title: 'Government Solutions', desc: 'VAR services for federal, state, and local agencies.' },
              { icon: Cloud, title: 'Strategic IT Advisory', desc: 'Technology roadmaps and digital transformation.' },
              { icon: Activity, title: 'Sports Technology', desc: 'Performance analytics and facility infrastructure.' },
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'var(--background)', 
                  borderRadius: '16px', 
                  border: '1px solid #e2e8f0' 
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'white', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <service.icon size={32} color="var(--secondary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '1rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Teaser */}
      <section className="section" style={{ backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(6,182,212,0.1)', color: 'var(--accent)', borderRadius: '20px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
            PROPRIETARY PRODUCTS
          </div>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>We Build What We Recommend</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#cbd5e1' }}>
            Orchestrate AI, Legacy Vault, and ClubOs—our proprietary products demonstrate our ability to deliver innovative solutions, not just consulting advice.
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
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to elevate your technology?</h2>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Let our team of experts partner with your business to deliver tailor-made practical solutions, fast.
          </p>
          <Link to="/contact" style={{ 
            padding: '1rem 2.5rem', 
            backgroundColor: 'var(--accent)', 
            color: 'white', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '1.1rem',
            display: 'inline-block'
          }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
