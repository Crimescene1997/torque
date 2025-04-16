import styles from "./styles.module.css";
import ScenaryImage from "../../assets/assetsLandingPage/BeautifulScenery.webp"
import ExpertImage from "../../assets/assetsLandingPage/ExpertGuides.webp"
import CuratedImage from "../../assets/assetsLandingPage/CuratedRoutes.webp"
import SafetyImage from "../../assets/assetsLandingPage/SafetyFirst.webp"
import ThrillsImage from "../../assets/assetsLandingPage/Thrills.webp"
import ClarensImage from "../../assets/assetsLandingPage/Clarens.webp"
import TankwaImage from "../../assets/assetsLandingPage/TankwaOutreach.webp"
import { Link } from "react-router-dom";
import TestimonyImage1 from "../../assets/assetsLandingPage/Testimonial1.webp"
import TestimonyImage2 from "../../assets/assetsLandingPage/Testimonial2.webp"
import TestimonyImage3 from "../../assets/assetsLandingPage/Testimonial3.webp"
import TestimonyImage4 from "../../assets/assetsLandingPage/Testimonial4.webp"
import Glimpse from "../../assets/assetsLandingPage/Glimpse.webp"
import Video1 from "../../assets/assetsLandingPage/Video1.mp4"
import Video2 from "../../assets/assetsLandingPage/Video2.mp4"
import Video3 from "../../assets/assetsLandingPage/Video3.mp4"
import FamilyImage from "../../assets/assetsLandingPage/Family.jpg"

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
                <div className={styles.Section6Header}>
                    PAST EVENTS
                </div>
                <div className={styles.Section6Body}>
                    TorqAdventure’s Blast from the Past Showcase
                </div>
                <div className={styles.Section6Button}>
                    <Link to="/gallery" className={styles.Links} >Gallery</Link>
                </div>
            </div>
            <div className={styles.Section7}>
                <div className={styles.Section7Top}>
                    <div className={styles.Section7TopHeader}>
                        Testimonies
                    </div>
                    <div className={styles.Section7TopBody}>
                        “What Riders Rave About Our Motorcycle Tours” – The breathtaking scenery and expert guides.
                    </div>
                </div>
                <div className={styles.Section7Bottom}>
                    <div className={styles.Section7BottomLeft}>
                        <img className={styles.Section7Image1} src={TestimonyImage1} />
                        <img className={styles.Section7Image2} src={TestimonyImage2} />
                    </div>
                    <div className={styles.Section7BottomRight}>
                        <img className={styles.Section7Image3} src={TestimonyImage3} />
                        <img className={styles.Section7Image4} src={TestimonyImage4} />
                    </div>
                </div>

            </div>
            <div className={styles.Section8}>
                <div className={styles.Section8Header}>
                    Get a glimpse of what you can experience
                </div>
                <div className={styles.Section8Image}>
                    <img className={styles.Section8Image1} src={Glimpse} />
                </div>
            </div>
            <div className={styles.Section9}>
                <div className={styles.Section9Header}>
                    Videos
                </div>
                <div className={styles.Section9Top}>
                    <div className={styles.Section9TopLeft}>
                        <video className={styles.Section9Video1} width="320" height="240" controls>
                            <source src={Video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.Section9TopRight}>
                        <video className={styles.Section9Video2} width="320" height="240" controls>
                            <source src={Video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
                <div className={styles.Section9Bottom}>
                    <video className={styles.Section9Video3} width="320" height="240" controls>
                        <source src={Video3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div>
            <div className={styles.Section10}>
                <div className={styles.Section10Left}>
                <img className={styles.Section10LeftImage} src={FamilyImage} />
                </div>
                <div className={styles.Section10Right}>
                    <div className={styles.Section10RightHeader}>
                        Explore the World Alongside Your Loved Ones
                    </div>
                    <div className={styles.Section10RightBody}>
                        Gear up for family fun with TorqAdventures. Traveling becomes a special bond when shared with loved ones, creating enduring memories and strengthening family ties.

                        Whether cruising through scenic landscapes or exploring new destinations, the magic lies in experiencing cultures together.

                        Witness the world’s beauty through the eyes of your family, sharing joy and wonder.

                        Pack your bags, gather your loved ones, and let TorqAdventures guide you on a memorable journey, creating cherished family moments along the way.

                    </div>
                </div>

            </div>
            <div className={styles.Section1}></div>
        </div >
    )
}   