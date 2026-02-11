import { Button } from "@/components/ui/button";
import { 
  Target, 
  ShoppingCart, 
  Users, 
  Globe, 
  Cog, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    subtitle: "Meta & Google Ads",
    description: "AI-optimized campaigns that scale revenue predictably. From ₹10K/day to ₹1L/day.",
    outcomes: ["Higher ROAS", "Lower CAC", "Faster scaling"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Growth",
    subtitle: "Shopify + Ads",
    description: "Complete ecommerce systems — store setup, optimization, and paid traffic that converts.",
    outcomes: ["Revenue growth", "AOV increase", "Repeat purchases"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    subtitle: "Funnels & Ads",
    description: "High-converting funnels paired with precise targeting. Quality leads at scale.",
    outcomes: ["Qualified leads", "Lower CPL", "Sales pipeline"],
  },
  {
    icon: Globe,
    title: "Branding Websites",
    subtitle: "High-Converting Design",
    description: "Premium websites built for conversion. Fast, mobile-first, SEO-optimized.",
    outcomes: ["Trust building", "Higher conversions", "SEO traffic"],
  },
  {
    icon: Cog,
    title: "Automation & AI",
    subtitle: "Workflows & Systems",
    description: "CRM, email sequences, AI workflows — automated systems that save time and scale.",
    outcomes: ["Time saved", "Fewer errors", "Scalable ops"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services Built for <span className="text-gradient-primary">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to scale — ads, websites, funnels, and automation. All under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.outcomes.map((outcome, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {outcome}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                <a href="#contact" className="flex items-center gap-2">
                  Book a Call
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
