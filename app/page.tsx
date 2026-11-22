import { Contact } from "@/components/contact";
import { Engineering } from "@/components/engineering";
import { Finale } from "@/components/finale";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Plants } from "@/components/plants";
import { Segments } from "@/components/segments";
import { Story } from "@/components/story";
import { whatsappHref } from "@/lib/whatsapp";

export default function Page() {
  const whatsapp = whatsappHref();
  return (
    <>
      <Header whatsapp={whatsapp} />
      <main>
        <Hero />
        <Story />
        <Segments />
        <Gallery />
        <Plants />
        <Location />
        <Engineering />
        <Contact whatsapp={whatsapp} />
        <Finale />
      </main>
    </>
  );
}
