import styles from "./styles.module.css";
import PeterImage from "../../assets/assetsContactPage/ContactPeter.jpg"
export default function SupportComponent() {
    return (
        <>
            <div className={styles.MainContainer}>
                <div className={styles.HeroContainer}>
                    <div className={styles.HeroContainerHeader}>
                    </div>
                    <div className={styles.HeroContainerBody}>
                    </div>
                </div>
                <div className={styles.Section1}>
                    <div className={styles.Section1Left}>
                        <div className={styles.Section1LeftHeader}>
                        </div>
                        <div className={styles.Section1LeftCallContainer}>
                        </div>
                        <div className={styles.Section1LeftWhatsappContainer}>
                        </div>
                        <div className={styles.Section1LeftEmailContainer}>
                        </div>
                    </div>
                    <div className={styles.Section1Right}>
                        <div className={styles.Section1RightHeader}>
                            <div className={styles.Section1RightHeaderText}>
                                Peter Dixon
                            </div>
                        </div>
                         <img className={styles.Section1RightImage} src={PeterImage} />                     
                    </div>
                </div>
            </div>

        </>
    )
}