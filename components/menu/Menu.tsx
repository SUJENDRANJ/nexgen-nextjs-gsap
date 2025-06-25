"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./menu.css";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];

const Menu = () => {
  const container = useRef(null);
  const tl: any = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          },
          "<"
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play(0);
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="menu-container" ref={container}>
      {/* Top Bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Nexgen Nextopia</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* Overlay Menu */}
      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Nexgen Nextopia</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link) => (
              <div className="menu-link-item" key={link.label}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Youtube &#8599;</a>
              <a href="#">X &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>nexgen@nextopia.com</p>
              <p>+91 92345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
