import React from "react";
import { Home } from "./components/HomePage";

const { TopBar, HomeSection } = Home;

const HomePage = () => {
  return (
    <main className='lg:min-w-full md:min-w-[110%] min-w-[140%] h-full pb-10 bg-primary text-white'>
      <TopBar />
      <HomeSection />
    </main>
  );
};

export default HomePage;
