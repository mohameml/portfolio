import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nebil</h1>
                <p className={styles.description}>
                    I'm currently a final-year engineering student at ENSIMAG,
                    specializing in Quantitative Finance.
                </p>
                <a
                    href="mailto:myemail@email.com"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>
            {/* <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            /> */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
