import styles from "./styles.module.css";
import LesothoImage from "../../assets/assetsGalleryPage/LesothoCoverPhoto.webp"
import ValentinesImage from "../../assets/assetsGalleryPage/ValentinesTourCover.webp"
import TankwaImage from "../../assets/assetsGalleryPage/TankwaOutreachCover.webp"
import KeiMouthImage from "../../assets/assetsGalleryPage/KeiMouthCover.webp"
import ClarensImage from "../../assets/assetsGalleryPage/ClarensCover.webp"
import NaturesLoftImage from "../../assets/assetsGalleryPage/NaturesLoftCover.webp"
import CherryFestImage from "../../assets/assetsGalleryPage/CherryFestCover.webp"
import WakkerstroomImage from "../../assets/assetsGalleryPage/WakkerstroomCover.webp"
import DrakensburgImage from "../../assets/assetsGalleryPage/DrakensbergCover.webp"
import FouriesburgImage from "../../assets/assetsGalleryPage/FouriesbergCover.webp"
import LesothoImage2 from "../../assets/assetsGalleryPage/LesothoCover2.webp"
import KaapsehoopImage from "../../assets/assetsGalleryPage/KaapsehoopCover.webp"
import BezhoekImage from "../../assets/assetsGalleryPage/BezhoekCover.webp"
import RandomAdventuresImage from "../../assets/assetsGalleryPage/RandomAdventuresCover.webp"
import BotswanaImage from "../../assets/assetsGalleryPage/BotswanaCover.png"
import { Link } from "react-router-dom";

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
                            <Link to="/MountainKindom">
                                Mountain Kingdom Sani Tour
                            </Link>
                        </div>
                        <div className={styles.Section2LeftBottom}>
                            <Link to="/MountainKindom">
                                <img className={styles.Section2Image1} src={LesothoImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section2Right}>
                        <div className={styles.Section2RightTop}>
                            <Link to="/Valentines">
                                Valentine’s Tour – February 2024
                            </Link>
                        </div>
                        <div className={styles.Section2RightBottom}>
                            <Link to="/Valentines">
                                <img className={styles.Section2Image2} src={ValentinesImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section3}>
                    <div className={styles.Section3Left}>
                        <div className={styles.Section3LeftTop}>
                            <Link to="/Tankwa">
                                Tankwa Outreach
                            </Link>
                        </div>
                        <div className={styles.Section3LeftBottom}>
                            <Link to="/Tankwa">
                                <img className={styles.Section3Image1} src={TankwaImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section3Right}>
                        <div className={styles.Section3RightTop}>
                            <Link to="/CoffeBay">
                                Kei Mouth – Coffee Bay
                            </Link>
                        </div>
                        <div className={styles.Section3RightBottom}>
                            <Link to="/CoffeBay">
                                <img className={styles.Section3Image2} src={KeiMouthImage} />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={styles.Section4}>
                    <div className={styles.Section4Left}>
                        <div className={styles.Section4LeftTop}>
                            <Link to="/Clarens">
                                Clarens
                            </Link>
                        </div>
                        <div className={styles.Section4LeftBottom}>
                            <Link to="/Clarens">
                                <img className={styles.Section4Image1} src={ClarensImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section4Right}>
                        <div className={styles.Section4RightTop}>
                            <Link to="/NaturesLoft">
                                Nature’s Loft
                            </Link>
                        </div>
                        <div className={styles.Section4RightBottom}>
                            <Link to="/NaturesLoft">
                                <img className={styles.Section4Image2} src={NaturesLoftImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section5}>
                    <div className={styles.Section5Left}>
                        <div className={styles.Section5LeftTop}>
                            <Link to="/CherryFest">
                                Cherry Festival
                            </Link>
                        </div>
                        <div className={styles.Section5LeftBottom}>
                            <Link to="/CherryFest">
                                <img className={styles.Section5Image1} src={CherryFestImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section5Right}>
                        <div className={styles.Section5RightTop}>
                            <Link to="/Wakkerstroom">
                                Wakkerstroom
                            </Link>
                        </div>
                        <div className={styles.Section5RightBottom}>
                            <Link to="/Wakkerstroom">
                                <img className={styles.Section5Image2} src={WakkerstroomImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section6}>
                    <div className={styles.Section6Left}>
                        <div className={styles.Section6LeftTop}>
                            <Link to="/Drakensberg">
                                Drakensberg
                            </Link>
                        </div>
                        <div className={styles.Section6LeftBottom}>
                            <Link to="/Drakensberg">
                                <img className={styles.Section6Image1} src={DrakensburgImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section6Right}>
                        <div className={styles.Section6RightTop}>
                            <Link to="/Fouriesburg">
                                Fouriesburg
                            </Link>
                        </div>
                        <div className={styles.Section6RightBottom}>
                            <Link to="/Fouriesburg">
                                <img className={styles.Section6Image2} src={FouriesburgImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section7}>
                    <div className={styles.Section7Left}>
                        <div className={styles.Section7LeftTop}>
                            <Link to="/Lesotho">
                                Lesotho
                            </Link>
                        </div>
                        <div className={styles.Section7LeftBottom}>
                            <Link to="/Lesotho">
                                <img className={styles.Section7Image1} src={LesothoImage2} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section7Right}>
                        <div className={styles.Section7RightTop}>
                            <Link to="/Kaapsehoop">
                                Kaapsehoop
                            </Link>
                        </div>
                        <div className={styles.Section7RightBottom}>
                            <Link to="/Kaapsehoop">
                                <img className={styles.Section7Image2} src={KaapsehoopImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section8}>
                    <div className={styles.Section8Left}>
                        <div className={styles.Section8LeftTop}>
                            <Link to="/Bezhoek">
                                Bezhoek
                            </Link>
                        </div>
                        <div className={styles.Section8LeftBottom}>
                            <Link to="/Bezhoek">
                                <img className={styles.Section8Image1} src={BezhoekImage} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Section8Right}>
                        <div className={styles.Section8RightTop}>
                            <Link to="/RandomAdventures">
                                Random Adventures
                            </Link>
                        </div>
                        <div className={styles.Section8RightBottom}>
                            <Link to="/RandomAdventures">
                                <img className={styles.Section8Image2} src={RandomAdventuresImage} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Section9}>
                    <div className={styles.Section9Left}>
                        <div className={styles.Section9LeftTop}>
                            <Link to="/Botswana">
                                Botswana
                            </Link>
                        </div>
                        <div className={styles.Section9LeftBottom}>
                            <Link to="/Botswana">
                                <img className={styles.Section9Image1} src={BotswanaImage} />
                            </Link>
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