// components/Partners/Partners.tsx
import React from "react";
import Image from "next/image";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import styles from "./Partners.module.css";

type Variant = "default" | "round" | "square";

const partnerLogos: { name: string; variant?: Variant }[] = [
  { name: "SmartFinder", variant: "default" },
  { name: "Zoomerr", variant: "round" },
  { name: "SHELLS", variant: "square" },
  { name: "WAVES", variant: "default" },
  { name: "ArtVenue", variant: "default" },
];

const Partners: React.FC = () => {
  const { ref: scrollRef } = useSmoothScroll({
    speed: 0.8,
    direction: "left",
    enabled: true,
  });

  return (
    <section className={styles.partnersSection}>
      <div className={styles.scrollContainer}>
        <div ref={scrollRef} className={styles.scrollContent}>
          {Array.from({ length: 6 }, (_, setIndex: number) =>
            partnerLogos.map((partner, index) => {
              const src = `/partners/${partner.name}.png`;
              return (
                <div
                  key={`set-${setIndex}-${index}`}
                  className={styles.logoItem}
                >
                  <div className={styles.logoContainer}>
                    <Image
                      src={src}
                      alt={partner.name}
                      width={125}
                      height={30}
                      style={{ objectFit: "contain", display: "block" }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;
