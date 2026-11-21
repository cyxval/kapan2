import { createFileRoute } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

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

const photos = [
  { src: "/assets/world/photo-2.jpg", alt: "Food Court Kapan-ի պատրաստի ուտեստների ընտրանի" },
  { src: "/assets/world/photo-3.jpg", alt: "Food Court Kapan-ի հարմարավետ սրահը" },
  { src: "/assets/world/photo-4.jpg", alt: "Բրնձով ուտեստ Food Court Kapan-ում" },
  { src: "/assets/world/photo-5.jpg", alt: "Թարմ պատրաստված թխվածք" },
  { src: "/assets/world/photo-8.jpg", alt: "Տաք ուտեստների ընտրանի" },
  { src: "/assets/world/photo-9.jpg", alt: "Սեղաններ և քարե պատով ինտերիեր" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="fc-site">
      <StructuredData json={businessJson} />
      <header className="fc-header">
        <a className="fc-brand" href="#top" aria-label="Food Court Kapan — գլխավոր էջ">
          <span className="fc-brand-mark">FC</span>
          <span className="fc-brand-copy"><strong>FOOD COURT</strong><small>KAPAN · ARMENIA</small></span>
        </a>
        <nav className="fc-nav" aria-label="Գլխավոր նավիգացիա">
          <a href="#about">Մեր մասին</a>
          <a href="#gallery">Լուսանկարներ</a>
          <a href="#contact">Կապ</a>
        </nav>
        <a className="fc-header-call" href="tel:+37494777300">094 777300 <span>↗</span></a>
      </header>

      <div id="top" className="fc-journey-wrap">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} className="fc-journey" />
        <div className="fc-scroll-note" aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
      </div>

      <section className="fc-intro" id="about">
        <div className="fc-section-kicker">ՄԵՐ ՄԱՍԻՆ <i /></div>
        <div className="fc-intro-grid">
          <h2>Համեղ ընդմիջում՝<br /><em>քո քաղաքի սրտում։</em></h2>
          <div className="fc-intro-copy">
            <p>Food Court Kapan-ը հարմար վայր է համեղ ուտեստներ վայելելու և հաճելի ժամանակ անցկացնելու համար։ Մեզ մոտ կարող ես կանգ առնել արագ ճաշի կամ ընկերների հետ հանգիստ հանդիպման համար։</p>
            <a className="fc-text-link" href="https://www.instagram.com/food_court__kapan" target="_blank" rel="noreferrer">Հետևել Instagram-ում <span>↗</span></a>
          </div>
        </div>
        <div className="fc-feature-row">
          <div><span>01</span><strong>Համեղ ընտրանի</strong><small>Տարբեր ուտեստներ՝ մեկ վայրում</small></div>
          <div><span>02</span><strong>Հարմարավետ սրահ</strong><small>Հանգիստ մթնոլորտ ամեն օրվա համար</small></div>
          <div><span>03</span><strong>Կապանի կենտրոնում</strong><small>Հեշտ է գտնել և այցելել</small></div>
        </div>
      </section>

      <section className="fc-gallery" id="gallery">
        <div className="fc-gallery-heading">
          <div><div className="fc-section-kicker">ՄԵՐ ՏԵՍԱԿԱՆ ԱՇԽԱՐՀԸ <i /></div><h2>Տես, ընտրիր,<br /><em>արի համտեսելու։</em></h2></div>
          <p>Մեր իրական լուսանկարները՝ ուտեստներից մինչև սրահի ջերմ միջավայրը։</p>
        </div>
        <div className="fc-photo-grid">
          {photos.map((photo, index) => (
            <figure className={`fc-photo fc-photo-${index + 1}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>FOOD COURT KAPAN <span>0{index + 1}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="fc-menu-cta">
        <div className="fc-menu-orbit" aria-hidden="true">FC</div>
        <div className="fc-section-kicker">ԱՅՍՕՐՎԱ ԸՆՏՐՈՒԹՅՈՒՆԸ <i /></div>
        <h2>Ի՞նչ համեղ բան<br /><em>կընտրես այսօր։</em></h2>
        <p>Այսօրվա ուտեստների և առկայության մասին տեղեկանալու համար կապ հաստատիր մեզ հետ։</p>
        <a className="fc-button fc-button--gold" href="tel:+37494777300">Հարցնել այսօրվա մենյուն <span>↗</span></a>
      </section>

      <section className="fc-contact" id="contact">
        <div className="fc-contact-main">
          <div className="fc-section-kicker">ԳՏՆԻՐ ՄԵԶ <i /></div>
          <h2>Հանդիպենք<br /><em>Food Court-ում։</em></h2>
          <p>Մենք սպասում ենք քեզ Կապանում։ Զանգիր կամ բացիր հասցեն քարտեզում՝ այցելությունդ պլանավորելու համար։</p>
          <div className="fc-contact-actions">
            <a className="fc-button fc-button--gold" href="tel:+37494777300">094 777300 <span>↗</span></a>
            <a className="fc-button fc-button--outline" href="https://www.google.com/maps/search/?api=1&query=Food+Court+Kapan+37%2F6+Shahumyan+St+Kapan+3301+Armenia" target="_blank" rel="noreferrer">Բացել քարտեզը ↗</a>
          </div>
        </div>
        <div className="fc-contact-card">
          <span className="fc-card-label">ՄԵՐ ՀԱՍՑԵՆ</span>
          <strong>37/6 Շահումյան փողոց</strong>
          <span>Կապան 3301, Հայաստան</span>
          <div className="fc-card-divider" />
          <span className="fc-card-label">ՀԵՌԱԽՈՍ</span>
          <a href="tel:+37494777300">094 777300</a>
          <div className="fc-card-divider" />
          <span className="fc-card-label">INSTAGRAM</span>
          <a href="https://www.instagram.com/food_court__kapan" target="_blank" rel="noreferrer">@food_court__kapan ↗</a>
        </div>
      </section>

      <footer className="fc-footer">
        <a className="fc-brand" href="#top"><span className="fc-brand-mark">FC</span><span className="fc-brand-copy"><strong>FOOD COURT</strong><small>KAPAN · ARMENIA</small></span></a>
        <span>Համեղ պահերը սկսվում են այստեղ։</span>
        <a href="#top">Վերադառնալ վերև ↑</a>
      </footer>
    </main>
  );
}
