"use client";

import React from "react";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import MainContent from "@/components/MainContent";
import TrackingSection from "@/components/TrackingSection";
import FloatingButton from "@/components/FloatingButton";
import RecruitmentSection from "@/components/RecruitmentSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <MainContent />
      <TrackingSection />
      <RecruitmentSection />
    </div>
  );
}
