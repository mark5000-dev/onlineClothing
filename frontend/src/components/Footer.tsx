import type { FC } from "react";
import { LuFacebook as Facebook, LuInstagram as Instagram, LuTwitter as Twitter } from "react-icons/lu";
const Footer: FC = () => {
  return (
    <footer className="bg-neutral-dark text-secondary-foreground border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          {/* <Logo className="h-10 w-auto" /> */}
          <p className="text-sm text-muted-foreground">
            Your one-stop destination for the latest trending products.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
          <div>
            <h3 className="font-bold text-foreground">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Best Sellers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe for the latest deals and updates.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="max-w-xs bg-background" />
              <button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dropship Landing. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p>Secure Payments:</p>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" aria-label="Visa"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#1A1F71"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" aria-label="Mastercard"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#EB001B"/><path d="M19 12a6 6 0 1 1 12 0a6 6 0 0 1-12 0z" fill="#F79E1B"/><path d="M19 12a6 6 0 1 0-12 0a6 6 -0 0 0 12 0z" fill="#FF5F00"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" aria-label="PayPal"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#003087"/><path d="M23.9 8.6c.2-1.3-1.2-1.6-1.5-1.6h-5.2c-.4 0-.7.3-.8.7l-1.4 8.8c-.1.4.2.8.6.8h2.9c.4 0 .7-.3.8-.7l.2-1.6c.1-.4.4-.7.8-.7h.5c2.4 0 3.8-1.5 4.1-3.7zm-4.3 2.5h-1.1l.3-2.2c.1-.4.4-.7.8-.7h.2c1.3 0 2.2 1 2 2.3-.2 1-1.3 1.6-2.2 1.6z" fill="#FFF"/><path d="M25.1 11.2c-.2.5-.6.8-1.1.8h-1.6c-.4 0-.7.3-.8.7l-.2 1.6c-.1.4.2.8.6.8h.4c.5 0 1 .3 1.1.8l.2 1c.1.4.2.7.2.9-.1 1.3-1.2 1.6-1.5 1.6h-5.2c-.4 0-.7-.3-.8-.7l-1.4 8.8c-.1.4.2.8.6.8h2.9c.4 0 .7-.3.8-.7l.2-1.6c.1-.4.4-.7.8-.7h.5c2.4 0 3.8-1.5 4.1-3.7.2-1.7-1-3.3-2.6-3.7z" fill="#009CDE"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
