import { EventsDisplay } from "@/components/EventsDisplay";
import { Hero } from "@/components/Hero";
import { EventHighlights } from "@/components/EventHighlights";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-white">

      <Hero/>

      <EventsDisplay/>

      <EventHighlights/>

    </main>
  );
}
