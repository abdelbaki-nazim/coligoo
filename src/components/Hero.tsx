import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftContent}>
        <h1 className={styles.mainHeadline}>
          <span className={styles.textDark}>Simplifiez vos Livraisons. </span>
          <span className={styles.textPrimary}>Suivez</span>
          <span className={styles.textDark}>, </span>
          <span className={styles.textPrimary}>Gérez</span>
          <span className={styles.textDark}>, </span>
          <span className={styles.textPrimary}>Livrez</span>
          <span className={styles.textDark}>.</span>
        </h1>

        <p className={styles.subtitle}>
          La solution leader pour la livraison de colis en points relais en
          Algérie. Simplifiez votre logistique, développez votre succès.
        </p>

        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>En Savoir Plus</span>
        </button>
      </div>

      <div className={styles.imageContainer}>
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero/truck_hero.png" />

          <img
            src="/hero/truck_hero_phone.png"
            alt="Service de livraison ColisGo"
            className={styles.heroImage}
          />
        </picture>
      </div>
    </section>
  );
}
