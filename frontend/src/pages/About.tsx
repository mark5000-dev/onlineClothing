import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue perfection in every stitch, every fabric choice, and every design decision.",
  },
  {
    icon: Users,
    title: "Craftsmanship",
    description:
      "Our master artisans bring decades of experience to create truly exceptional pieces.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Committed to ethical sourcing and sustainable practices in luxury fashion.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every piece we create is infused with our love for timeless elegance and style.",
  },
];

const timeline = [
  {
    year: "1985",
    title: "The Beginning",
    description:
      "Founded in Milan by master tailor Alessandro Rossi, LUXÉ was born from a vision to create timeless luxury.",
  },
  {
    year: "1998",
    title: "Global Expansion",
    description:
      "Opened flagship stores in Paris, London, and New York, bringing Italian craftsmanship to the world.",
  },
  {
    year: "2010",
    title: "Innovation",
    description:
      "Launched our sustainable luxury line, pioneering eco-conscious haute couture.",
  },
  {
    year: "2025",
    title: "Digital Future",
    description:
      "Embracing technology while maintaining our commitment to artisanal excellence.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1704729105381-f579cfcefd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwNzExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="LUXÉ Atelier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <h1 className="font-serif text-white text-[3.5rem] md:text-[5rem] leading-tight mb-6">
                Our Story
              </h1>
              <p className="text-white/90 text-lg md:text-xl">
                Four decades of dedication to craftsmanship, elegance, and
                timeless luxury fashion
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                Crafting Timeless Elegance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At LUXÉ, we believe that true luxury is found in the details.
                Every piece in our collection is a testament to the artistry of
                our master craftsmen, who bring together traditional techniques
                and contemporary design to create fashion that transcends
                trends.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in Milan in 1985, we've remained dedicated to our core
                values: exceptional quality, sustainable practices, and designs
                that empower those who wear them. Our journey is one of passion,
                precision, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we create
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-full mb-6 group-hover:bg-[#D4AF37] transition-colors">
                    <value.icon className="h-8 w-8 text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                  Italian Heritage, Global Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our atelier in Milan remains the heart of our operations,
                  where master tailors and designers collaborate to create each
                  season's collection. Every garment begins with hand-selected
                  fabrics from the finest mills in Italy and beyond.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From the initial sketch to the final stitch, our process
                  honors traditional craftsmanship while embracing innovation.
                  The result is fashion that's both contemporary and timeless,
                  sophisticated and wearable.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758297679736-2e6ff92d2021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGV0YWlsfGVufDF8fHx8MTc2MjA3MTE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Craftsmanship Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                Our Journey
              </h2>
              <p className="text-background/80 text-lg max-w-2xl mx-auto">
                Four decades of milestones and achievements
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-[#D4AF37]/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#D4AF37] rounded-full" />

                  <div className="bg-background/5 backdrop-blur-sm p-6 border border-background/10">
                    <div className="text-[#D4AF37] mb-2">{item.year}</div>
                    <h3 className="mb-3">{item.title}</h3>
                    <p className="text-background/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-[#D4AF37] text-[3rem] font-serif mb-2">
                  40+
                </div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[3rem] font-serif mb-2">
                  50+
                </div>
                <p className="text-muted-foreground">Master Artisans</p>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[3rem] font-serif mb-2">
                  25+
                </div>
                <p className="text-muted-foreground">Countries Worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[3rem] font-serif mb-2">
                  100k+
                </div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                Experience LUXÉ
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Visit our flagship store in Milan or explore our collection
                online. Discover the difference that true craftsmanship makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-black hover:bg-[#C5A028] transition-colors"
                >
                  Shop Collection
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  Find a Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
