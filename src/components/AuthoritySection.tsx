import { TrendingUp, Users, Target, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "₹15Cr+",
    label: "Ad Spend Managed",
    description: "Across Meta & Google",
  },
  {
    icon: Target,
    value: "₹10K→₹1L",
    label: "Daily Scaling",
    description: "Accounts scaled 10x",
  },
  {
    icon: Users,
    value: "50+",
    label: "Brands Served",
    description: "Ecom & Lead Gen",
  },
  {
    icon: Award,
    value: "3+",
    label: "Years Experience",
    description: "Performance Marketing",
  },
];

const AuthoritySection = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-background to-muted/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* NDA Notice */}
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Client names not disclosed due to NDA agreements.
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
