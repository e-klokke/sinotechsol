import { Link } from 'react-router-dom';
import { Hexagon, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', marginBottom: '1rem' }}>
              <Hexagon size={32} color="var(--secondary)" fill="rgba(59, 130, 246, 0.2)" strokeWidth={2} />
              <span>Sino Technology Solutions</span>
            </div>
            <p style={{ color: '#94a3b8' }}>
              Next-generation technology integration for government, sports, and enterprise. We build what we recommend.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/" style={{ color: '#94a3b8' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: '#94a3b8' }}>Services</Link></li>
              <li><Link to="/products" style={{ color: '#94a3b8' }}>Products</Link></li>
              <li><Link to="/autonomy" style={{ color: '#94a3b8' }}>Advanced Capabilities</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', color: '#94a3b8' }}>
                <MapPin size={20} style={{ flexShrink: 0 }} />
                <span>7901 4th N STE 300<br />St Petersburg, FL 33702</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: '#94a3b8' }}>
                <Mail size={20} />
                <a href="mailto:info@sinotechsol.com" style={{ color: '#94a3b8' }}>info@sinotechsol.com</a>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: '#94a3b8' }}>
                <Phone size={20} />
                <a href="tel:+19193353723" style={{ color: '#94a3b8' }}>+1 (919) 335-3723</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#64748b' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Sino Technology Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
