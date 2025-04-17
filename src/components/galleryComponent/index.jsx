import styles from "./styles.module.css";

export default function GalleryComponent() {
    return (
        <>
            <div className={styles.MainContainer}>
                <div className={styles.Section1}>
                    <div className={styles.Section1Header}>
                        Gallery
                    </div>
                    <div className={styles.Section1Body}>
                        Experience unforgettable moments through our gallery page, which showcases a stunning collection of carefully curated albums capturing the essence of our adventures. Relive the memories through every picture.
                    </div>
                </div>
                <div className={styles.Section2}>
                    <div className={styles.Section2Left}>
                        <div className={styles.Section2LeftTop}>
                        </div>
                        <div className={styles.Section2LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section2Right}>
                        <div className={styles.Section2RightTop}>
                        </div>
                        <div className={styles.Section2RightBottom}>
                        </div>
                    </div>
                </div>
                <div className={styles.Section3}>
                    <div className={styles.Section3Left}>
                       <div className={styles.Section3LeftTop}>
                       </div>
                        <div className={styles.Section3LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section3Right}>
                        <div className={styles.Section3RightTop}>
                        </div>
                        <div className={styles.Section3RightBottom}>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}