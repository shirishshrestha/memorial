import Footer from "./ui/layout/Footer";
import {
  FamilyMembers,
  FuneralEvent,
  HeroSection,
  Tribute,
} from "./ui/section";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <section id="main_container">
          <FuneralEvent />
        </section>
        <FamilyMembers />
        <Tribute />
      </main>
      <Footer />
    </>
  );
}

export default App;
