"use client";

import React, { useState } from "react";
import styles from "./TrackingResultsPage.module.css";
import FaqSection from "@/components/FAQ";

interface TrackingStep {
  id: number;
  title: string;
  location: string;
  address: string;
  phone: string;
  completed: boolean;
}

const TrackingStatus = ({
  steps,
  currentStep,
  statusTitle,
  statusDescription,
  statusImage,
}: {
  steps: TrackingStep[];
  currentStep: number;
  statusTitle: string;
  statusDescription: string;
  statusImage: string;
}) => {
  return (
    <section className={styles.trackingStatusSection}>
      <div className={styles.statusContainer}>
        <div className={styles.statusHeader}>
          <h1 className={styles.statusTitle}>Statut de la commande</h1>
        </div>

        <div className={styles.orderDetails}>
          <div className={styles.orderInfo}>
            <h2 className={styles.orderId}>Commande ID : #1234</h2>
            <div className={styles.addressInfo}>
              <p>
                <strong>Adresse de l&apos;expéditeur :</strong>
                <br />
                Nom : Entreprise XYZ
                <br />
                Adresse : 45, Boulevard Mohamed V, Alger Centre, 16000, Algérie
                <br />
                Téléphone : +213 233456789
              </p>
              <br />
              <p>
                <strong>Adresse du récepteur (Destinataire)</strong>
                <br />
                Nom : Ahmed Benahmed
                <br />
                Adresse : 12, Rue des Martyrs, Wilaya d&apos;Alger, 16000, Algérie
                <br />
                Téléphone : +213 561234567
              </p>
            </div>
          </div>

          <div className={styles.deliveryInfo}>
            <p className={styles.deliveryDate}>
              Date de livraison estimée : 12-12-2025 / 12:45
            </p>
            <p className={styles.deliveryType}>
              <strong>Type de livraison :</strong> Livraison à domicile
            </p>
          </div>
        </div>

        <div className={styles.trackingProgress}>
          <div className={styles.leftColumn}>
            <div className={styles.timeline}>
              {steps.map((step, index) => (
                <div key={step.id} className={styles.timelineItem}>
                  <div
                    className={`${styles.timelinePoint} ${
                      step.completed ? styles.completed : ""
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7.5"
                        cy="7"
                        r="7"
                        fill={step.completed ? "#D35400" : "#F9F6F0"}
                      />
                    </svg>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`${styles.timelineLine} ${
                        step.completed ? styles.completed : ""
                      }`}
                    ></div>
                  )}
                  <div className={styles.stepInfo}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepLocation}>{step.location}</p>
                    <p className={styles.stepAddress}>{step.address}</p>
                    <p className={styles.stepPhone}>{step.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.currentStatus}>
            <h3 className={styles.currentStatusTitle}>{statusTitle}</h3>
            <p className={styles.currentStatusDescription}>
              {statusDescription}
            </p>
            <div className={styles.statusImageContainer}>
              <img
                src={statusImage}
                alt={statusTitle}
                className={styles.statusImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TrackingResultsPage() {
  const trackingStatuses = [
    {
      steps: [
        {
          id: 1,
          title: "Commande Reçue",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 2,
          title: "Commande Expédiée",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 3,
          title: "En Cours de livraison",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 4,
          title: "En Cours de livraison",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 5,
          title: "Livraison réussie",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
      ],
      currentStep: 1,
      statusTitle: "Commande reçue",
      statusDescription:
        "Votre commande a été enregistrée dans notre système. Vous recevrez une confirmation par email avec les détails de la commande.",
      statusImage: "/tracking-states/state-1.png",
    },
    {
      steps: [
        {
          id: 1,
          title: "Commande Reçue",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 2,
          title: "Commande Expédiée",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 3,
          title: "En Cours de livraison",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 4,
          title: "En Cours de livraison",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 5,
          title: "Livraison réussie",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
      ],
      currentStep: 2,
      statusTitle: "Commande expédiée",
      statusDescription:
        "Votre commande a quitté notre entrepôt et est en route vers le point de livraison. Vous recevrez un numéro de suivi pour suivre l'acheminement.",
      statusImage: "/tracking-states/state-2.png",
    },
    {
      steps: [
        {
          id: 1,
          title: "Commande Reçue",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 2,
          title: "Commande Expédiée",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 3,
          title: "En Cours de livraison",
          location: "Bureau de Bouira",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 4,
          title: "En Cours de livraison",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
        {
          id: 5,
          title: "Livraison réussie",
          location: "",
          address: "",
          phone: "",
          completed: false,
        },
      ],
      currentStep: 3,
      statusTitle: "En cours de livraison",
      statusDescription:
        "Votre commande est arrivée au centre de livraison local et est en route vers votre adresse. Un agent de livraison est actuellement en charge de la livraison.",
      statusImage: "/tracking-states/state-3.png",
    },
    {
      steps: [
        {
          id: 1,
          title: "Commande Reçue",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 2,
          title: "Commande Expédiée",
          location: "Bureau de Alger",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 3,
          title: "En Cours de livraison",
          location: "Bureau de Bouira",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 4,
          title: "En Cours de livraison",
          location: "Bureau de Setif",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
        {
          id: 5,
          title: "Livraison réussie",
          location: "Déstinataire",
          address: "12, Rue des Martyrs, Wilaya d'Alger, 16000, Algérie",
          phone: "+213 561234567",
          completed: true,
        },
      ],
      currentStep: 5,
      statusTitle: "Livraison réussie",
      statusDescription:
        "Votre commande a été livrée avec succès à l'adresse indiquée.",
      statusImage: "/tracking-states/state-4.png",
    },
  ];

  return (
    <div>
      {trackingStatuses.map((status, index) => (
        <TrackingStatus
          key={index}
          steps={status.steps}
          currentStep={status.currentStep}
          statusTitle={status.statusTitle}
          statusDescription={status.statusDescription}
          statusImage={status.statusImage}
        />
      ))}

      <FaqSection />
    </div>
  );
}
