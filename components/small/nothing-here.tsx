"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  AlertCircle,
  FileQuestion,
  Coffee,
  Frown,
  Ghost,
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
  onButtonClick?: () => void;
  customColor?: string;
};

const NothingHere = ({
  title = "Nothing to see here",
  message = "We couldn't find what you're looking for.",
  icon = "search",
  buttonText = "Go back",
  onButtonClick = () => {},
  customColor = "text-purple-600",
}: NothingHereProps) => {
  const IconComponent = iconMap[icon] || Search;

  return (
    <CardContent className="flex flex-col items-center text-center p-6">
      <IconComponent className={`h-24 w-24 ${customColor} mb-4`} />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      {/* <Button
        onClick={onButtonClick}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        {buttonText}
      </Button> */}
    </CardContent>
  );
};

export default NothingHere;
