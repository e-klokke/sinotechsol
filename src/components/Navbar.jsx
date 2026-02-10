import { Menu, X, Hexagon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHeroPage = ['/', '/autonomy'].includes(location.pathname);
  const showLight = isHeroPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', color: showLight ? 'white' : 'var(--primary)', transition: 'color 0.3s ease' }}>
          <Hexagon size={32} color="var(--secondary)" strokeWidth={2} />
          <span>Sino Technology Solutions</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: '500', color: location.pathname === '/' ? 'var(--secondary)' : showLight ? 'rgba(255,255,255,0.9)' : 'var(--text)', transition: 'color 0.3s ease' }}>Home</Link>
          <Link to="/about" style={{ fontWeight: '500', color: location.pathname === '/about' ? 'var(--secondary)' : showLight ? 'rgba(255,255,255,0.9)' : 'var(--text)', transition: 'color 0.3s ease' }}>About</Link>
          
          {/* Services Dropdown */}
          <div className="group" style={{ position: 'relative' }}>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '1rem', 
              fontWeight: '500', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: location.pathname.includes('/services') || location.pathname.includes('/autonomy') ? 'var(--secondary)' : showLight ? 'rgba(255,255,255,0.9)' : 'var(--text)',
              transition: 'color 0.3s ease'
            }}>
              Services <ChevronDown size={16} />
            </button>
            
            {/* Dropdown Content */}
            <div className="dropdown-content" style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--white)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '0.5rem',
              minWidth: '220px',
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.2s ease',
              marginTop: '1rem'
            }}>
              <Link to="/services" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '4px', whiteSpace: 'nowrap' }} className="hover-bg">Consulting Services</Link>
              <Link to="/products" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '4px', whiteSpace: 'nowrap' }} className="hover-bg">Products</Link>
              <Link to="/autonomy" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '4px', whiteSpace: 'nowrap', color: 'var(--accent)', fontWeight: '600' }} className="hover-bg">Autonomous Integration</Link>
            </div>
          </div>

          <Link to="/contact" style={{ fontWeight: '500', color: location.pathname === '/contact' ? 'var(--secondary)' : showLight ? 'rgba(255,255,255,0.9)' : 'var(--text)', transition: 'color 0.3s ease' }}>Contact</Link>
        </div>
        
        <style>{`
          @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
            .mobile-toggle { display: none !important; }
            .group:hover .dropdown-content { opacity: 1 !important; visibility: visible !important; margin-top: 0 !important; }
            .hover-bg:hover { background-color: #f1f5f9; }
          }
        `}</style>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', color: showLight ? 'white' : 'var(--text)', transition: 'color 0.3s ease' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              backgroundColor: 'var(--white)',
              borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem 0' }}>
              <Link to="/" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Home</Link>
              <Link to="/about" style={{ fontSize: '1.1rem', fontWeight: '500' }}>About</Link>
              <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '600' }}>OFFERINGS</span>
                <Link to="/services" style={{ fontSize: '1rem' }}>Consulting Services</Link>
                <Link to="/products" style={{ fontSize: '1rem' }}>Products</Link>
                <Link to="/autonomy" style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: '600' }}>Autonomous Integration</Link>
              </div>
              <Link to="/contact" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
