import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Award, Heart, Globe, Sparkles, Users, TrendingUp } from "lucide-react";

const stats = [
  { label: "Years of Excellence", value: "25+", icon: Award },
  { label: "Happy Customers", value: "50K+", icon: Heart },
  { label: "Countries Served", value: "45+", icon: Globe },
  { label: "Exclusive Products", value: "10K+", icon: Sparkles },
];

const team = [
  {
    name: "Isabella Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Marcus Williams",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Sophia Laurent",
    role: "Brand Director",
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMzIxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Alexander Ross",
    role: "Chief Curator",
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We settle for nothing less than perfection in every piece we offer, ensuring the highest standards of quality and craftsmanship.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for luxury fashion drives us to curate collections that inspire and delight our discerning clientele.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We're committed to ethical sourcing and sustainable practices, ensuring luxury doesn't come at the cost of our planet.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships with our customers, artisans, and partners is at the heart of everything we do.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-foreground text-background overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608494604059-7971195e13e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjI0OTg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury Store"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
            <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028] mb-4 w-fit">
              Est. 1998
            </Badge>
            <h1 className="font-serif text-white text-[3rem] md:text-[5rem] leading-tight mb-6">
              Redefining Luxury
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              For over two decades, LUXÉ has been the destination for those who 
              appreciate the finest in fashion and craftsmanship.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center border-0">
                    <CardContent className="p-8">
                      <Icon className="h-8 w-8 mx-auto mb-4 text-[#D4AF37]" />
                      <div className="font-serif text-[2.5rem] mb-2">{stat.value}</div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Our Story</Badge>
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 1998 by visionary entrepreneur Élise Beaumont, LUXÉ began 
                  as a small boutique in Paris with a simple mission: to bring the world's 
                  finest luxury fashion to discerning individuals who appreciate quality 
                  and craftsmanship.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  What started as a curated collection of European designers has evolved 
                  into a global destination for luxury fashion, accessories, and lifestyle 
                  pieces. Today, we work with over 200 prestigious brands and independent 
                  artisans from around the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to excellence remains unchanged. Every piece in our 
                  collection is carefully selected for its exceptional quality, timeless 
                  design, and the story it tells.
                </p>
              </div>
              
              <div className="relative">
                <Card className="overflow-hidden border-0">
                  <div className="aspect-[4/5] bg-muted">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1747451050504-3b268d62c3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2MjM2NDYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Craftsmanship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                <div className="absolute -bottom-8 -left-8 bg-[#D4AF37] text-black p-8 max-w-xs">
                  <p className="text-sm mb-2">Our Philosophy</p>
                  <p className="font-serif text-xl">
                    "True luxury is timeless, sustainable, and meaningful."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our core values guide every decision we make and every relationship we build
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                          <Icon className="h-6 w-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <CardTitle className="mb-2">{value.title}</CardTitle>
                          <CardDescription className="leading-relaxed">
                            {value.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Team</Badge>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                Meet the Visionaries
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The talented individuals behind LUXÉ's curated collections
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden border-0 group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="overflow-hidden border-0 order-2 lg:order-1">
                <div className="aspect-[4/3] bg-muted">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1718963581743-10d76f92d42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllcnxlbnwxfHx8fDE3NjIzNjQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sustainability"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4">Sustainability</Badge>
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                  Luxury with Responsibility
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe that true luxury considers its impact on the world. That's 
                  why we're committed to sustainable practices throughout our supply chain.
                </p>
                
                <Tabs defaultValue="ethical" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="ethical">Ethical Sourcing</TabsTrigger>
                    <TabsTrigger value="circular">Circular Fashion</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ethical" className="mt-4">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Partnership with certified ethical manufacturers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Fair wages and working conditions for all artisans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Transparent supply chain tracking</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="circular" className="mt-4">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Repair and restoration services for our products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Pre-owned luxury program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                        <span>Sustainable packaging materials</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>

                <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                  Learn More About Our Initiatives
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-6 text-[#D4AF37]" />
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
              Join the LUXÉ Experience
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
              Become part of our community and discover a world of luxury, 
              craftsmanship, and timeless style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                Explore Collections
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
