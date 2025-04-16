import styles from "./styles.module.css";
import LogoImage from "../../assetsLandingPage/companylogo.png";

export default function FooterComponent () {
    return(
        <>
        <div className= {styles.FooterContainer}>
            <div className= {styles.NameContainer}>
                <div className= {styles.LogoContainer}>
                <img className={styles.Logo} src={LogoImage}/>
                <div className={styles.NameText}>"TorqAdventures: Where Every Turn Sparks Excitement, Every Road Unveils Adventure."</div>
                </div>
            </div>

        </div>
        
        </>
    )
}