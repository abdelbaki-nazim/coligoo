import styles from "./ContactPhone.module.css";
import { useEffect, useRef } from "react";

export default function ContactPhone() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <h1 className={styles.headline}>
              Prêt à Transformer Votre Expérience ?
            </h1>
          </div>
          <div className={styles.paragraph}>
            <p>
              Rejoignez les milliers d&apos;utilisateurs qui ont déjà fait le
              choix de notre solution pour améliorer leur gestion, leurs
              livraisons et leurs services. Nous sommes là pour vous accompagner
              à chaque étape.
            </p>
            <p className={styles.bold}>
              Vous avez des questions ? Nous avons les réponses.
            </p>
          </div>
          <div className={styles.buttonsGroup}>
            <button className={styles.button}>
              <span className={styles.buttonText}>
                Contactez-nous maintenant
              </span>
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/contact/scooter.png"
            alt="Service de livraison avec scooter"
          />
        </div>
      </div>
    </div>
  );
}
