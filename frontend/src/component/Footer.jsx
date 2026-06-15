import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#09090b',
            borderTop: '1px solid #1f1f23',
            padding: '40px 20px',
            marginTop: '80px'
        }}>
            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px'
            }}>

                {/* Brand */}
                <div>
                    <h3 style={{ 
                        color: '#f97316', 
                        margin: '0', 
                        fontSize: '1.8rem',
                        fontWeight: '700'
                    }}>
                        ShopNest
                    </h3>
                    <p style={{ 
                        color: '#a1a1aa', 
                        fontSize: '0.9rem',
                        marginTop: '5px'
                    }}>
                        Premium E-Commerce Platform
                    </p>
                </div>

                {/* Links */}
                <div style={{ 
                    display: 'flex', 
                    gap: '20px',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/about" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>About Us</Link>
                    <Link to="/return" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Return Policy</Link>
                    <Link to="/disclaimer" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Disclaimer</Link>
                </div>

                {/* Copyright */}
                <div style={{ 
                    color: '#a1a1aa', 
                    fontSize: '0.9rem',
                    textAlign: 'center'
                }}>
                    &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;