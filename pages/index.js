import { useCallback } from "react";
import styles from "./index.module.css";
const Landing = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "iPhone 14 Pro Max - 2 (About)" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    // Please sync "iPhone 14 Pro Max - 2 (About)" to the project
  }, []);

  const onButton2Click = useCallback(() => {
    // Please sync "iPhone 14 Pro Max - 2 (About)" to the project
  }, []);

  const onButton3Click = useCallback(() => {
    // Please sync "iPhone 14 Pro Max - 2 (About)" to the project
  }, []);

  const onButton4Click = useCallback(() => {
    // Please sync "iPhone 14 Pro Max - 2 (About)" to the project
  }, []);

  return (
    <div className={styles.landing}>
      <header className={styles.logoTitle}>
        <img
          className={styles.newOrangeLogo1Icon}
          alt=""
          src="/new-orange-logo-1@2x.png"
        />
        <div className={styles.sunRosePallas}>Sun Rose Pallas Healing</div>
      </header>
      <div className={styles.about}>
        <div className={styles.leaves}>
          <img
            className={styles.ellipse55Stroke}
            alt=""
            src="/ellipse-55-stroke.svg"
          />
          <img
            className={styles.ellipse55Stroke}
            alt=""
            src="/ellipse-55-stroke1.svg"
          />
          <img
            className={styles.ellipse55Stroke}
            alt=""
            src="/ellipse-55-stroke2.svg"
          />
          <img
            className={styles.ellipse55Stroke}
            alt=""
            src="/ellipse-55-stroke3.svg"
          />
          <img
            className={styles.ellipse55Stroke}
            alt=""
            src="/ellipse-55-stroke4.svg"
          />
        </div>
        <p className={styles.introduction}>
          <div className={styles.comeRelaxRecharge}>
            Come relax, recharge, and regroup at Sun Rose, where your physical
            and spiritual needs will be cared for. Allow me to help you connect
            with your universal soul, so you may find joy, peace, and health in
            everlasting wellness.
          </div>
        </p>
        <div className={styles.photo}>
          <div className={styles.heartDesigns}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className={styles.menu}>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <div className={styles.links}>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.aboutMe}>About Me</div>
            </button>
            <button className={styles.button} onClick={onButton1Click}>
              <div className={styles.aboutMe}>Services</div>
            </button>
            <button className={styles.button} onClick={onButton2Click}>
              <div className={styles.aboutMe}>Reviews</div>
            </button>
            <button className={styles.button} onClick={onButton3Click}>
              <div className={styles.aboutMe}>Events</div>
            </button>
            <button className={styles.button} onClick={onButton4Click}>
              <div className={styles.aboutMe}>Location</div>
            </button>
          </div>
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
