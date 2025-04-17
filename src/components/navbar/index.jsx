import styles from "./styles.module.css";
import LogoImage from "../../assets/assetsLandingPage/companylogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavbarComponent () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div className={styles.MainContainer}>
            <div className={styles.LogoContainer}>
                <Link to="/">
                    <img className={styles.Logo} src={LogoImage} alt="Logo"/>
                </Link>
            </div>
            <div className={`${styles.LinkContainer} ${isOpen ? styles.active : ''}`}>
                <Link to="/about" className={styles.Links} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/gallery" className={styles.Links} onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link to="/contact" className={styles.Links} onClick={() => setIsOpen(false)}>Contact</Link>
                <Link to="/blog" className={styles.Links} onClick={() => setIsOpen(false)}>Blog</Link>
                <Link to="/support" className={styles.Links} onClick={() => setIsOpen(false)}>Support & FAQ</Link>
                <Link to="/events" className={styles.EventLink} onClick={() => setIsOpen(false)}>Book a Tour</Link>
            </div>
            <div className={styles.HamburgerIcon} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}