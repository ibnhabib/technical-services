import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { TrackedLink } from "./TrackedLink";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Button
        asChild
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-bounce"
      >
        <TrackedLink
          href="https://wa.me/971569811332"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          location="floating"
        >
          <MessageCircle className="h-6 w-6" />
        </TrackedLink>
      </Button>
      <Button
        asChild
        className="rounded-full w-14 h-14 bg-secondary hover:bg-secondary/90 shadow-lg"
      >
        <TrackedLink href="tel:+971564836102" aria-label="Call us" location="floating">
          <Phone className="h-6 w-6" />
        </TrackedLink>
      </Button>
    </div>
  );
}
