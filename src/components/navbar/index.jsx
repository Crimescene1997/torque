import styles from "./styles.module.css";
import LogoImage from "../../assets/assetsLandingPage/companylogo.png";
import { Link } from "react-router-dom";

export default function NavbarComponent () {
    return(
        <>
        <div className={styles.MainContainer}>
            <div className={styles.LogoContainer}>
            <Link to="/">
            <img className={styles.Logo} src={LogoImage}/>
            </Link>
               
            </div>
            <div className={styles.LinkContainer}>
            <Link to="/about" className={styles.Links} >About</Link>
            <Link to="/gallery" className={styles.Links} >Gallery</Link>
            <Link to="/contact" className={styles.Links} >Contact</Link>
            <Link to="/blog"  className={styles.Links} >Blog</Link>
            <Link to="/support"  className={styles.Links} >Support & FAQ</Link>
            <Link to="/events"  className={styles.EventLink} > Book a Tour</Link>
         
            </div>
        </div>
        </>
    )
}