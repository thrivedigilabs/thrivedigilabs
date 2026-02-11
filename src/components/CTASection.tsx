import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8 glow-primary">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not Sure What's Slowing Your Growth?
            <span className="block text-gradient-accent mt-2">Let's Find Out — Free.</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether it's your ads, funnel, website, or execution — we'll identify the bottleneck and give you a clear roadmap to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#contact" className="gap-3">
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Request a Free Audit</a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-8">
            No obligation. No sales pressure. Just clarity on your next steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
