import Image from 'next/image';
import { useState } from 'react';
import CallWe from '../components/layout/CallWe';
import Layout from '../components/layout/Layout'
import Subtitle from '../components/reusable/Subtitle';
import Gallery from '../components/Section/Gallery';
import HeroSection from '../components/Section/HeroSection';
import ServiceSection from '../components/Section/ServiceSection';
import StepSection from '../components/Section/StepSection';
import WhoAreWeSection from '../components/Section/WhoAreWeSection';


export default function Home(props) {
  return (
    <Layout >
      <CallWe />
      <HeroSection />
      <div className="relative">
        <div className="absolute left-0 top-0 z-0">
          <Image src="/images/bg-who-left.png" width="600" height="600" objectFit='contain' objectPosition="left" />
        </div>
        <div className="absolute right-0 top-0 z-0">
          <Image src="/images/bg-who-right.png" width="600" height="600" objectFit='contain' objectPosition="right" />
        </div>
        <WhoAreWeSection />
      </div>
      <ServiceSection />
      <div className="relative">
        <div className="absolute left-0 z-0 top-0 w-full min-h-[1000px]">
          <Image src="/images/bg-step.png" layout='fill' objectPosition="center" />
        </div>
        <StepSection />
      </div>
      <Gallery />
    </Layout>
  )
}
