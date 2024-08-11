import { useEffect, useState } from "react";
import FeaturesSection from "./features";
import HomeSection from "./home";
import JoinSection from "./join";
import StatsSection from "./stats";
import VectorSection from "./vector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-[#f5f4f5]" >
        <HomeSection />
        <FeaturesSection />
        <StatsSection />
        <VectorSection />
        <JoinSection />
    </main>
  );
}
