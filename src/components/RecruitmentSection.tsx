import { useRef, useEffect, useState } from "react";
import styles from "./RecruitmentSection.module.css";

const RecruitmentSection = () => {
  const headerRef = useRef<HTMLElement>(null);
  const deliveryRef = useRef<HTMLElement>(null);
  const hubRef = useRef<HTMLElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);
  const [isHubVisible, setIsHubVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setIsHeaderVisible(true);
            } else if (entry.target === deliveryRef.current) {
              setIsDeliveryVisible(true);
            } else if (entry.target === hubRef.current) {
              setIsHubVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    const sections = [headerRef.current, deliveryRef.current, hubRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleDeliveryClick = () => {
    alert("Redirection vers le formulaire de candidature livreur...");
  };

  const handleHubClick = () => {
    alert("Redirection vers le formulaire de candidature point relais...");
  };

  return (
    <div className={styles.container}>
      <section
        ref={headerRef}
        className={`${styles.headerSection} ${
          isHeaderVisible ? styles.animate : ""
        }`}
      >
        <div className={styles.headerSectionText}>
          <div className={styles.headerTop}>
            <h1 className={styles.headerHeading}>Rejoignez-Nous</h1>
          </div>
          <p className={styles.headerParagraph}>
            Faites partie d&apos;un acteur innovant de la logistique urbaine.
          </p>
        </div>
      </section>

      <section
        ref={deliveryRef}
        className={`${styles.contentSection} ${
          isDeliveryVisible ? styles.animate : ""
        }`}
      >
        <img
          src="/join-us/motorbike.png"
          alt="Scooter de livraison"
          className={styles.sectionImage}
        />

        <div className={styles.sectionText}>
          <div className={styles.sectionTop}>
            <p className={styles.caption}>Livreurs</p>
            <h2 className={styles.sectionHeading}>Devenir Livreur ColliGo</h2>
          </div>

          <p className={styles.sectionParagraph}>
            Rejoignez notre réseau de livreurs professionnels et profitez de
            missions flexibles, d&apos;une rémunération attractive et d&apos;un
            accompagnement dédié. Vous livrez à votre rythme tout en
            garantissant un service de qualité à nos clients.
          </p>

          <button
            onClick={handleDeliveryClick}
            className={styles.actionButton}
            aria-label="Postuler pour devenir livreur"
          >
            <div className={styles.buttonInner}>
              <span className={styles.buttonText}>Devenir Livreur</span>
            </div>
          </button>
        </div>
      </section>

      <section
        ref={hubRef}
        className={`${styles.contentSection} ${styles.reverse} ${
          isHubVisible ? styles.animate : ""
        }`}
      >
        <div className={styles.sectionText}>
          <div className={styles.sectionTop}>
            <p className={styles.caption}>HUB</p>
            <h2 className={styles.sectionHeading}>Devenir Point</h2>
          </div>

          <p className={styles.sectionParagraph}>
            En hub, vous supervisez les colis et coordonnez les opérations.
            Grâce à nos outils numériques, vous assurez une gestion fluide et
            efficace des flux, en lien direct avec les livreurs et les clients.
          </p>

          <button
            onClick={handleHubClick}
            className={styles.actionButton}
            aria-label="Postuler pour devenir point relais"
          >
            <div className={styles.buttonInner}>
              <span className={`${styles.buttonText} ${styles.light}`}>
                Devenir Point
              </span>
            </div>
          </button>
        </div>

        <img
          src="/join-us/cube.png"
          alt="Hub de distribution"
          className={styles.sectionImage}
        />
      </section>
    </div>
  );
};

export default RecruitmentSection;
