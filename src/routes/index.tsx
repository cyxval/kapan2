import { createFileRoute } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";

const businessJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Food Court Kapan",
  telephone: "+37494777300",
  address: {
    "@type": "PostalAddress",
    streetAddress: "37/6 Shahumyan St",
    addressLocality: "Kapan",
    postalCode: "3301",
    addressCountry: "AM",
  },
  sameAs: ["https://www.instagram.com/food_court__kapan"],
});

const gallery = [
  { src: "/assets/world/photo-2.jpg", alt: "Պատրաստի տաք ուտեստների ընտրանի", label: "Ամենօրյա ընտրանի", shape: "tall" },
  { src: "/assets/world/photo-4.jpg", alt: "Բրնձով և բանջարեղենով ուտեստ", label: "Թարմ պատրաստված", shape: "wide" },
  { src: "/assets/world/photo-5.jpg", alt: "Թարմ թխվածք", label: "Քաղցր ընդմիջում", shape: "small" },
  { src: "/assets/world/photo-8.jpg", alt: "Տաք ուտեստների տեսականի", label: "Համեղ տարբերակներ", shape: "small" },
  { src: "/assets/world/photo-9.jpg", alt: "Food Court Kapan-ի սրահը", label: "Հարմարավետ սրահ", shape: "wide" },
];

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <main className="fcp-site">
      <StructuredData json={businessJson} />
      <header className="fcp-header">
        <a className="fcp-logo" href="#home" aria-label="Food Court Kapan">
          <span className="fcp-logo-mark">FC<span>.</span></span>
          <span className="fcp-logo-type"><b>FOOD COURT</b><small>KAPAN · ARMENIA</small></span>
        </a>
        <nav className="fcp-nav" aria-label="Գլխավոր նավիգացիա">
          <a href="#story">Մեր մասին</a>
          <a href="#menu">Մենյու</a>
          <a href="#gallery">Մթնոլորտ</a>
          <a href="#visit">Գտնել մեզ</a>
        </nav>
        <a className="fcp-header-cta" href="tel:+37494777300">Զանգահարել <span>↗</span></a>
      </header>

      <section className="fcp-hero" id="home">
        <img className="fcp-hero-image" src="/assets/world/photo-2.jpg" alt="Food Court Kapan-ի պատրաստի ուտեստները" fetchPriority="high" />
        <div className="fcp-hero-shade" />
        <div className="fcp-hero-content">
          <div className="fcp-eyebrow"><span /> ՀԱՄԵՂ ԿԱՆԳԱՌ ԿԱՊԱՆՈՒՄ</div>
          <h1>Լավ համը<br /><em>միավորում է։</em></h1>
          <p>Սիրված ուտեստներ, ջերմ մթնոլորտ և հաճելի դադար քաղաքի սրտում։</p>
          <div className="fcp-hero-actions">
            <a className="fcp-btn fcp-btn-light" href="#menu">Բացահայտել ավելին <span>↓</span></a>
            <a className="fcp-btn fcp-btn-ghost" href="tel:+37494777300">094 777300 <span>↗</span></a>
          </div>
        </div>
        <div className="fcp-hero-bottom"><span>FOOD COURT KAPAN</span><span>37/6 SHAHUMYAN ST · KAPAN</span><span>01 — 04</span></div>
        <a className="fcp-scroll" href="#story" aria-label="Ոլորել ներքև"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section className="fcp-story" id="story">
        <div className="fcp-story-image-wrap">
          <img src="/assets/world/photo-1.jpg" alt="Food Court Kapan-ի մուտքը Շահումյան փողոցում" loading="lazy" />
          <span className="fcp-image-stamp">KAPAN<br />ARMENIA</span>
        </div>
        <div className="fcp-story-copy">
          <div className="fcp-eyebrow fcp-eyebrow-dark">ՄԵՐ ՄԱՍԻՆ <span /></div>
          <p className="fcp-overline">ՀԱՄԵՂ ՊԱՀԵՐԸ ՍԿՍՎՈՒՄ ԵՆ ԱՅՍՏԵՂ</p>
          <h2>Քո քաղաքի<br /><em>համեղ անկյունը։</em></h2>
          <p className="fcp-body">Food Court Kapan-ը վայր է, որտեղ կարող ես վայելել համեղ ուտեստներ, մի փոքր դադար վերցնել առօրյայից և հաճելի ժամանակ անցկացնել։ Մտիր արագ ճաշի կամ ընկերների հետ հանդիպման համար։</p>
          <a className="fcp-underlink" href="https://www.instagram.com/food_court__kapan" target="_blank" rel="noreferrer">Ծանոթանալ մեզ հետ Instagram-ում <span>↗</span></a>
          <div className="fcp-stat-row"><div><b>01</b><span>Ջերմ մթնոլորտ</span></div><div><b>02</b><span>Ուտեստների ընտրանի</span></div><div><b>03</b><span>Կապանի սրտում</span></div></div>
        </div>
      </section>

      <section className="fcp-menu" id="menu">
        <div className="fcp-menu-top">
          <div><div className="fcp-eyebrow"><span /> ԱՅՍՕՐՎԱ ԸՆՏՐՈՒԹՅՈՒՆԸ</div><h2>Ի՞նչ ես<br /><em>նախընտրում։</em></h2></div>
          <div className="fcp-menu-note"><span className="fcp-note-line" /><p>Մեր տեսականին փոխվում է։ Զանգիր՝ տեղեկանալու այսօրվա հասանելի ուտեստների և մենյուի մասին։</p><a className="fcp-btn fcp-btn-light" href="tel:+37494777300">Հարցնել մենյուի մասին <span>↗</span></a></div>
        </div>
        <div className="fcp-menu-image">
          <img src="/assets/world/photo-8.jpg" alt="Food Court Kapan-ում մատուցվող տաք ուտեստներ" loading="lazy" />
          <div><span>ՊԱՏՐԱՍՏՎԱԾ ՍԻՐՈՎ</span><b>Համը՝ ամեն մանրուքում։</b></div>
        </div>
      </section>

      <section className="fcp-gallery" id="gallery">
        <div className="fcp-gallery-head">
          <div><div className="fcp-eyebrow fcp-eyebrow-dark">ՄԵՐ ՄԹՆՈԼՈՐՏԸ <span /></div><h2>Մի փոքր<br /><em>Food Court-ից։</em></h2></div>
          <p>Իրական լուսանկարներ մեր ուտեստներից և սրահից։ Ընտրիր քո սիրելի անկյունը և արի հյուր։</p>
        </div>
        <div className="fcp-gallery-grid">
          {gallery.map((photo, index) => (
            <figure className={`fcp-gallery-item fcp-gallery-${photo.shape}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption><span>0{index + 1}</span>{photo.label}<b>↗</b></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="fcp-visit" id="visit">
        <div className="fcp-visit-copy">
          <div className="fcp-eyebrow"><span /> ԱՅՍՏԵՂԻՑ ՍԿՍՎՈՒՄ Է ՔՈ ՃԱՆԱՊԱՐՀԸ</div>
          <h2>Հանդիպենք<br /><em>մեր սեղանի շուրջ։</em></h2>
          <p>Գտիր մեզ Կապանում՝ Շահումյան փողոց 37/6 հասցեում։ Սիրով կսպասենք քեզ։</p>
          <div className="fcp-visit-actions">
            <a className="fcp-btn fcp-btn-light" href="https://www.google.com/maps/search/?api=1&query=Food+Court+Kapan+37%2F6+Shahumyan+St+Kapan+3301+Armenia" target="_blank" rel="noreferrer">Ինչպես հասնել <span>↗</span></a>
            <a className="fcp-btn fcp-btn-ghost" href="tel:+37494777300">094 777300 <span>↗</span></a>
          </div>
        </div>
        <div className="fcp-visit-card">
          <img src="/assets/world/photo-3.jpg" alt="Food Court Kapan-ի հարմարավետ սրահը" loading="lazy" />
          <div className="fcp-visit-details">
            <span>ՄԵՐ ՀԱՍՑԵՆ</span><b>37/6 Շահումյան փողոց</b><small>Կապան 3301, Հայաստան</small>
            <i />
            <span>ՀԵՌԱԽՈՍ</span><a href="tel:+37494777300">094 777300</a>
            <i />
            <span>INSTAGRAM</span><a href="https://www.instagram.com/food_court__kapan" target="_blank" rel="noreferrer">@food_court__kapan ↗</a>
          </div>
        </div>
      </section>

      <footer className="fcp-footer">
        <a className="fcp-logo" href="#home"><span className="fcp-logo-mark">FC<span>.</span></span><span className="fcp-logo-type"><b>FOOD COURT</b><small>KAPAN · ARMENIA</small></span></a>
        <span>Համեղ պահերը սկսվում են այստեղ։</span>
        <a href="#home">Վերադառնալ վերև ↑</a>
        <small>© {new Date().getFullYear()} FOOD COURT KAPAN</small>
      </footer>
    </main>
  );
}
