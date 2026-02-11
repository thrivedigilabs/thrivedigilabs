import { XCircle } from "lucide-react";

const notForList = [
  "Businesses expecting overnight miracles without effort",
  "Those unwilling to test, iterate, and improve",
  "Clients without serious growth intent or budget",
  "People looking for cheap, low-quality work",
  "Anyone who wants to micromanage every decision",
];

const NotForSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Honest Disclaimer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who This is <span className="text-destructive">NOT</span> For
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in transparency. Here's who we can't help.
            </p>
          </div>

          {/* List */}
          <div className="glass-card p-8 space-y-4">
            {notForList.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
              >
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* Positive Flip */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              But if you're <span className="text-primary font-medium">serious about growth</span>, ready to move fast, and open to data-driven decisions — we should talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotForSection;
