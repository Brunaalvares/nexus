import { Contact } from "@/components/contact";
import { Engineering } from "@/components/engineering";
import { Finale } from "@/components/finale";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Plants } from "@/components/plants";
import { Reel } from "@/components/reel";
import { whatsappHref } from "@/lib/whatsapp";

export default function Page() {
  const whatsapp = whatsappHref();
  return (
    <>
      <Header whatsapp={whatsapp} />
      <main>
        <div className="reel">
          <Hero />
          <Reel />
        </div>
        <Plants />
        <Location />
        <Engineering />
        <Contact whatsapp={whatsapp} />
        <Finale />
      </main>
    </>
  );
}
