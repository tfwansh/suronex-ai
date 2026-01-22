import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import { BuiltForWorkV2 } from "./components/BuiltForWorkV2";
import  MultiCloudChallenge  from "./components/MultiCloudChallenge";
import  MultiCloudChallenge2  from "./components/MultiCloudChallenge2";
import FlowSection from "./components/FlowSection";
import Solution from "./components/Solution";
import CallToAction from "./components/CallToAction";
import { Footer } from "./components/footer";
import Image from "next/image";
import { IntegrationsShowcase } from "./components/IntegrationsShowcase"; 
import FlowSection2 from "./components/FlowSection2";
import RiskMap from "./components/RiskMap";
import LayerpathTour from "./components/LayerpathTour"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#D33E9E] selection:text-white relative">
      
      {/* === BACKGROUND LAYERS === */}
      
      {/* Layer 1: Solid Black Base */}
      <div className="fixed inset-0 bg-black -z-10" />

      {/* Layer 2: Shield Watermark */}
      <div className="fixed inset-0 -z-[5] pointer-events-none flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
          <Image
            src="/shield-bg.png"
            alt="Suronex Shield Background"
            fill
            className="object-contain opacity-15"
            priority
          />
        </div>
      </div>

      {/* Layer 3: Animated Grid Pattern */}
      <div className="fixed inset-0 -z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
	{/*<LayerpathTour 
  tourId="cmki0mxkl0003jj04zahxx1g2"
  title="Product Tour"
  description="Explore Suronex's cloud security platform in action"
/> */}

        {/* Multi-Cloud Challenge */}
        <MultiCloudChallenge />

        {/* Platform Features */}
        <BuiltForWorkV2 />

	
        {/* Flow Section */}
        <FlowSection />
        
        {/* Logo Ticker */}
        <LogoTicker />
<IntegrationsShowcase />
        {/* Call to Action */}
        <CallToAction />
      </div>

      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}

