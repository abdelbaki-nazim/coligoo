"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/not-found/404-illustration2.svg"
            alt="Page non trouvée"
            width={300}
            height={200}
            priority
          />
        </div>
        <h1 className={styles.title}>Oups — page introuvable</h1>
        <p className={styles.subtitle}>
          La page demandée n&apos;existe pas ou a peut-être été déplacée.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={`btn-primary ${styles.btnPrimary}`}>
            Accueil
          </Link>

          <button
            type="button"
            className={`btn-outline ${styles.btnOutline}`}
            onClick={() => router.back()}
          >
            Retour
          </button>
        </div>

        <p className={styles.path}>
          <span className={styles.pathLabel}>Chemin:</span>{" "}
          <code className={styles.pathCode}>{pathname}</code>
        </p>
      </div>
    </main>
  );
}
