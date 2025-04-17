import BlogPageImage from "../../assets/assetsBlogPage/COmingSoon.webp";
import styles from "./styles.module.css";

export default function BlogPage() {
  return (
    <>
      <div className={styles.BlogPageContainer}>
        <div className={styles.BlogPageCard}>
          <div className={styles.BlogPageCardImage}>
            <img
              className={styles.Image}
              src={BlogPageImage}
              alt="Blog Page Image"
            />
            <div className={styles.BlogPageCardContent}>
              Welcome to our blog, the place where motorcycle enthusiasts,
              adventure seekers, and travel enthusiasts come together. While our
              blog is currently under construction, we’re gearing up to bring
              you a treasure trove of exciting content, travel tips, and stories
              from the open road. Stay tuned as we rev up our engines and
              prepare to share the exhilarating world of motorcycle adventures
              with you. The journey begins soon, and we can’t wait to roll out
              the stories that will fuel your wanderlust. Get ready to embark on
              a thrilling ride with us as we take you on a journey filled with
              adrenaline-pumping escapades and breathtaking landscapes. From the
              winding roads of the countryside to the bustling streets of
              vibrant cities, our blog will be your go-to destination for all
              things motorcycle adventure. Join us as we delve into the world of
              two-wheeled exploration, uncovering hidden gems, and sharing
              insider tips to make your own adventures unforgettable. Whether
              you’re a seasoned rider or a newbie to the motorcycle scene, our
              goal is to inspire, inform, and entertain you every step of the
              way. So grab your helmet, rev up your engines, and get ready to
              experience the freedom of the open road like never before. Stay
              tuned for upcoming posts that will ignite your passion for
              adventure and fuel your desire to explore the world on two wheels.
              The countdown to excitement begins now!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
