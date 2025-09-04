import styles from "./FooterClean.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <img src="/logo_simplified.svg" alt="Logo de ColiGoo" />
          </div>

          <div className={styles.linksContainer}>
            <span className={styles.copyright}>
              Coligoo @ 2025 - All rights reserved
            </span>
            <a href="/privacy-policy" className={styles.link}>
              Privacy policy
            </a>
            <a href="/terms-of-use" className={styles.link}>
              Terms of use
            </a>
          </div>

          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <img src="/socials/youtube.svg" alt="Youtube" />
            </a>

            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <img src="/socials/facebook.svg" alt="Youtube" />
            </a>

            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <img src="/socials/instagram.svg" alt="Youtube" />
            </a>

            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <img src="/socials/linkedin.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
