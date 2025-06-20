import "@/styles/fonts.scss";
import "@/styles/reset.scss";
import "@/styles/variables.scss";
import SecretsSection from "@/components/sections/secrets/Secrets";
import { EventSection } from "@/components/sections/events/EventSection";
import ExploreRussiaSection from "@/components/sections/block1/ExploreRussiaSection";

function App() {
  //тут должен быть layout

  return (
    <>
      <ExploreRussiaSection />
      <EventSection />
      <SecretsSection />
      {/* <ComponentYouSelected /> */}
    </>
  );
}

export default App;
