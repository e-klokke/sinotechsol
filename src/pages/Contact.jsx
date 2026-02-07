import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}
          >
            Contact Us
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
            Ready to discuss your project? Get in touch for consulting, services, or product inquiries.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '12px', color: 'var(--secondary)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Office</h3>
                    <p>7901 4th N STE 300<br />St Petersburg, FL 33702</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '12px', color: 'var(--secondary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h3>
                    <p><a href="mailto:info@sinotechsol.com" style={{ color: 'var(--secondary)' }}>info@sinotechsol.com</a></p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '12px', color: 'var(--secondary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h3>
                    <p><a href="tel:+19193353723" style={{ color: 'var(--secondary)' }}>+1 (919) 335-3723</a></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #f1f5f9' }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit' }}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  style={{ 
                    padding: '1rem', 
                    backgroundColor: 'var(--secondary)', 
                    color: 'white', 
                    borderRadius: '8px', 
                    fontWeight: '600', 
                    fontSize: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
