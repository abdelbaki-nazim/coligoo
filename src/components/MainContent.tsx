import React, { useState, useEffect, useRef } from "react";
import styles from "./MainContent.module.css";
import About from "./About";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FAQ";
import Image from "next/image";

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12h14m-7-7l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <Image src="/reasons/clock.svg" alt="Clock icon" width={64} height={64} />
);

const CalendarIcon = () => (
  <Image
    src="/reasons/calendar.svg"
    alt="Calendar icon"
    width={64}
    height={64}
  />
);

const MapIcon = () => (
  <Image src="/reasons/map.svg" alt="Map icon" width={64} height={64} />
);

const PackageIcon = () => (
  <Image src="/reasons/package.svg" alt="Package icon" width={64} height={64} />
);

const HeadphonesIcon = () => (
  <Image
    src="/reasons/headphone.svg"
    alt="Headphone icon"
    width={64}
    height={64}
  />
);

const ChartIcon = () => (
  <Image src="/reasons/chart.svg" alt="Chart icon" width={64} height={64} />
);

export default function MainContent() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  const sectionRefs = {
    services: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    location: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            if (sectionName) {
              setVisibleSections((prev) => new Set([...prev, sectionName]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const features = [
    {
      icon: <ClockIcon />,
      title: "Livraisons en Temps Réel",
      description:
        "Recevez un point de situation à chaque instant : de l'enlèvement à la livraison.",
    },
    {
      icon: <CalendarIcon />,
      title: "Suivi Client Personnalisé",
      description:
        "Garantissez une communication fluide et personnalisée pour chaque commande.",
    },
    {
      icon: <MapIcon />,
      title: "Itinéraires Optimisés",
      description:
        "Nos algorithmes & nos livreurs experts ajustent les trajets en temps réel pour réduire les délais.",
    },
    {
      icon: <PackageIcon />,
      title: "Gestion d'entrepôt & stocks",
      description:
        "Nous prenons en charge le stockage, le picking et la préparation de vos colis pour un process clé-en-main.",
    },
    {
      icon: <HeadphonesIcon />,
      title: "Support Client 24/7",
      description:
        "Un service client disponible à toute heure pour un accompagnement constant.",
    },
    {
      icon: <ChartIcon />,
      title: "Rapports et KPI personnalisés",
      description:
        "Analysez et optimisez vos performances avec des outils simples et puissants.",
    },
  ];

  return (
    <>
      <section
        ref={sectionRefs.services}
        data-section="services"
        className={`${styles.services} ${
          visibleSections.has("services") ? styles.animate : ""
        }`}
      >
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionCaption}>Nos services</h3>
            <h2 className={styles.sectionTitle}>
              Profitez de tous nos services !
            </h2>
          </div>

          <div className={styles.serviceCards}>
            <div
              className={`${styles.serviceCard} ${
                visibleSections.has("services") ? styles.animateItem1 : ""
              }`}
            >
              <img src="/services/1.png" alt="Envoyer un colis" />
              <div className={styles.serviceCardContent}>
                <p className={styles.servicePrice}>Dès 300 DA</p>
                <div className={styles.serviceTitle}>
                  <span>Envoyer Un Colis</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>

            <div
              className={`${styles.serviceCard} ${
                visibleSections.has("services") ? styles.animateItem2 : ""
              }`}
            >
              <img src="/services/3.png" alt="Suivre mon colis" />
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceTitle}>
                  <span>Suivre Mon Colis</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>

            <div
              className={`${styles.serviceCard} ${
                visibleSections.has("services") ? styles.animateItem3 : ""
              }`}
            >
              <img src="/services/2.png" alt="Livrer avec nous" />
              <div className={styles.serviceCardContent}>
                <p className={styles.servicePrice}>un vendeur?</p>
                <div className={styles.serviceTitle}>
                  <span>Livrer Avec Nous</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section
        ref={sectionRefs.features}
        data-section="features"
        className={`${styles.features} ${
          visibleSections.has("features") ? styles.animate : ""
        }`}
      >
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Pourquoi Choisir ColiGoo</h2>
            <p className={styles.featuresDescription}>
              De la prise en charge à la remise, nous sommes aux commandes de
              chaque étape.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${
                  visibleSections.has("features")
                    ? styles[`animateItem${index + 1}`]
                    : ""
                }`}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.location}
        data-section="location"
        className={`${styles.location} ${
          visibleSections.has("location") ? styles.animate : ""
        }`}
      >
        <div className={styles.locationContainer}>
          <div className={styles.locationImage}>
            <img src="/find-us/map.png" alt="Réseau de points ColiGoo" />
          </div>

          <div className={styles.locationContent}>
            <h3 className={styles.sectionCaption}>
              Trouvez un point à proximité
            </h3>
            <h2 className={styles.locationTitle}>Nous Sommes Partout!</h2>

            <p className={styles.locationText}>
              Nous sommes présents dans de nombreuses villes à travers toute
              l&apos;Algérie grâce à un réseau de points relais en constante
              expansion. Où que vous soyez, il y a toujours un point proche de
              vous pour déposer ou récupérer vos colis facilement et rapidement.
            </p>

            <button className="btn-primary">Trouver un Point</button>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FaqSection />
    </>
  );
}
