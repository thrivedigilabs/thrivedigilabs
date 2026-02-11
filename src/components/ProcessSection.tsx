import { Search, Cpu, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Strategy",
    description: "Deep dive into your current setup. Identify gaps, opportunities, and the fastest path to growth.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI-Driven Setup",
    description: "Build your campaigns, funnels, or website with AI-powered tools for maximum efficiency.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Go live fast. Monitor performance. Make data-driven adjustments in real-time.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale with Data",
    description: "Double down on winners. Cut losers. Scale profitably with clear ROI visibility.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple. Systematic. <span className="text-gradient-primary">Scalable.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven 4-step framework that turns strategy into results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
