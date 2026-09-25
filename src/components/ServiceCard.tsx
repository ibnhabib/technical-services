import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  url?: string;
}

export function ServiceCard({ title, description, icon: Icon, highlights }: ServiceCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg border border-slate-200 h-full">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-4">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
        </div>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-sm text-slate-600">
              <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
