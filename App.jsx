import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import EventsSection from "./components/EventsSection.jsx";
import Stats from "./components/Stats.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import EventModal from "./components/EventModal.jsx";

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-void font-body text-ash-50">
      <a
        href="#events"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-crimson-bright focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to events
      </a>

      <Navbar />
      <main>
        <Hero />
        <Intro />
        <EventsSection onViewDetails={setSelectedEvent} />
        <Stats />
        <CTA />
      </main>
      <Footer />

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
