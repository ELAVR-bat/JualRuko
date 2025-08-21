"use client"
import { useState } from "react";
import "../app/globals.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <input
          type="checkbox"
          id="menu-toggle"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
          style={{ display: "none" }}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="menu">
          <a href="#Homestay"><i className="fas fa-home"></i> Homestay</a>
          <a href="#Tanah"><i className="fas fa-map-marked"></i> Tanah</a>
          <a href="#Ruko"><i className="fas fa-building"></i> Ruko</a>
          <a href="#Kontak"><i className="fas fa-phone-alt"></i> Kontak</a>
        </nav>

        <div className="header-content">
          <h1>PS. Anita</h1>
          <h3>— Menjual Ruko, Tanah, dan Homestay —</h3>
          <p>Solusi tepat untuk investasi properti di Pekanbaru</p>
        </div>
      </header>

      <div className="container">
        {/* Sections code here (same as provided earlier) */}
      </div>

      <div className="footer">&copy; 2025 PS. Anita. All rights reserved.</div>
    </>
  );
}
