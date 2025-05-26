import "@/styles/fonts.scss";
import "@/styles/reset.scss";
import "@/styles/variables.scss";
import SecretsSection from "@/components/sections/secrets/Secrets";
import { EventSection } from "@/components/sections/events/EventSection";

function App() {
  //тут должен быть layout

  return (
    <>
      <EventSection />
      <SecretsSection />
    </>
  );
}

export default App;
