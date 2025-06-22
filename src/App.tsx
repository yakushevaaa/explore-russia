import "@/styles/fonts.scss";
import "@/styles/reset.scss";
import "@/styles/variables.scss";
import SecretsSection from "@/components/sections/secrets/Secrets";
import { EventSection } from "@/components/sections/events/EventSection";
import ExploreRussiaSection from "@/components/sections/block1/ExploreRussiaSection";
import ComponentYouSelected from "@/components/sections/block5/ComponentYouSelected";
import Layout from "./components/Layout/Layout";

function App() {
  //тут должен быть layout

  return (
    <Layout>
      <ExploreRussiaSection />
      <EventSection />
      <SecretsSection />
      <ComponentYouSelected />
    </Layout>
  );
}

export default App;
