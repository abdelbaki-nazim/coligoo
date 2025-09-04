"use client";

import React, { useState } from "react";
import styles from "./RegistrationPage.module.css";
import FaqSection from "@/components/FAQ";

export default function RegistrationPage() {
  const [deliveryFormData, setDeliveryFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    wilaya: "",
    commune: "",
  });

  const [officeFormData, setOfficeFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    wilaya: "",
    commune: "",
  });

  const [searchLocation, setSearchLocation] = useState("");

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Delivery application:", deliveryFormData);
  };

  const handleOfficeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Office application:", officeFormData);
  };

  return (
    <div>
      <section className={styles.registrationSection}>
        <div className={styles.registrationContainer}>
          <div className={styles.registrationContent}>
            <div className={styles.registrationInfo}>
              <img
                src="/join-us/motorbike.png"
                alt="Devenir livreur"
                className={styles.registrationImage}
              />
              <h2 className={styles.registrationTitle}>
                <span className={styles.registrationTitleOrange}>
                  Devenir Livreur{" "}
                </span>
                <span className={styles.registrationTitleDark}>Coli</span>
                <span className={styles.registrationTitleOrange}>Goo</span>
              </h2>
              <p className={styles.registrationDescription}>
                Rejoignez notre réseau de livreurs professionnels et profitez de
                missions flexibles, d&apos;une rémunération attractive et d&apos;un
                accompagnement dédié. Vous livrez à votre rythme tout en
                garantissant un service de qualité à nos clients.
              </p>
            </div>

            <form
              onSubmit={handleDeliverySubmit}
              className={styles.registrationForm}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nom complet</label>
                <input
                  type="text"
                  value={deliveryFormData.fullName}
                  onChange={(e) =>
                    setDeliveryFormData({
                      ...deliveryFormData,
                      fullName: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  value={deliveryFormData.email}
                  onChange={(e) =>
                    setDeliveryFormData({
                      ...deliveryFormData,
                      email: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Numéro de Téléphone</label>
                <input
                  type="tel"
                  value={deliveryFormData.phone}
                  onChange={(e) =>
                    setDeliveryFormData({
                      ...deliveryFormData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+213 XXXXXXXXX"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Wilaya</label>
                  <input
                    type="text"
                    value={deliveryFormData.wilaya}
                    onChange={(e) =>
                      setDeliveryFormData({
                        ...deliveryFormData,
                        wilaya: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Commune</label>
                  <input
                    type="text"
                    value={deliveryFormData.commune}
                    onChange={(e) =>
                      setDeliveryFormData({
                        ...deliveryFormData,
                        commune: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Postuler
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.registrationSection}>
        <div className={styles.registrationContainer}>
          <div className={styles.registrationContent}>
            <div className={styles.registrationInfo}>
              <img
                src="/join-us/truck.png"
                alt="Devenir bureau"
                className={styles.registrationImage}
              />
              <h2 className={styles.registrationTitle}>
                <span className={styles.registrationTitleOrange}>
                  Devenir Bureau{" "}
                </span>
                <span className={styles.registrationTitleDark}>Coli</span>
                <span className={styles.registrationTitleOrange}>Goo</span>
              </h2>
              <p className={styles.registrationDescription}>
                En hub, vous supervisez les colis et coordonnez les opérations.
                Grâce à nos outils numériques, vous assurez une gestion fluide
                et efficace des flux, en lien direct avec les livreurs et les
                clients.
              </p>
            </div>

            <form
              onSubmit={handleOfficeSubmit}
              className={styles.registrationForm}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nom complet</label>
                <input
                  type="text"
                  value={officeFormData.fullName}
                  onChange={(e) =>
                    setOfficeFormData({
                      ...officeFormData,
                      fullName: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  value={officeFormData.email}
                  onChange={(e) =>
                    setOfficeFormData({
                      ...officeFormData,
                      email: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Numéro de Téléphone</label>
                <input
                  type="tel"
                  value={officeFormData.phone}
                  onChange={(e) =>
                    setOfficeFormData({
                      ...officeFormData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+213 XXXXXXXXX"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Wilaya</label>
                  <input
                    type="text"
                    value={officeFormData.wilaya}
                    onChange={(e) =>
                      setOfficeFormData({
                        ...officeFormData,
                        wilaya: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Commune</label>
                  <input
                    type="text"
                    value={officeFormData.commune}
                    onChange={(e) =>
                      setOfficeFormData({
                        ...officeFormData,
                        commune: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Postuler
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.locationsSection}>
        <div className={styles.locationsContainer}>
          <div className={styles.locationsContent}>
            <div className={styles.locationsInfo}>
              <h2 className={styles.locationsTitle}>
                <span className={styles.registrationTitleOrange}>Bureaux </span>
                <span className={styles.registrationTitleDark}>Coli</span>
                <span className={styles.registrationTitleOrange}>Goo</span>
              </h2>
              <p className={styles.locationsDescription}>
                En hub, vous supervisez les colis et coordonnez les opérations.
                Grâce à nos outils numériques, vous assurez une gestion fluide
                et efficace des flux, en lien direct avec les livreurs et les
                clients.
              </p>

              <div className={styles.searchContainer}>
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Rechercher"
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.locationsList}>
                <a href="#" className={styles.locationLink}>
                  Oum El Bouaghi
                </a>
                <a href="#" className={styles.locationLink}>
                  Khenchela
                </a>
                <a href="#" className={styles.locationLink}>
                  Batna
                </a>
              </div>
            </div>

            <img
              src="/regions/features.svg"
              alt="Carte de l'Algérie"
              className={styles.mapImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <p className={styles.faqDescription}>
              Nous avons rassemblé les questions les plus fréquemment posées
              pour vous offrir une réponse rapide et claire.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>
    </div>
  );
}
