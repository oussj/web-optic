import { Map } from "@/components/Map";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-[480px] lg:w-3/5 mb-16 mx-auto mt-[100px] rounded-2xl px-8 lg:px-0">
        <Map latitude={48.9373465} longitude={2.3545065} />
      </div>
      <div className="lg:w-1/2 px-8 lg:px-0 mx-auto my-[100px] text-center">
        Optical Distric, c&apos;est 15 ans d&apos;expertise. Découvrez toute la
        collection de lunettes de vue, lunettes de soleil, lunettes filtre
        lumière bleu-violet, lentilles de contact et produits d&apos;entretien
        pour toute la famille et adaptés à vos besoins et moments de vie.
        <br />
        Retrouvez les plus grandes marques de lunettes de vue et de soleil pour
        être à la pointe de la mode et des dernières tendances : Ray-Ban, Prada,
        Persol, Dior, Chanel...
        <br />
        Optical District vous accompagne tout au long de votre vie et vous
        propose également des conseils pour préserver votre santé visuelle.
        Réservez dès à présent votre rendez-vous en magasin.
      </div>
    </main>
  );
}
