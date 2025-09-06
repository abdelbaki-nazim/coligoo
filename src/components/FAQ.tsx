import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    width="24"
    height="24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

type FAQItem = {
  question: string;
  answer: string;
};

export default function FaqSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "1. Comment fonctionne le suivi des livraisons en temps réel ?",
      answer:
        "Vous pouvez suivre vos livraisons à chaque étape grâce à notre plateforme intuitive. Vous recevrez des mises à jour instantanées et des notifications pour rester informé en tout temps.",
    },
    {
      question:
        "2. Quels types de produits puis-je gérer avec cette solution ?",
      answer:
        "Notre solution peut gérer tous types de colis et produits, des petits objets aux produits volumineux, avec des options de manutention spécialisées selon vos besoins.",
    },
    {
      question:
        "3. Puis-je personnaliser les notifications envoyées à mes clients ?",
      answer:
        "Oui, vous pouvez personnaliser entièrement les notifications selon votre marque et vos préférences de communication avec vos clients.",
    },
    {
      question:
        "4. Y a-t-il un support client disponible en dehors des horaires de bureau ?",
      answer:
        "Absolument ! Notre équipe de support client est disponible 24h/24 et 7j/7 pour vous accompagner à tout moment.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.faq} ${isVisible ? styles.animate : ""}`}
    >
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqDescription}>
            Nous avons rassemblé les questions les plus courantes pour vous
            offrir une réponse rapide et claire.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.faqQuestion}
                aria-expanded={openFAQ === index}
              >
                <h3 className={styles.faqQuestionText}>{faq.question}</h3>
                <div className={styles.faqIcon}>
                  {openFAQ === index ? <MinusIcon /> : <ChevronDownIcon />}
                </div>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  openFAQ === index ? styles.faqAnswerOpen : ""
                }`}
              >
                <div className={styles.faqAnswerContent}>
                  <p className={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
