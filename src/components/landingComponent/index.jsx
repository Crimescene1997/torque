import styles from "./styles.module.css";
import ScenaryImage from "../../assets/assetsLandingPage/BeautifulScenery.webp"
import ExpertImage from "../../assets/assetsLandingPage/ExpertGuides.webp"
import CuratedImage from "../../assets/assetsLandingPage/CuratedRoutes.webp"
import SafetyImage from "../../assets/assetsLandingPage/SafetyFirst.webp"
import ThrillsImage from "../../assets/assetsLandingPage/Thrills.webp"
import ClarensImage from "../../assets/assetsLandingPage/Clarens.webp"
import TankwaImage from "../../assets/assetsLandingPage/TankwaOutreach.webp"

export default function LandingComponent() {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.HeroContainer}>
            </div>
            <div className={styles.Section1}>
                <div className={styles.Section1Left}>
                    Why torqAdventures
                    Because Every Rev of Your Engine Unleashes a Symphony of Endless Possibilities!
                    TorqAdventures Peter Dixon
                    peter dixon
                    Motorcycle Tour Guide
                </div>
                <div className={styles.Section1Right}>
                    Buckle up for an unforgettable ride through South Africa’s most spectacular sights!

                    Our tours aren’t just any old tours, they’re expertly crafted journeys that are sure to leave you with memories to last a lifetime. No matter if you’re a newbie or a seasoned pro, we’ve got the perfect tour to ignite your adventurous spirit.

                    Our local guides are absolute bosses, leading you down winding roads, through jaw-dropping panoramas and secret spots that are not in any guidebook. Get ready to experience South Africa like never before!
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
                    <img className={styles.Section2Image1} src={ScenaryImage} />
                    <img className={styles.Section2Image2} src={ExpertImage} />
                    <img className={styles.Section2Image3} src={CuratedImage} />
                    <img className={styles.Section2Image4} src={SafetyImage} />
                    <img className={styles.Section2Image5} src={ThrillsImage} />
                </div>
            </div>
            <div className={styles.Section3}>
                <div className={styles.Section3Header}>
                    Upcoming Events
                </div>
                <div className={styles.Section3Body}>
                    Being with your squad and loved ones, unwinding amidst nature’s wonderland, and cruising on bikes – it’s all about living your best life!
                </div>
            </div>
            <div className={styles.Section4}>
                <div className={styles.Section4Header}>
                    PAST EVENTS
                </div>
                <div className={styles.Section4Body}>
                    “Ride into TorqAdventure’s Past Events Showcase – relive memorable rides, stunning landscapes, and camaraderie, fueling the spirit of our adventure.”
                </div>
            </div>
            <div className={styles.Section5}>
                <div className={styles.Section5Top}>
                    <div className={styles.Section5TopLeft}>
                    <img className={styles.Section5Image1} src={ClarensImage} />
                    </div>
                    <div className={styles.Section5TopRight}>
                        {/* insert the paragraph with link to Clarens Gallery*/}
                    </div>
                </div>
                <div className={styles.Section5Bottom}>
                    <div className={styles.Section5BottomLeft}>
                         {/* insert the paragraph with link to Tankwa gallery*/}
                    </div>
                    <div className={styles.Section5BottomRight}>
                    <img className={styles.Section5Image2} src={TankwaImage} />
                    </div>
                </div>
            </div>
            <div className={styles.Section6}>
            </div>
        </div>
    )
}   