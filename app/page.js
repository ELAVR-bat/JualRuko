"use client"
import { useState } from "react";

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
        {/* Homestay */}
        <section className="section" id="Homestay">
          <h2>Homestay Eksklusif</h2>
          <div className="property-card">
            <div className="property-media">
              <video controls autoPlay muted loop>
                <source
                  src="https://l.top4top.io/m_343408ct91.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="property-content">
              <span className="tag">Tersedia</span>
              <h3>Homestay Modern di Damai Residence</h3>
              <div className="price-tag">Rp 110.000/hari</div>
              <div className="property-features">
                <span className="feature">
                  <i className="fas fa-bed"></i> 3 Kamar
                </span>
                <span className="feature">
                  <i className="fas fa-snowflake"></i> AC
                </span>
                <span className="feature">
                  <i className="fas fa-wifi"></i> WiFi
                </span>
                <span className="feature">
                  <i className="fas fa-bath"></i> Toilet Pribadi
                </span>
              </div>
              <p>
                Homestay nyaman di kawasan <span className="highlight">Panam</span>. Dijual juga dengan harga{" "}
                <span className="highlight">Rp 185.000.000</span> per lantai.
              </p>
              <p>
                <i className="fas fa-map-marker-alt highlight"></i> Lokasi: Damai Residence, Panam, Pekanbaru.
              </p>
              <div className="contact-buttons">
                <a
                  href="https://wa.me/6285278087340"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Hubungi Pak Tom
                </a>
                <a
                  href="https://wa.me/6281927724979"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Hubungi Daniel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tanah */}
        <section className="section" id="Tanah">
          <h2>Lahan Strategis</h2>
          <div className="property-card">
            <div className="property-media">
              <img
                src="https://h.top4top.io/p_3527d7l5v1.jpg"
                alt="Tanah Kavling"
              />
            </div>
            <div className="property-content">
              <span className="tag">Investasi</span>
              <h3>Tanah Kavling Siap Bangun</h3>
              <p>
                Cocok untuk Anda yang ingin investasi properti dengan lokasi strategis.
              </p>
              <div className="contact-buttons">
                <a
                  href="https://wa.me/6285278087340"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Info Pak Tom
                </a>
                <a
                  href="https://wa.me/6281927724979"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Info Daniel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ruko */}
        <section className="section" id="Ruko">
          <h2>Ruko Komersial</h2>
          <div className="property-card">
            <div className="property-media">
              <video controls autoPlay muted loop>
                <source
                  src="https://k.top4top.io/m_3434p6ejw0.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="property-content">
              <span className="tag">Lokasi Premium</span>
              <h3>Ruko Strategis dekat UNRI</h3>
              <div className="price-tag">Rp 500.000.000</div>
              <div className="property-features">
                <span className="feature">
                  <i className="fas fa-ruler-combined"></i> 8m x 5m
                </span>
                <span className="feature">
                  <i className="fas fa-layer-group"></i> 4 Lantai
                </span>
                <span className="feature">
                  <i className="fas fa-plus"></i> Tanah Tambahan
                </span>
              </div>
            <p>
        Disewakan Seharga <span className="highlight">Rp1.000.000</span> ( Satu Juta ) 
        <br>Perbulan & Tahunan Cukup <span className="highlight">Rp10.000.000</span> ( Sepuluh Juta ) 
        <br>1 Ruko Seharga{" "} <span className="highlight">Rp185.000.000</span> ( Seratus Delapan Puluh Lima Juta )
        <br>4 Ruko Seharga{" "} <span className="highlight">Rp530.000.000</span> ( Lima Ratus Tiga Puluh Juta ). 
          </span>.
           </p>
              <p>
                <i className="fas fa-map-marker-alt highlight"></i> Lokasi: dekat Terminal AKAP & UNRI.
              </p>
              <div className="contact-buttons">
                <a
                  href="https://wa.me/6285278087340"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Hubungi Pak Tom
                </a>
                <a
                  href="https://wa.me/6281927724979"
                  target="_blank"
                  className="wa-button"
                >
                  <i className="fab fa-whatsapp"></i> Hubungi Daniel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kontak */}
        <section className="section" id="Kontak">
          <h2>Kontak Kami</h2>
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-user"></i>
              <h4>Nama</h4>
              <p>PS. Anita</p>
            </div>
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h4>Telepon</h4>
              <p>+62 896-5766-6808</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>abraham.tomsanit14@smp.belajar.id</p>
            </div>
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Alamat</h4>
              <p>Pekanbaru, Riau, Indonesia</p>
            </div>
          </div>
          <div className="social-list">
            <a
              href="https://www.instagram.com/pelfriede_anita_sihotang"
              target="_blank"
              className="social-item"
            >
              <div className="social-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/6289657666808"
              target="_blank"
              className="social-item"
            >
              <div className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </section>
      </div>

      <div className="footer">&copy; 2025 PS. Anita. All rights reserved.</div>
    </>
  );
}
