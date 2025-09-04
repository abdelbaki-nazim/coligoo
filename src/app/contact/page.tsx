"use client";

import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import FaqSection from "@/components/FAQ";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="fullName" className={styles.formLabel}>
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.formLabel}>
          Objet
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.formSelect}
            required
          >
            <option value="">Veuillez sélectionner un objet</option>
            <option value="information">Demande d&apos;information</option>
            <option value="support">Support technique</option>
            <option value="partenariat">Partenariat</option>
            <option value="autre">Autre</option>
          </select>
          <svg
            className={styles.selectIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"
              fill="#263238"
            />
          </svg>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.formTextarea}
          rows={6}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Envoyer
      </button>
    </form>
  );
};

const ContactInfo = () => (
  <div className={styles.contactInfo}>
    <div className={styles.contactHeader}>
      <h1 className={styles.contactTitle}>Contactez-Nous</h1>
      <p className={styles.contactDescription}>
        Nous sommes là pour vous aider ! Si vous avez des questions, des
        suggestions ou si vous souhaitez en savoir plus sur notre solution,
        n&apos;hésitez pas à nous contacter.
      </p>
    </div>

    <div className={styles.contactDetails}>
      <div className={styles.contactItem}>
        <h3 className={styles.contactLabel}>Email</h3>
        <p className={styles.contactValue}>contact@coligoo.com</p>
      </div>

      <div className={styles.contactItem}>
        <h3 className={styles.contactLabel}>Téléphone</h3>
        <p className={styles.contactValue}>0545454545 / 0545454545</p>
      </div>

      <div className={styles.contactItem}>
        <h3 className={styles.contactLabel}>Adresse</h3>
        <p className={styles.contactValue}>Alger, Rue n°61, Localisation 21</p>
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div>
      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <FaqSection />
    </div>
  );
}
