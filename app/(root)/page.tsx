
import Hero from "../components/Hero";
import OurValue from "../components/OurValue";
import ProblemSolved from "../components/ProblemSolved";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Value */}
      <OurValue />
      {/* Problem Solved */}
      <section className="my-8 sm:my-14">
        <ProblemSolved />
      </section>
    </>
  );
}
