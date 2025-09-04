import { useRef, useEffect, useState } from "react";
import styles from "./TrackingSection.module.css";

const TrackingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
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

  const handleTrackingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Suivi du colis:", trackingNumber);

      alert(`Suivi du colis ${trackingNumber} en cours...`);
    } catch (error) {
      console.error("Erreur lors du suivi:", error);
      alert("Erreur lors du suivi du colis. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingNumber(e.target.value);
  };

  return (
    <div>
      <section ref={sectionRef} className={styles.section}>
        <div className={styles.wrapper}>
          <div
            className={`${styles.container} ${isVisible ? styles.animate : ""}`}
          >
            <div
              className={`${styles.phoneContainer} ${
                isVisible ? styles.animate : ""
              }`}
            ></div>

            <div
              className={`${styles.sectionText} ${
                isVisible ? styles.animate : ""
              }`}
            >
              <div className={styles.textTop}>
                <h1 className={styles.heading}>Suivre mon colis</h1>
              </div>

              <p className={styles.paragraph}>
                Entrez le numéro de votre colis ci-dessous pour suivre son
                acheminement en temps réel. Vous pourrez voir où il se trouve et
                estimer la date de livraison.
              </p>

              <form
                onSubmit={handleTrackingSubmit}
                className={styles.formContainer}
              >
                <label htmlFor="tracking-number" className={styles.label}>
                  Numéro de colis
                </label>

                <div className={styles.inputContainer}>
                  <input
                    id="tracking-number"
                    type="text"
                    value={trackingNumber}
                    onChange={handleInputChange}
                    placeholder="Exemple : CL-1435343"
                    className={styles.input}
                    disabled={isLoading}
                    aria-describedby="tracking-help"
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    type="submit"
                    disabled={isLoading || !trackingNumber.trim()}
                    className={`${styles.trackButton} ${
                      isLoading ? styles.loading : ""
                    }`}
                    aria-label="Suivre le colis"
                  >
                    {isLoading ? "Recherche..." : "Suivre"}
                  </button>
                </div>
              </form>

              <div id="tracking-help" className="sr-only">
                Entrez votre numéro de suivi pour voir l&apos;état de votre
                colis
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingSection;
