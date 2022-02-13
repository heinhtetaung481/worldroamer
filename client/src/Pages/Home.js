import React from "react";
import Hero from "../components/Hero";
import SearchPannel from "../components/SearchPannel";
import TravelInformation from "../components/TravelInformation";
import PropertySearch from "../components/PropertySearch";
export default function Home() {
  return (
    <>
      <Hero />
      <SearchPannel />
      <PropertySearch/>
      <TravelInformation/>
    </>
  );
}
