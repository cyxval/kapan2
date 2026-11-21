import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#e2ad62",
  background: "#17130f",
  ink: "#fff7ed",
  muted: "#e5d8c8",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "welcome",
    label: "Բարի գալուստ",
    kicker: "FOOD COURT · KAPAN",
    title: "Համը, որին ուզում ես վերադառնալ։",
    body: "Թարմ ուտեստներ, ջերմ մթնոլորտ և համեղ կանգառ Կապանում։ Սահեցրու ներքև՝ բացահայտելու մեր վայրը։",
    tags: ["Թարմ պատրաստված", "Հարմարավետ միջավայր", "Կապան"],
    clip: "/assets/world/scene-01.mp4",
    poster: "/assets/world/scene-01-poster.jpg",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    scroll: 3.4,
    linger: 0.08,
    objectPosition: "50% 50%",
    actions: (
      <>
        <a className="fc-button fc-button--gold" href="tel:+37494777300">Զանգահարել մեզ</a>
        <a className="fc-button fc-button--glass" href="#gallery">Դիտել լուսանկարները</a>
      </>
    ),
  },
];
