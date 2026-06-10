# 🚀 Yusuf Akar — Kişisel Portfolio Sitesi

> **19 Mayıs Mesleki ve Teknik Anadolu Lisesi** öğrencisi, Gaziantep/Şahinbey'den genç yazılım geliştiricisi Yusuf Akar'ın kişisel portfolio web sitesi.

![Portfolio Preview](assets/avatar.png)

---

## 📁 Proje Yapısı

```
yusuf-akar-portfolio/
│
├── index.html          ← Ana HTML dosyası
├── README.md           ← Bu dosya
│
├── css/
│   └── style.css       ← Tüm stiller (CSS Variables, responsive)
│
├── js/
│   └── main.js         ← Tüm interaktif özellikler
│
└── assets/
    └── avatar.png      ← Profil görseli
```

---

## ✨ Özellikler

| Özellik | Açıklama |
|---|---|
| 🎨 Dark Theme | Mor/mavi gradient, glassmorphism tasarım |
| ✨ Particles | Canvas tabanlı hareketli parçacıklar |
| ⌨️ Typewriter | Döngüsel yazı animasyonu |
| 📊 Skill Bars | Scroll ile tetiklenen beceri çubukları |
| 🔢 Counters | Sayı animasyonları |
| 🖱️ Custom Cursor | Özel fare imleci |
| 📱 Responsive | Mobil/tablet/desktop uyumlu |
| 🌙 Loader | Yükleme animasyonu |
| 👁️ Scroll Reveal | Kaydırma ile görünme animasyonları |
| 📧 İletişim Formu | Çalışan form (backend entegre edilebilir) |
| 🎯 Parallax | Avatar üzerinde fare parallax efekti |
| 🏎️ Smooth Scroll | Yumuşak sayfa geçişleri |

---

## 🛠️ Nasıl Geliştiririm?

### Bilgileri Güncelle
`index.html` dosyasında ara ve değiştir:

- **E-posta**: `yusuf@example.com` → gerçek e-posta adresin
- **GitHub**: `github.com/yusufahar` → gerçek GitHub kullanıcı adın
- **LinkedIn**: `linkedin.com/in/yusufahar` → gerçek LinkedIn profilin

### Yeni Proje Ekle
`index.html` içinde `<!-- ===== PROJECTS ===== -->` bölümüne yeni `.project-card` bloğu ekle:

```html
<div class="project-card reveal" id="project-yeni">
  <div class="project-card-glow"></div>
  <div class="project-header">
    <div class="project-icon">🎮</div>
    <!-- linkler -->
  </div>
  <h3 class="project-title">Proje Adı</h3>
  <p class="project-desc">Açıklama...</p>
  <div class="project-tags">
    <span class="p-tag">Teknoloji</span>
  </div>
  <div class="project-status completed">✅ Tamamlandı</div>
</div>
```

### Yeni Beceri Ekle
`index.html` içinde `.skills-column` bölümüne:

```html
<div class="skill-item">
  <div class="skill-header">
    <span class="skill-icon">🔥</span>
    <span class="skill-name">React</span>
    <span class="skill-pct">75%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-fill" style="--target: 75%"></div>
  </div>
</div>
```

### İletişim Formu Aktifleştir
`js/main.js` içinde Contact Form bölümündeki `setTimeout` simülasyonunu [EmailJS](https://www.emailjs.com/) veya [Formspree](https://formspree.io/) ile değiştir.

### Renk Temasını Değiştir
`css/style.css` başındaki CSS Variables bölümünü düzenle:
```css
:root {
  --accent:   #6c63ff;   /* Ana renk */
  --accent-2: #a78bfa;   /* İkincil renk */
  --accent-3: #38bdf8;   /* Vurgu rengi */
}
```

---

## 🌐 Yayına Alma

### GitHub Pages (Ücretsiz)
1. `git init` → `git add .` → `git commit -m "ilk commit"`
2. GitHub'da yeni repo oluştur
3. `git push origin main`
4. Repo ayarları → Pages → `main` branch → Save

### Netlify (Ücretsiz, Önerilen)
1. [netlify.com](https://netlify.com)'a giriş yap
2. Klasörü sürükle-bırak → Anında yayında!

---

## 📱 Responsive Breakpoints

| Boyut | Düzen |
|---|---|
| > 1024px | 2 sütun hero, yan yana layoutlar |
| 768–1024px | Dikey hero, tek sütun |
| < 768px | Mobil nav, tam genişlik |
| < 480px | Kompakt tüm bölümler |

---

## 👤 Geliştirici

**Yusuf Akar**  
📍 Gaziantep / Şahinbey  
🏫 19 Mayıs Mesleki ve Teknik Anadolu Lisesi  
🎂 18 yaşında  
🎯 2025 Staj Hedefi

---

*Bu proje HTML, CSS ve Vanilla JavaScript ile sıfırdan geliştirilmiştir. Framework veya kütüphane kullanılmamıştır.*
