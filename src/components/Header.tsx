"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const ChevronDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0709 13.8139L17.0209 8.86388C17.1131 8.76837 17.2235 8.69219 17.3455 8.63978C17.4675 8.58737 17.5987 8.55979 17.7315 8.55863C17.8643 8.55748 17.996 8.58278 18.1189 8.63306C18.2417 8.68334 18.3534 8.75759 18.4473 8.85149C18.5412 8.94538 18.6154 9.05703 18.6657 9.17993C18.716 9.30282 18.7413 9.4345 18.7402 9.56728C18.739 9.70006 18.7114 9.83128 18.659 9.95329C18.6066 10.0753 18.5304 10.1856 18.4349 10.2779L12.7779 15.9349C12.5904 16.1224 12.3361 16.2277 12.0709 16.2277C11.8057 16.2277 11.5514 16.1224 11.3639 15.9349L5.7069 10.2779C5.61139 10.1856 5.53521 10.0753 5.4828 9.95329C5.43039 9.83128 5.4028 9.70006 5.40165 9.56728C5.4005 9.4345 5.4258 9.30282 5.47608 9.17993C5.52636 9.05703 5.60061 8.94538 5.6945 8.85149C5.7884 8.75759 5.90005 8.68334 6.02295 8.63306C6.14584 8.58278 6.27752 8.55748 6.4103 8.55863C6.54308 8.55979 6.6743 8.58737 6.7963 8.63978C6.91831 8.69219 7.02865 8.76837 7.1209 8.86388L12.0709 13.8139Z"
      fill="currentColor"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const pathnameRaw = usePathname();
  const router = useRouter();

  const normalize = (p?: string) => {
    if (!p) return "/";
    const withoutQuery = p.split("?")[0].split("#")[0];
    const cleaned = withoutQuery.replace(/\/+$/, "");
    return cleaned === "" ? "/" : cleaned;
  };
  const pathname = normalize(pathnameRaw);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Français");
  const [isSticky, setIsSticky] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const sidebarLanguageDropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const isClickOutsideDesktop = languageDropdownRef.current
        ? !languageDropdownRef.current.contains(target)
        : true;

      const isClickOutsideSidebar = sidebarLanguageDropdownRef.current
        ? !sidebarLanguageDropdownRef.current.contains(target)
        : true;

      if (isClickOutsideDesktop && isClickOutsideSidebar) {
        setIsLanguageDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const heroHeight = window.innerHeight * 0.8;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageSelect = (language: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageSelectorClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const isActive = (href: string) => {
    const nHref = normalize(href);
    if (nHref === "/") return false;

    return (
      pathname === nHref ||
      pathname.startsWith(nHref + "/") ||
      pathname.startsWith(nHref)
    );
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "A propos" },
    { href: "/registration", label: "Solutions Pro" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.headerSticky : ""}`}
    >
      <div className={styles.headerContainer}>
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div>
          <Link
            href="/"
            aria-label="Aller à l'accueil"
            className={styles.logoLink}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            <Image
              src="/logo_coligoo.svg"
              alt="ColiGoo Logo"
              width={140}
              height={32}
              className={styles.logo}
              priority={false}
            />
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                isActive(link.href) ? styles.active : ""
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}

          <div
            className={styles.languageSelectorContainer}
            ref={languageDropdownRef}
          >
            <div
              className={styles.languageSelector}
              onClick={handleLanguageSelectorClick}
              role="button"
              tabIndex={0}
            >
              <div className={styles.earthIconeWrapper}>
                <Image
                  src="/navbar/earth.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.earthIcon}
                />
              </div>
              <span>{selectedLanguage}</span>
              <ChevronDownIcon />
            </div>
            {isLanguageDropdownOpen && (
              <div
                className={styles.languageDropdown}
                onClick={(e) => e.stopPropagation()}
              >
                {languages.map((language) => (
                  <div
                    key={language.code}
                    className={`${styles.languageOption} ${
                      language.name === selectedLanguage
                        ? styles.languageOptionActive
                        : ""
                    }`}
                    onClick={(e) => handleLanguageSelect(language.name, e)}
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.ctaButtonContainer}>
            <Link
              href="/tracking"
              className="btn-primary"
              onClick={() => isMenuOpen && setIsMenuOpen(false)}
            >
              Suivre mon colis
            </Link>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
          />

          <div className={styles.sidebar} role="dialog" aria-modal="true">
            <div className={styles.sidebarContent}>
              <div className={styles.sidebarNav}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.sidebarNavLink} ${
                      isActive(link.href) ? styles.active : ""
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div
                  className={styles.sidebarLanguageSelector}
                  ref={sidebarLanguageDropdownRef}
                >
                  <div
                    className={styles.sidebarLanguageSelectorButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.earthIconeWrapper}>
                      <Image
                        src="/navbar/earth.svg"
                        alt=""
                        width={20}
                        height={20}
                        className={styles.earthIcon}
                      />
                    </div>
                    <span>{selectedLanguage}</span>
                    <ChevronDownIcon />
                  </div>
                  {isLanguageDropdownOpen && (
                    <div
                      className={styles.sidebarLanguageDropdown}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {languages.map((language) => (
                        <div
                          key={language.code}
                          className={`${styles.sidebarLanguageOption} ${
                            language.name === selectedLanguage
                              ? styles.sidebarLanguageOptionActive
                              : ""
                          }`}
                          onClick={(e) =>
                            handleLanguageSelect(language.name, e)
                          }
                        >
                          {language.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/tracking"
                  className={styles.sidebarCta}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Suivre mon colis
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
