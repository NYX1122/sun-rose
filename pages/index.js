import { useCallback } from "react";
import styles from "./index.module.css";
const IPhone14ProMax1Landing = () => {
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
    <div className={styles.iphone14ProMax1Landing}>
      <header className={styles.logoTitle}>
        <img
          className={styles.newOrangeLogo1Icon}
          alt=""
          src="/new-orange-logo-1@2x.png"
        />
        <div className={styles.sunRosePallas}>Sun Rose Pallas Healing</div>
      </header>
      <main className={styles.about}>
        <div className={styles.leaves}>
          <img className={styles.leavesChild} alt="" src="/ellipse-55.svg" />
          <img className={styles.leavesChild} alt="" src="/ellipse-56.svg" />
          <img className={styles.leavesChild} alt="" src="/ellipse-57.svg" />
          <img className={styles.leavesChild} alt="" src="/ellipse-59.svg" />
          <img className={styles.leavesChild} alt="" src="/ellipse-60.svg" />
        </div>
        <textarea
          className={styles.introduction}
          placeholder="Come relax, recharge, and regroup at Sun Rose, where your physical and spiritual needs will be cared for. Allow me to help you connect with your universal soul, so you may find joy, peace, and health in everlasting wellness."
        />
        <div className={styles.slideshow}>
          <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.menu}>
          <img className={styles.menuChild} alt="" src="/vector-3.svg" />
          <img className={styles.menuItem} alt="" src="/vector-4.svg" />
          <img className={styles.sunflowerIcon} alt="" src="/sunflower.svg" />
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
          <img className={styles.sunflowerIcon1} alt="" src="/sunflower.svg" />
        </div>
      </main>
    </div>
  );
};

export default IPhone14ProMax1Landing;
