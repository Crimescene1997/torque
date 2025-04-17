import styles from "./styles.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.FooterSection}>
          <h3>About Us</h3>
          <p>We are dedicated to providing exceptional travel experiences and unforgettable adventures for our customers.</p>
          <div className={styles.SocialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div className={styles.FooterSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/support">Support & FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.FooterSection}>
          <h3>Contact Info</h3>
          <ul className={styles.ContactInfo}>
            <li>
              <MdLocationOn className={styles.Icon} />
              <span>123 Travel Street, Adventure City, AC 12345</span>
            </li>
            <li>
              <MdPhone className={styles.Icon} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <MdEmail className={styles.Icon} />
              <span>info@traveladventures.com</span>
            </li>
          </ul>
        </div>

        <div className={styles.FooterSection}>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for travel updates and exclusive offers!</p>
          <form className={styles.NewsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={styles.FooterBottom}>
        <p>&copy; 2024 Travel Adventures. All rights reserved.</p>
      </div>
    </footer>
  );
}
