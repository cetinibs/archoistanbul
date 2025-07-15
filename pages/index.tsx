import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Archeo Cafe & Hostel - İstanbul</title>
        <meta name="description" content="Archeo Cafe and Hostel in Istanbul - A unique experience combining history, culture, and comfort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        fontFamily: 'Arial, sans-serif', 
        margin: 0, 
        padding: 0,
        backgroundColor: '#f5f5f5'
      }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1rem 0',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Archeo Cafe & Hostel</h1>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem' }}>İstanbul</p>
        </header>

        {/* Hero Section */}
        <section style={{
          backgroundColor: '#34495e',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Tarihi İstanbul'da Eşsiz Bir Deneyim
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Kültür, tarih ve konforun buluştuğu Archeo Cafe & Hostel'de 
            İstanbul'un büyülü atmosferini yaşayın.
          </p>
        </section>

        {/* Services Section */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#2c3e50' }}>
              Hizmetlerimiz
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🏨 Hostel</h3>
                <p>Temiz, güvenli ve konforlu konaklama imkanı</p>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>☕ Cafe</h3>
                <p>Özel kahveler ve lezzetli atıştırmalıklar</p>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🏛️ Tarih</h3>
                <p>İstanbul'un tarihi dokusunu keşfedin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{
          backgroundColor: '#ecf0f1',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '2rem' }}>İletişim</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              📍 İstanbul, Türkiye
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              📞 +90 (XXX) XXX-XXXX
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              ✉️ info@archoistanbul.com
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          <p>&copy; 2024 Archeo Cafe & Hostel. Tüm hakları saklıdır.</p>
        </footer>
      </main>
    </div>
  );
}