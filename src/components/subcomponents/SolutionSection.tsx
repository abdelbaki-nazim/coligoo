"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SolutionSection.module.css";

export default function SolutionSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = rowRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = Array.from(currentRef.children);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <h2 className={styles.headline}>Pour qui est cette solution ?</h2>
          </div>
          <p className={styles.paragraph}>
            Notre solution est conçue pour chaque acteur de la chaîne
            logistique, simplifiant chaque étape pour une expérience fluide et
            optimale.
          </p>
        </div>

        <div className={styles.row} ref={rowRef}>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <Image
                  src={"/solutions/person.svg"}
                  width={64}
                  height={64}
                  alt="Icone d'une personne"
                />
              </div>
              <div className={styles.titleCategory}>
                <h3 className={styles.title}>Consommateurs</h3>
              </div>
              <p className={styles.description}>
                Bénéficiez d&apos;une expérience transparente en suivant vos
                colis en temps réel, recevez des mises à jour instantanées et
                soyez toujours informés de l&apos;état de votre livraison.
              </p>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>Suivre mon colis</span>
            </button>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <Image
                  src={"/solutions/house.svg"}
                  width={64}
                  height={64}
                  alt="Icone d'une maison"
                />
              </div>
              <div className={styles.titleCategory}>
                <h3 className={styles.title}>Vendeurs</h3>
              </div>
              <p className={styles.description}>
                Gérez vos envois de manière rapide et efficace, avec des outils
                de suivi en temps réel et une automatisation des tâches
                récurrentes, pour une gestion sans tracas.
              </p>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>Devenir e-commerçant</span>
            </button>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <Image
                  src={"/solutions/bike.svg"}
                  width={64}
                  height={64}
                  alt="Icone d'un vélo"
                />
              </div>
              <div className={styles.titleCategory}>
                <h3 className={styles.title}>Agents de Livraison</h3>
              </div>
              <p className={styles.description}>
                Gagnez en efficacité avec des outils de planification
                intelligents, réduisez vos coûts et livrez dans les meilleurs
                délais grâce à une gestion optimisée des tournées.
              </p>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>Devenir livreur</span>
            </button>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <Image
                  src={"/solutions/package.svg"}
                  width={64}
                  height={64}
                  alt="Icone d'un colis"
                />
              </div>
              <div className={styles.titleCategory}>
                <h3 className={styles.title}>Employés de Hub</h3>
              </div>
              <p className={styles.description}>
                Centralisez toutes les informations et opérations depuis un
                tableau de bord unique, permettant une gestion fluide des flux
                de colis et une coordination efficace des équipes.
              </p>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>Devenir point</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
