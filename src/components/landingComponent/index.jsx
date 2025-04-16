import styles from "./styles.module.css";

export default function LandingComponent() {
    return (
        <div className={styles.MainContainer}>
           <div className={styles.HeroContainer}>
           </div>
           <div className={styles.Section1}>
            <div className={styles.Section1Left}>
            </div>
            <div className={styles.Section1Right}>
            </div>
           </div>
           <div className={styles.Section2}>  
            <div className={styles.Section2Top}>
                <div className={styles.Section2TopHeader}>
                Discover the magic of TorqAdventures.
                </div>
                <div className={styles.Section2TopSubHeader}>
                TorqAdventure offers a unique experience filled with fellowship, personalized experiences, and unforgettable moments that go beyond just a ride. It’s a gateway to unparalleled adventures on two wheels.
                </div>
            </div>
            <div className={styles.Section2Bottom}>
                {/* <img src={}/>
                <img src={}/>
                <img src={}/>
                <img src={}/>
                <img src={}/>
                <img src={}/> */}
            </div>
           </div>
           <div className={styles.Section3}>           
           </div>
           <div className={styles.Section4}>           
           </div>
           <div className={styles.Section5}>           
           </div>
           <div className={styles.Section6}>           
           </div>
        </div>
    )
}   