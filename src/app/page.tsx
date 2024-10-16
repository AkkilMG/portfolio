'use client';

import AboutMe from "@/component/home/AboutMe";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/home/Hero";
import Portfolio from "@/component/home/Portfolio";
import Services from "@/component/home/Services";
import Tabs from "@/component/home/Tabs";

import { useEffect } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';

export default function Home() {
  useEffect(() => {
    // jQuery example
    $(document).ready(function () {
      console.log('jQuery is working in TypeScript!');
    });
  }, []);

  return (
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <AboutMe />
        <Tabs />
        <Portfolio />
        <Footer />
      </div>
  );
}
