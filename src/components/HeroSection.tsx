import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Performance Marketing</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-up stagger-1">
              Scale Faster with
              <span className="block text-gradient-primary">AI-Driven Execution</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up stagger-2">
              Performance marketing, websites & automation — delivered at speed. No delays. No fluff. Just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button variant="cta" size="xl" asChild>
                <a href="#contact" className="gap-3">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/portfolio">View Case Studies</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-up stagger-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">₹15Cr+ Ad Spend Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm text-muted-foreground">Fast Execution</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-up stagger-3">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-card p-6 space-y-6 glow-primary">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Campaign Performance</p>
                      <p className="text-xs text-muted-foreground">Real-time metrics</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    Live
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-bold text-foreground">324%</p>
                    <p className="text-xs text-muted-foreground">ROAS Increase</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-bold text-primary">₹8.2L</p>
                    <p className="text-xs text-muted-foreground">Revenue Generated</p>
                  </div>
                </div>

                {/* Graph Placeholder */}
                <div className="h-32 rounded-lg bg-muted/30 flex items-end justify-around p-4 gap-2">
                  {[40, 65, 45, 80, 55, 90, 75, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t"
                      style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Card - Conversions */}
              <div className="absolute -right-4 -bottom-4 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">+147%</p>
                    <p className="text-xs text-muted-foreground">Conversions</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Speed */}
              <div className="absolute -left-4 top-1/4 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">48hrs</p>
                    <p className="text-xs text-muted-foreground">Avg. Launch Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
