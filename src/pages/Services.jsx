import { motion } from 'framer-motion';
import { Server, Cloud, Globe, Activity, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'cybersecurity',
      icon: Server,
      title: 'Cybersecurity & Digital Forensics',
      description: 'AI-powered security solutions to detect threats, investigate incidents, and prevent fraud before it impacts your operations.',
      details: ['Digital Forensics & Incident Response', 'AI-Driven Threat Detection', 'Fraud Prevention Systems', 'Security Audits & Compliance'],
      audience: 'Government agencies, financial institutions, enterprises'
    },
    {
      id: 'government',
      icon: Globe,
      title: 'Public Sector Technology Solutions',
      description: 'Technology procurement and integration designed for public sector compliance requirements. Secure hardware, software, and systems built to meet government standards.',
      details: ['Compliance-First Technology Procurement', 'Secure Hardware & Software Deployment', 'Public Sector Infrastructure Integration', 'Regulatory & Security Standards Alignment'],
      audience: 'Government agencies, public sector organizations, education'
    },
    {
      id: 'advisory',
      icon: Cloud,
      title: 'Strategic IT Advisory',
      description: 'Technology consulting and strategic guidance to optimize your infrastructure, modernize systems, and accelerate digital transformation.',
      details: ['IT Roadmap Development', 'Infrastructure Optimization', 'Vendor Selection & Evaluation', 'Digital Transformation'],
      audience: 'Growing businesses, sports organizations'
    },
    {
      id: 'sports',
      icon: Activity,
      title: 'Sports Technology Infrastructure',
      description: 'Specialized IT solutions for sports clubs, academies, and organizations—from performance analytics to facility-wide infrastructure.',
      details: ['Performance Analytics Systems', 'Stadium & Facility IT Infrastructure', 'ClubOs Management Platform', 'Video Analysis & Data Collection'],
      audience: 'Sports clubs, academies, professional teams'
    },
    {
      id: 'autonomous',
      icon: Server,
      title: 'Autonomous Vehicles & Trucking Infrastructure',
      description: 'Production-ready infrastructure for autonomous cars, commercial trucking fleets, and connected vehicle systems. From pilot programs to full-scale deployment.',
      details: ['Autonomous Vehicle & Trucking Systems', 'V2X Communication Infrastructure', 'Fleet Telemetry & Route Optimization', 'Safety-Critical Computing Platforms'],
      audience: 'Autonomous vehicle companies, trucking fleets, logistics operators'
    },
    {
      id: 'robotics',
      icon: Activity,
      title: 'Robotics & Edge Intelligence',
      description: 'Infrastructure for industrial, commercial, and medical robotics — with edge computing for on-device decision-making and real-time analytics.',
      details: ['Industrial & Warehouse Robotics Infrastructure', 'Medical Robotics IT Integration', 'Edge Computing & Sensor Fusion', 'Real-Time Analytics Pipelines'],
      audience: 'Manufacturing, warehousing, healthcare robotics'
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}
          >
            Our Solutions
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
            Enterprise-grade technology solutions across healthcare, financial, educational, and government sectors
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '4rem' }}>
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '2rem',
                  padding: '2rem',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #f1f5f9'
                }}
              >
                <div>
                  <div style={{ 
                    display: 'inline-flex', 
                    padding: '1rem', 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                    borderRadius: '12px',
                    marginBottom: '1.5rem',
                    color: 'var(--secondary)'
                  }}>
                    <service.icon size={40} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>{service.description}</p>
                </div>
                
                <div style={{ backgroundColor: 'var(--background)', padding: '2rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>What We Deliver:</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    {service.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <CheckCircle size={18} color="var(--accent)" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '0.9rem', color: 'var(--light-text)', marginBottom: '0' }}>
                    <strong>For:</strong> {service.audience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
