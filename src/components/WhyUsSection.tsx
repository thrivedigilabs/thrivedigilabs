import { 
  Cpu, 
  Zap, 
  User, 
  Layers, 
  BarChart3, 
  Clock 
} from "lucide-react";

const differentiators = [
  {
    icon: Cpu,
    title: "AI-Powered Workflows",
    description: "Automated optimization, smart bidding, and data-driven decisions at machine speed.",
  },
  {
    icon: Zap,
    title: "Speed of Execution",
    description: "No bloated timelines. We move fast — campaigns live in days, not weeks.",
  },
  {
    icon: User,
    title: "Founder-Led Strategy",
    description: "Direct access to senior strategists. No junior account managers learning on your dime.",
  },
  {
    icon: Layers,
    title: "Full Stack Under One Roof",
    description: "Ads, funnels, websites, automation — integrated systems that work together.",
  },
  {
    icon: BarChart3,
    title: "ROI-Focused Metrics",
    description: "We track what matters: revenue, ROAS, CAC. Not vanity metrics that look good on reports.",
  },
  {
    icon: Clock,
    title: "No Unnecessary Delays",
    description: "Streamlined processes. Clear communication. Zero bureaucracy slowing you down.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Why ThriveDigiLabs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built Different. <span className="text-gradient-accent">Moves Faster.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not your typical agency. No endless meetings, no fluff reports, no slow turnarounds. Just focused execution that drives real results.
            </p>

            {/* Key Stat */}
            <div className="glass-card p-6 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">48-72hrs</p>
                  <p className="text-sm text-muted-foreground">Average campaign launch time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
