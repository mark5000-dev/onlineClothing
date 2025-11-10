import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-6">
            <Mail className="h-8 w-8 text-black" />
          </div>
          
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
            Join Our Exclusive Club
          </h2>
          
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips 
            from our fashion experts. Subscribe to our newsletter today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-background text-foreground border-background/20 px-6 py-6 flex-1"
            />
            <Button
              size="lg"
              className="bg-[#D4AF37] text-black hover:bg-[#C5A028] px-8 py-6"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-background/60 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
