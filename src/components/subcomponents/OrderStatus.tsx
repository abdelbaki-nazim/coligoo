import React, { useEffect, useRef, useState } from "react";
import styles from "./OrderStatus.module.css";

type OrderStatus =
  | "received"
  | "shipped"
  | "out-for-delivery"
  | "delivered"
  | "failed";

type StatusInfo = {
  title: string;
  description: string;
  image: string;
  progress: boolean[];
};

export default function OrderStatus() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("received");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const statusConfig: Record<OrderStatus, StatusInfo> = {
    received: {
      title: "Commande reçue",
      description:
        "Votre commande a été enregistrée dans notre système. Vous recevrez une confirmation par email avec les détails de la commande.",
      image: "/tracking-states/state-1.png",
      progress: [true, false, false, false],
    },
    shipped: {
      title: "Commande expédiée",
      description:
        "Votre commande a quitté notre entrepôt et est en route vers le point de livraison. Vous recevrez un numéro de suivi pour suivre l&apos;acheminement.",
      image: "/tracking-states/state-2.png",
      progress: [true, true, false, false],
    },
    "out-for-delivery": {
      title: "En cours de livraison",
      description:
        "Votre commande est arrivée au centre de livraison local et est en route vers votre adresse. Un agent de livraison est actuellement en charge de la livraison.",
      image: "/tracking-states/state-3.png",
      progress: [true, true, true, false],
    },
    delivered: {
      title: "Livraison réussie",
      description:
        "Votre commande a été livrée avec succès à l&apos;adresse indiquée.",
      image: "/tracking-states/state-4.png",
      progress: [true, true, true, true],
    },
    failed: {
      title: "Livraison échouée",
      description: "Votre commande n'a pas été livrée, un problème est survenu",
      image: "/tracking-states/state-error.png",
      progress: [true, true, true, false],
    },
  };

  const handleStatusChange = (status: OrderStatus) => {
    setCurrentStatus(status);
  };

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage("");
  };

  const config = statusConfig[currentStatus];

  return (
    <div ref={rootRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Statut de la commande</h1>
        </div>

        <div className={styles.statusSelector}>
          {Object.keys(statusConfig).map((status) => (
            <button
              key={status}
              className={`${styles.statusButton} ${
                currentStatus === status ? styles.active : ""
              }`}
              onClick={() => handleStatusChange(status as OrderStatus)}
            >
              {statusConfig[status as OrderStatus].title}
            </button>
          ))}
        </div>

        <div className={styles.orderCard}>
          <div className={styles.orderDetails}>
            <div className={styles.orderInfo}>
              <h3 className={styles.orderId}>Commande ID : #1234</h3>
              <div className={styles.addresses}>
                <p>
                  <strong>Adresse de l&apos;expéditeur :</strong>
                  <br /> Nom : Entreprise XYZ
                  <br /> Adresse : 45, Boulevard Mohamed V, Alger Centre, 16000,
                  Algérie
                  <br /> Téléphone : +213 233456789
                </p>
                <p>
                  <strong>Adresse du récepteur (Destinataire)</strong>
                  <br /> Nom : Ahmed Benahmed
                  <br /> Adresse : 12, Rue des Martyrs, Wilaya d&apos;Alger,
                  16000, Algérie
                  <br /> Téléphone : +213 561234567
                </p>
              </div>
            </div>

            <div className={styles.deliveryInfo}>
              <p className={styles.estimatedDate}>
                Date de livraison estimée : 12-12-2025 / 12:45
              </p>
              <p className={styles.deliveryType}>
                <strong>Type de livraison :</strong> Livraison à domicile
              </p>
            </div>
          </div>

          <div className={styles.progressTracker}>
            <div className={styles.progressStep}>
              <div
                className={`${styles.stepIcon} ${
                  config.progress[0] ? styles.completed : ""
                }`}
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.125 4.875H6.625V25.875H22.375V4.875H18.875M10.125 15.375L13.625 18.875L19.75 12.75M10.125 3.125H18.875L17.7812 6.625H11.2188L10.125 3.125Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`${styles.progressLine} ${
                  config.progress[0] ? styles.completed : ""
                }`}
              />
            </div>

            <div className={styles.progressStep}>
              <div
                className={`${styles.stepIcon} ${
                  config.progress[1] ? styles.completed : ""
                }`}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1665 7.5V12.5M3.1665 7.5V17.661C3.1665 19.044 5.1125 19.866 9.0035 21.509C10.5665 22.17 11.3485 22.5 12.1665 22.5V11.855M15.1665 19.5C15.1665 19.5 16.0415 19.5 16.9165 21.5C16.9165 21.5 19.6965 16.5 22.1665 15.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.1665 12.5L8.1665 13.5M17.1665 4.5L7.1665 9.5M8.4925 10.191L5.5715 8.778C3.9685 8.002 3.1665 7.614 3.1665 7C3.1665 6.386 3.9685 5.998 5.5715 5.222L8.4915 3.809C10.2965 2.936 11.1965 2.5 12.1665 2.5C13.1365 2.5 14.0375 2.936 15.8405 3.809L18.7615 5.222C20.3645 5.998 21.1665 6.386 21.1665 7C21.1665 7.614 20.3645 8.002 18.7615 8.778L15.8415 10.191C14.0365 11.064 13.1365 11.5 12.1665 11.5C11.1965 11.5 10.2955 11.064 8.4925 10.191Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`${styles.progressLine} ${
                  config.progress[1] ? styles.completed : ""
                }`}
              />
            </div>

            <div className={styles.progressStep}>
              <div
                className={`${styles.stepIcon} ${
                  config.progress[2] ? styles.completed : ""
                }`}
              >
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.4422 14.1432C24.9313 13.8287 24.5174 13.379 24.2464 12.8438C23.9753 12.3086 23.8577 11.7089 23.9066 11.1109L20.646 10.5381L20.9271 8.9375L24.4517 9.55663C24.7494 9.11572 25.1507 8.75462 25.6204 8.50501C26.0902 8.2554 26.614 8.12491 27.146 8.125H29.8963C30.1726 8.125 30.396 8.34844 30.396 8.62469V14.1253C30.396 14.4016 30.1717 14.625 29.8963 14.625H29.5835V21.3281C29.7595 21.2778 29.9386 21.2363 30.1206 21.2038C31.3368 20.9894 32.5897 21.2081 33.6615 21.8218C34.7332 22.4354 35.556 23.4053 35.9868 24.5627C36.2411 25.2452 35.9706 25.8684 35.5042 26.2397C35.5443 27.3184 35.1927 28.3752 34.5144 29.2148C33.836 30.0544 32.8767 30.6202 31.8136 30.8076C30.7506 30.995 29.6556 30.7914 28.7311 30.2343C27.8065 29.6772 27.1147 28.8043 26.7836 27.7769C26.3441 27.6291 25.9622 27.2976 25.8176 26.8125H16.5664C16.4667 27.9241 15.9546 28.9581 15.131 29.7112C14.3073 30.4643 13.2316 30.882 12.1156 30.882C10.9995 30.882 9.92383 30.4643 9.10015 29.7112C8.27647 28.9581 7.76441 27.9241 7.66468 26.8125H3.96537C3.9166 26.8139 3.86804 26.8057 3.82245 26.7883C3.77686 26.7709 3.73514 26.7448 3.69968 26.7113C3.66421 26.6778 3.6357 26.6376 3.61576 26.5931C3.59583 26.5485 3.58486 26.5005 3.5835 26.4517C3.5835 23.5787 5.23043 21.0706 7.6785 19.7275C7.65694 19.6536 7.646 19.577 7.646 19.5V17.0625C7.646 16.416 7.9028 15.796 8.35992 15.3389C8.81704 14.8818 9.43703 14.625 10.0835 14.625H17.396C18.0425 14.625 18.6624 14.8818 19.1196 15.3389C19.5767 15.796 19.8335 16.416 19.8335 17.0625V19.5C19.8335 19.7155 19.7479 19.9222 19.5955 20.0745C19.4431 20.2269 19.2365 20.3125 19.021 20.3125V21.125H24.091L25.4422 14.1432Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className={`${styles.progressLine} ${
                  config.progress[2] ? styles.completed : ""
                }`}
              />
            </div>

            <div className={styles.progressStep}>
              <div
                className={`${styles.stepIcon} ${
                  config.progress[3] ? styles.completed : ""
                } ${currentStatus === "failed" ? styles.failed : ""}`}
              >
                {currentStatus === "failed" ? (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3626 1.43758C14.6626 1.58133 16.8189 2.73133 18.4001 4.31258C20.2689 6.32508 21.2751 8.76883 21.2751 11.6438C21.2751 13.9438 20.4126 16.1001 18.9751 17.9688C17.5376 19.6938 15.5251 20.9876 13.2251 21.4188C10.9251 21.8501 8.62514 21.5626 6.61264 20.4126C4.60014 19.2626 3.01889 17.5376 2.15639 15.3813C1.29389 13.2251 1.15014 10.7813 1.86889 8.62508C2.58764 6.32508 3.88139 4.45633 5.89389 3.16258C7.76264 1.86883 10.0626 1.29383 12.3626 1.43758ZM13.0814 19.9813C14.9501 19.5501 16.6751 18.5438 17.9689 16.9626C19.1189 15.3813 19.8376 13.5126 19.6939 11.5001C19.6939 9.20008 18.8314 6.90008 17.2501 5.31883C15.8126 3.88133 14.0876 3.01883 12.0751 2.87508C10.2064 2.73133 8.19389 3.16258 6.61264 4.31258C5.03139 5.46258 3.88139 7.04383 3.30639 9.05633C2.73139 10.9251 2.73139 12.9376 3.59389 14.8063C4.45639 16.6751 5.75014 18.1126 7.47514 19.1188C9.20014 20.1251 11.2126 20.4126 13.0814 19.9813ZM11.3564 10.7813L14.8064 7.18758L15.8126 8.19383L12.3626 11.7876L15.8126 15.3813L14.8064 16.3876L11.3564 12.7938L7.90639 16.3876L6.90014 15.3813L10.3501 11.7876L6.90014 8.19383L7.90639 7.18758L11.3564 10.7813Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4114_2253)">
                      <path
                        d="M16.3873 9.84698C16.5182 9.71142 16.5907 9.52986 16.589 9.34141C16.5874 9.15296 16.5118 8.97269 16.3786 8.83942C16.2453 8.70616 16.065 8.63057 15.8766 8.62893C15.6881 8.6273 15.5066 8.69974 15.371 8.83067L10.1241 14.0775L7.75225 11.7057C7.6167 11.5747 7.43514 11.5023 7.24668 11.5039C7.05823 11.5056 6.87796 11.5812 6.7447 11.7144C6.61143 11.8477 6.53584 12.028 6.53421 12.2164C6.53257 12.4049 6.60502 12.5864 6.73594 12.722L9.61094 15.597C9.74573 15.7317 9.92851 15.8074 10.1191 15.8074C10.3097 15.8074 10.4925 15.7317 10.6273 15.597L16.3773 9.84698H16.3873Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 0C5.14625 0 0 5.14625 0 11.5C0 17.8538 5.14625 23 11.5 23C17.8538 23 23 17.8538 23 11.5C23 5.14625 17.8538 0 11.5 0ZM1.4375 11.5C1.4375 5.93688 5.93688 1.4375 11.5 1.4375C17.0631 1.4375 21.5625 5.93688 21.5625 11.5C21.5625 17.0631 17.0631 21.5625 11.5 21.5625C5.93688 21.5625 1.4375 17.0631 1.4375 11.5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4114_2253">
                        <rect width="23" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className={styles.statusContent}>
            <h2 className={styles.statusTitle}>{config.title}</h2>
            <p className={styles.statusDescription}>{config.description}</p>
            <img
              src={config.image}
              alt={config.title}
              className={styles.statusImage}
            />

            {currentStatus === "out-for-delivery" && (
              <div className={styles.agentInfo}>
                <div className={styles.agentProfile}>
                  <img
                    src="/tracking-states/agent.png"
                    alt="Agent profile"
                    className={styles.agentAvatar}
                  />
                </div>
                <div className={styles.agentDetails}>
                  <p className={styles.agentName}>Agent : Rabah Sidhoum</p>
                  <p className={styles.agentPhone}>Téléphone : 0545 54 54 54</p>
                </div>
              </div>
            )}

            {currentStatus === "failed" && (
              <div className={styles.messageForm}>
                <label className={styles.messageLabel}>
                  Envoyer votre message
                </label>
                <textarea
                  className={styles.messageInput}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez le problème..."
                />
                <button
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                >
                  Envoyer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
