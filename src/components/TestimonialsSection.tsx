import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import styles from "./TestimonialsSection.module.css";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Une solution révolutionnaire qui a complètement changé la manière dont nous gérons nos processus. Simple, rapide et efficace !",
      name: "Sophie L.",
      role: "Responsable Logistique",
    },
    {
      id: 2,
      text: "L'intégration a été rapide et sans souci, et les résultats sont là. Nous avons gagné en productivité et satisfaction client.",
      name: "Khaled M.",
      role: "Directeur IT",
    },
    {
      id: 3,
      text: "Grâce à cette plateforme, nous avons optimisé notre gestion des stocks et réduit les délais de livraison. Une vraie valeur ajoutée pour notre entreprise.",
      name: "Ahmed B.",
      role: "Directeur Commercial",
    },
    {
      id: 4,
      text: "Un service client incroyable et une interface facile à utiliser. Nous avons constaté des améliorations dès les premières semaines !",
      name: "Marie T.",
      role: "CEO",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            setTimeout(() => {
              setCardsVisible(true);
            }, 600);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -380,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div
          className={`${styles.topSection} ${isVisible ? styles.animate : ""}`}
        >
          <div className={styles.sectionText}>
            <h1 className={styles.heading}>Ce Que Disent Nos Clients</h1>
            <p className={styles.paragraph}>
              Découvrez comment notre solution a transformé l&apos;expérience de
              nos clients et a boosté leur efficacité.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/testimonials/stars.png"
              alt="Customer feedback illustration"
              className={styles.decorativeImage}
            />
          </div>
        </div>

        <div
          className={`${styles.sliderContainer} ${
            cardsVisible ? styles.animate : ""
          }`}
        >
          <div ref={scrollContainerRef} className={styles.testimonialsList}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonialCard} ${
                  cardsVisible ? styles.animate : ""
                }`}
              >
                <div className={styles.cardContent}>
                  <p className={styles.testimonialText}>
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className={styles.userInfo}>
                    <div className={styles.userDetails}>
                      <div className={styles.userName}>{testimonial.name}</div>
                      <div className={styles.userRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.navigationContainer} ${
            cardsVisible ? styles.animate : ""
          }`}
        >
          <button
            onClick={scrollLeft}
            className={styles.navButton}
            aria-label="Précédent"
          >
            <ChevronLeft className={styles.navIcon} />
          </button>
          <button
            onClick={scrollRight}
            className={styles.navButton}
            aria-label="Suivant"
          >
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
