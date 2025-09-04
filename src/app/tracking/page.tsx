"use client";

import React, { useState } from "react";
import styles from "./TrackingPage.module.css";
import FaqSection from "@/components/FAQ";

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tracking package:", trackingNumber);
  };

  const handleScanClick = () => {
    setIsScanning(!isScanning);
  };

  return (
    <div className={styles.trackingForm}>
      <div className={styles.formGroup}>
        <label htmlFor="trackingNumber" className={styles.formLabel}>
          Numéro de colis
        </label>
        <input
          type="text"
          id="trackingNumber"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Exemple : CL-1435343"
          className={styles.formInput}
          required
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className={styles.searchButton}
      >
        Rechercher
      </button>

      <div className={styles.scannerSection}>
        <p className={styles.scannerText}>
          Ou bien scanner le QR code pour savoir l&apos;état de votre colis
        </p>

        <div className={styles.scannerArea} onClick={handleScanClick}>
          <img src="/tracking/cam.svg" alt="Prendre photo QR code" />
        </div>
      </div>
    </div>
  );
};

export default function TrackingPage() {
  return (
    <div>
      <section className={styles.trackingPage}>
        <div className={styles.trackingContainer}>
          <div className={styles.trackingHeader}>
            <h1 className={styles.trackingTitle}>Suivez Votre Commande</h1>
            <p className={styles.trackingDescription}>
              Vous êtes impatient de recevoir votre colis ? Pas de problème,
              nous sommes là pour vous fournir toutes les informations
              nécessaires ! Suivez l&apos;évolution de votre commande en temps
              réel.
            </p>
          </div>

          <TrackingForm />
        </div>
      </section>
      <FaqSection />
    </div>
  );
}
