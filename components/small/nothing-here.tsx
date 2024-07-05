"use client";

import { CardContent } from "@/components/ui/card";
import {
    AlertCircle,
    Coffee,
    FileQuestion,
    Frown,
    Ghost,
    Search,
} from "lucide-react";

const iconMap = {
  search: Search,
  alert: AlertCircle,
  question: FileQuestion,
  coffee: Coffee,
  frown: Frown,
  ghost: Ghost,
} as const;

type NothingHereProps = {
  title?: string;
  message?: string;
  icon?: keyof typeof iconMap;
  buttonText?: string;
  customColor?: string;
};

const NothingHere = ({
  title = "Nothing to see here",
  message = "We couldn't find what you're looking for.",
  icon = "search",
  customColor = "text-purple-600",
}: NothingHereProps) => {
  const IconComponent = iconMap[icon] || Search;

  return (
    <CardContent className="flex flex-col items-center text-center p-6">
      <IconComponent className={`h-24 w-24 ${customColor} mb-4`} />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{message}</p>
   
    </CardContent>
  );
};

export default NothingHere;
