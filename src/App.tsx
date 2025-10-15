import { NeighbourhoodSwiper } from "./components/cards/NeighbourhoodSwiper";
import { PhotoSwiper } from "./components/cards/PhotosSwiper";
import { Policies } from "./components/sections/Policies";
import { Benefits } from "./components/sections/Benefits";
import { Ammenities } from "./components/sections/Ammenities";
import { Explore } from "./components/sections/Explore";
import { Hero } from "./components/sections/Hero"
import { Neighbourhood } from "./components/sections/Neighbourhood";
import { Photos } from "./components/sections/Photos";
import { RoomCarousel } from "./components/sections/RoomCarousel";
import { Layout } from "./components/shared/Layout"
import { ExplorePhones } from "./components/cards/ExplorePhones";
import { BenefitsPhone } from "./components/cards/BenefitsPhones";
import { Disclaimer } from "src/components/sections/disclaimer";

function App() {

  return <Layout title="Home2 Suites - Times Square">
    <Hero />
    <RoomCarousel />
    <Ammenities />
    <Policies />
    <BenefitsPhone />
    <Benefits />
    <PhotoSwiper />
    <Photos />
    <NeighbourhoodSwiper />
    <Neighbourhood />
    <ExplorePhones />
    <Explore />
    <Disclaimer />
  </Layout>
}

export default App;
