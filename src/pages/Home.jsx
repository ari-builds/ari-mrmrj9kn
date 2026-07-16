import Hero from "../components/Hero.jsx";
import Bento from "../components/Bento.jsx";

export default function Home() {
  return (
    <>
      <Hero
        title="Ship premium interfaces at the speed of thought."
        subtitle="A cinematic, dark-mode experience compiled from your prompt with a modern bento layout, glowing borders, and butter-smooth interactions."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
      />
      <Bento />
    </>
  );
}
