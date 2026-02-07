import { motion } from 'framer-motion';

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
            About Us
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
            Innovative Solutions for Your Business
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Sino Technology Solutions is an emerging technology integrator specializing in next-generation infrastructure and innovation. Based in Portugal with a global perspective, we combine strategic IT consulting with proprietary technology products.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We're not your typical consultancy. We build what we recommend—from AI-powered sports management tools to autonomous infrastructure systems. Our team brings deep expertise in cybersecurity, government technology, sports IT, and emerging fields like autonomous systems and healthcare robotics.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                As an agile startup, we move fast and think differently. We partner with forward-thinking organizations ready to adopt cutting-edge solutions that give them a competitive edge.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ 
                backgroundColor: 'var(--background)', 
                padding: '2rem', 
                borderRadius: '20px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Us?</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Emerging Tech Focus: Autonomous, AI, Healthcare Robotics',
                  'Dual Capability: Consulting + Proprietary Products',
                  'Government VAR: Certified for federal contracting',
                  'Certified Engineers: Cisco, Microsoft, Zoom',
                  'Agile Innovation: Startup speed, enterprise quality',
                  'Global Reach: Portugal-based, internationally focused'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.05rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
