import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Globe, 
  ShoppingCart,
  Users,
  Target
} from "lucide-react";

const websiteProjects = [
  {
    name: "Janapriya Hospital Hassan",
    url: "https://janapriyahospitalhassan.com",
    industry: "Healthcare",
    type: "Branding Website",
    objective: "Establish online presence & patient trust",
  },
  {
    name: "Janapriya Institute",
    url: "https://janapriyainstitute.com",
    industry: "Education",
    type: "Institutional Website",
    objective: "Student enrollment & brand credibility",
  },
  {
    name: "Holy Mount School",
    url: "https://holymountschool.com",
    industry: "Education",
    type: "School Website",
    objective: "Parent engagement & admissions",
  },
  {
    name: "Aura Essential Service",
    url: "https://auraessentialservice.com",
    industry: "Services",
    type: "Business Website",
    objective: "Lead generation & service showcase",
  },
  {
    name: "Nazara by Aisha",
    url: "https://nazarabyaisha.com",
    industry: "Fashion / Retail",
    type: "Ecommerce Website",
    objective: "Online sales & brand building",
  },
];

const performanceStats = [
  {
    icon: TrendingUp,
    metric: "₹15Cr+",
    label: "Total Ad Spend Managed",
    period: "Last 3 Years",
  },
  {
    icon: Target,
    metric: "₹10K → ₹1L",
    label: "Daily Budget Scaling",
    period: "Multiple Accounts",
  },
  {
    icon: ShoppingCart,
    metric: "Ecommerce",
    label: "Revenue Growth",
    period: "Fashion, Electronics, D2C",
  },
  {
    icon: Users,
    metric: "Lead Gen",
    label: "Quality Leads at Scale",
    period: "Education, Real Estate, Services",
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies - ThriveDigiLabs</title>
        <meta
          name="description"
          content="Explore our portfolio of branding websites, ecommerce stores, and performance marketing results. ₹15Cr+ ad spend managed with proven scaling success."
        />
        <link rel="canonical" href="https://thrivedigilabs.com/portfolio" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Portfolio & <span className="text-gradient-primary">Case Studies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real projects. Real results. See how we've helped brands scale with websites, ads, and automation.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Marketing Stats */}
        <section className="py-16 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Performance Marketing Results
              </h2>
              <p className="text-muted-foreground">
                Numbers that speak for themselves. Client names protected under NDA.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="stat-card group">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {stat.metric}
                    </p>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scaling Journey */}
            <div className="mt-12 glass-card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Scaling Success Stories
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We've taken multiple accounts from modest daily budgets to aggressive scaling — profitably.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      Meta Ads
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      Google Ads
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      YouTube Ads
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">₹10K</p>
                    <p className="text-xs text-muted-foreground">/day start</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-primary" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">₹1L+</p>
                    <p className="text-xs text-muted-foreground">/day scaled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Projects */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Branding & Website Projects
                </h2>
              </div>
              <p className="text-muted-foreground">
                High-converting websites built for trust and results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteProjects.map((project, index) => (
                <div key={index} className="service-card group">
                  {/* Preview Placeholder */}
                  <div className="aspect-video rounded-lg bg-muted/50 mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-muted-foreground/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-primary">{project.type}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Industry:</span>
                      <span className="text-xs font-medium text-foreground">
                        {project.industry}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Objective:</span>
                      <span className="text-xs font-medium text-foreground">
                        {project.objective}
                      </span>
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Join This List?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help scale your brand with performance marketing and high-converting assets.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/#contact" className="gap-3">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
