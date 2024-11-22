import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-address">
             
               
             <img src="/Assets/logo.png" alt="Logo" className="logo" />
                    <h3>Atma Studios - Learn UX/UI Bootcamps & Online Courses</h3>
                    <p>132 Dartmouth Street, KK Nagar, Chennai 600015</p>
                    <p>Email: <a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919345678459">+91 93456 78459</a></p>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h3>Courses</h3>
                        <ul>
                            <li>UX/UI Bootcamp</li>
                            <li>Design System Bootcamp</li>
                            <li>UX Research Bootcamp</li>
                            <li>UI Design Bootcamp</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Get in Touch</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Threads</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <div className="footer-logo-circle">
                        <span>A</span>
                    </div>
                    <p>© Atma Studios | Terms & Privacy</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Powered by dossier.nexus</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
