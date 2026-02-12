import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import NotForSection from "@/components/NotForSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ThriveDigiLabs  AI-Powered Performance Marketing Agency</title>
        <meta
          name="description"
          content="Scale faster with AI-driven performance marketing. Meta Ads, Google Ads, websites, funnels & automation. Fast execution, measurable results. Book a free strategy call."
        />
        <meta
          name="keywords"
          content="performance marketing, Meta Ads, Google Ads, digital marketing agency, ecommerce marketing, lead generation, Shopify, marketing automation"
        />
        <meta property="og:title" content="ThriveDigiLabs - AI-Powered Performance Marketing Agency" />
        <meta
          property="og:description"
          content="Scale faster with AI-driven performance marketing. Fast execution, measurable results."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thrivedigilabs.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AuthoritySection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <NotForSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
