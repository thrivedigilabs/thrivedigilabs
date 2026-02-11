import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    revenue: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", business: "", revenue: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Your <span className="text-gradient-primary">Growth Engine</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form and we'll get back to you within 24 hours with a personalized strategy outline.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Free strategy consultation",
                "Custom growth roadmap",
                "No-obligation discussion",
                "Response within 24 hours",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="text-foreground font-medium">hello@thrivedigilabs.com</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Or book directly</p>
                  <p className="text-foreground font-medium">Schedule a call</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <select
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg bg-muted/50 border border-border/50 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select...</option>
                    <option value="ecommerce">Ecommerce Brand</option>
                    <option value="leadgen">Lead Generation</option>
                    <option value="coach">Coach / Course Creator</option>
                    <option value="startup">Startup / Founder</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-foreground mb-2">
                    Monthly Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg bg-muted/50 border border-border/50 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select...</option>
                    <option value="starting">Just Starting</option>
                    <option value="5l">Under ₹5L</option>
                    <option value="5l-25l">₹5L - ₹25L</option>
                    <option value="25l-1cr">₹25L - ₹1Cr</option>
                    <option value="1cr+">₹1Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Goals
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking to achieve? Any specific challenges?"
                  rows={4}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive communications from ThriveDigiLabs. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
