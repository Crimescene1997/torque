import styles from "./styles.module.css";
import LogoImage from "../../assetsLandingPage/companylogo.png";
import SoldOut3 from "../../assetsFooter/SoldOut3.webp"

export default function FooterComponent() {
    return (
        <>
            <div className={styles.FooterContainer}>
                <div className={styles.NameContainer}>
                    <div className={styles.LogoContainer}>
                        <img className={styles.Logo} src={LogoImage} />
                        <div className={styles.NameText}>"TorqAdventures: Where Every Turn Sparks Excitement, Every Road Unveils Adventure."</div>
                        <div className={styles.EventContainer}>
                            <img className= {styles.Picture} src={SoldOut3}/>
                        </div>

                            <div className= {styles.PictureContainer}>
                                

                        

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}