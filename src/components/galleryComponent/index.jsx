import styles from "./styles.module.css";
import LesothoImage from "../../assets/assetsGalleryPage/LesothoCoverPhoto.webp"
import ValentinesImage from "../../assets/assetsGalleryPage/ValentinesTourCover.webp"
import TankwaImage from "../../assets/assetsGalleryPage/TankwaOutreachCover.webp"
import KeiMouthImage from "../../assets/assetsGalleryPage/KeiMouthCover.webp"
import ClarensImage from "../../assets/assetsGalleryPage/ClarensCover.webp"
import NaturesLoftImage from "../../assets/assetsGalleryPage/NaturesLoftCover.webp"
import CherryFestImage from "../../assets/assetsGalleryPage/CherryFestCover.webp"
import WakkerstroomImage from "../../assets/assetsGalleryPage/WakkerstroomCover.webp"

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
                        Mountain Kingdom Sani Tour -May 2024
                        </div>
                        <div className={styles.Section2LeftBottom}>
                            <img className={styles.Section2Image1} src={LesothoImage} />
                        </div>
                    </div>
                    <div className={styles.Section2Right}>
                        <div className={styles.Section2RightTop}>
                        Valentine’s Tour – February 2024
                        </div>
                        <div className={styles.Section2RightBottom}>
                        <img className={styles.Section2Image2} src={ValentinesImage} />
                        </div>
                    </div>
                </div>
                <div className={styles.Section3}>
                    <div className={styles.Section3Left}>
                        <div className={styles.Section3LeftTop}>
                        Tankwa Outreach
                        </div>
                        <div className={styles.Section3LeftBottom}>
                        <img className={styles.Section3Image1} src={TankwaImage} />
                        </div>
                    </div>
                    <div className={styles.Section3Right}>
                        <div className={styles.Section3RightTop}>
                        Kei Mouth – Coffee Bay
                        </div>
                        <div className={styles.Section3RightBottom}>
                        <img className={styles.Section3Image2} src={KeiMouthImage} />
                        </div>
                    </div>

                </div>
                <div className={styles.Section4}>
                    <div className={styles.Section4Left}>
                        <div className={styles.Section4LeftTop}>
                        Clarens
                        </div>
                        <div className={styles.Section4LeftBottom}>
                        <img className={styles.Section4Image1} src={ClarensImage} />
                        </div>
                    </div>
                    <div className={styles.Section4Right}>
                        <div className={styles.Section4RightTop}>
                        Nature’s Loft
                        </div>
                        <div className={styles.Section4RightBottom}>
                        <img className={styles.Section4Image2} src={NaturesLoftImage} />
                        </div>
                    </div>
                </div>
                <div className={styles.Section5}>
                    <div className={styles.Section5Left}>
                        <div className={styles.Section5LeftTop}>
                        Cherry Festival
                        </div>
                        <div className={styles.Section5LeftBottom}>
                        <img className={styles.Section5Image1} src={CherryFestImage} />
                        </div>
                    </div>
                    <div className={styles.Section5Right}>
                        <div className={styles.Section5RightTop}>
                        Wakkerstroom
                        </div>
                        <div className={styles.Section5RightBottom}>
                        <img className={styles.Section5Image2} src={WakkerstroomImage} />
                        </div>
                    </div>
                </div>
                <div className={styles.Section6}>
                    <div className={styles.Section6Left}>
                        <div className={styles.Section6LeftTop}>
                        </div>
                        <div className={styles.Section6LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section6Right}>
                        <div className={styles.Section6RightTop}>
                        </div>
                        <div className={styles.Section6RightBottom}>
                        </div>
                    </div>
                </div>
                <div className={styles.Section7}>
                    <div className={styles.Section7Left}>
                        <div className={styles.Section7LeftTop}>
                        </div>
                        <div className={styles.Section7LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section7Right}>
                        <div className={styles.Section7RightTop}>
                        </div>
                        <div className={styles.Section7RightBottom}>
                        </div>
                    </div>
                </div>
                <div className={styles.Section8}>
                    <div className={styles.Section8Left}>
                        <div className={styles.Section8LeftTop}>
                        </div>
                        <div className={styles.Section8LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section8Right}>
                        <div className={styles.Section8RightTop}>
                        </div>
                        <div className={styles.Section8RightBottom}>
                        </div>
                    </div>
                </div>
                <div className={styles.Section9}>
                    <div className={styles.Section9Left}>
                        <div className={styles.Section9LeftTop}>
                        </div>
                        <div className={styles.Section9LeftBottom}>
                        </div>
                    </div>
                    <div className={styles.Section9Right}>
                        <div className={styles.Section9RightTop}>
                        </div>
                        <div className={styles.Section9RightBottom}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}