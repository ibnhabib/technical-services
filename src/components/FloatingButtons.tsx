"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Button
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-bounce"
        onClick={() => window.open('https://wa.me/+971569811332', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        className="rounded-full w-14 h-14 bg-secondary hover:bg-secondary/90 shadow-lg"
        onClick={() => window.location.href = 'tel:+971564836102'}
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
}
