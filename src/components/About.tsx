import styles from "./About.module.css";
import { useIntersectionObserver } from "@/../../hooks/useIntersectionObserver";

export default function About() {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={targetRef}
      className={`${styles.aboutSection} ${
        hasIntersected ? styles.animate : ""
      }`}
    >
      <img
        src="/about/motorbike.png"
        alt="Scooter de livraison ColisGo"
        className={styles.desktopImage}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.caption}>
            <span className={styles.desktopCaption}>À PROPOS DE NOUS</span>
            <span className={styles.mobileCaption}>
              À PROPOS DE LA SOLUTION
            </span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.desktopTitle}>
              Une entreprise de livraison moderne, fiable et complète.
            </span>
            <span className={styles.mobileTitle}>
              Une plateforme de gestion des livraisons moderne et complète.
            </span>
          </h2>
        </div>

        <p className={styles.description}>
          <span className={styles.desktopDescription}>
            Notre mission est née d&apos;un besoin clair : offrir un service de
            livraison rapide, professionnel et humain. Grâce à une équipe
            réactive et une logistique bien rodée, nous assurons à chaque client
            , particulier comme professionnel , des livraisons sécurisées,
            ponctuelles et sans stress. Nous croyons en une livraison plus
            fluide, plus accessible et plus proche des besoins réels du terrain.
          </span>
          <span className={styles.mobileDescription}>
            Notre solution est née d&apos;un besoin simple : faciliter la mise en
            relation entre commerçants et livreurs. Grâce à une plateforme
            intuitive et performante, nous permettons à chacun de gérer ses
            livraisons rapidement, en toute confiance. Nous croyons en une
            logistique plus fluide, plus accessible et plus humaine.
          </span>
        </p>
      </div>

      <img
        src="/about/motorbike_phone.png"
        alt="Illustration plateforme de livraison"
        className={styles.mobileImage}
      />
    </section>
  );
}
