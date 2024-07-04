import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define types for our data structure
interface Station {
  id: number;
  name: string;
  fee: string;
  address: string;
  town: string;
  openingHours: string;
}

interface City {
  id: number;
  name: string;
  stations: Station[];
}

interface Region {
  id: number;
  name: string;
  cities: City[];
}

// Mock data
const mockData: { regions: Region[] } = {
  regions: [
    {
      id: 1,
      name: "North",
      cities: [
        {
          id: 1,
          name: "City A",
          stations: [
            {
              id: 1,
              name: "Station 1",
              fee: "$5",
              address: "123 Main St",
              town: "Downtown",
              openingHours: "9AM-5PM",
            },
          ],
        },
        {
          id: 2,
          name: "City B",
          stations: [
            {
              id: 2,
              name: "Station 2",
              fee: "$4",
              address: "456 Elm St",
              town: "Uptown",
              openingHours: "8AM-6PM",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "South",
      cities: [
        {
          id: 3,
          name: "City C",
          stations: [
            {
              id: 3,
              name: "Station 3",
              fee: "$6",
              address: "789 Oak St",
              town: "Midtown",
              openingHours: "10AM-7PM",
            },
          ],
        },
      ],
    },
  ],
};

interface PickupStationModalProps {
  children: React.ReactNode;
}

export default function PickupStationModal({
  children,
}: PickupStationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedRegion(null);
    setSelectedCity(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-purple-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-800 text-center">
            Choose Your Pickup Station
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Combobox
            items={mockData.regions}
            placeholder="Region"
            onSelect={(region: Region) => {
              console.log(region);
              setSelectedRegion(region);
              setSelectedCity(null);
            }}
          />
          {selectedRegion && (
            <Combobox
              items={selectedRegion.cities}
              placeholder="City"
              onSelect={(city: City) => setSelectedCity(city)}
            />
          )}
        </div>

        {
          <PickupStation
            station={selectedCity?.stations[0] || null}
            onClose={handleClose}
          />
        }
      </DialogContent>
    </Dialog>
  );
}

interface ComboboxProps<T> {
  items: T[];
  placeholder: string;
  onSelect: (item: T) => void;
}

function Combobox<T extends { id: number; name: string }>({
  items,
  placeholder,
  onSelect,
}: ComboboxProps<T>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border border-purple-200 rounded-full text-purple-700"
        >
          {value
            ? items.find((item) => item.name === value)?.name ??
              `Select ${placeholder} `
            : `Select ${placeholder} `}
          <ArrowRight className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${placeholder.toLowerCase()}...`}
          />
          <CommandList>
            <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    setValue(item.name);
                    setOpen(false);
                    onSelect(item);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
interface PickupStationProps {
  station: Station | null;
  onClose: () => void;
}

function PickupStation({ station, onClose }: PickupStationProps) {
  if (!station) return <NoCitySelected />;
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-4">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">
        {station.name}
      </h2>
      <div className="mb-4">
        <p className="text-purple-600">Delivery Fee: {station.fee}</p>
      </div>
      <div className="mb-4">
        <p className="text-purple-700">{station.address}</p>
        <p className="text-purple-600">Town: {station.town}</p>
      </div>
      <div className="mb-4">
        <p className="text-purple-600">
          Opening Hours: Mon-Fri ({station.openingHours})
        </p>
      </div>
      <div className="mt-6 text-center">
        <Button
          onClick={() => {
            console.log(`Selected station: ${station.id}`);
            onClose();
          }}
          className="w-full bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full"
        >
          Choose this Pickup Station
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function NoCitySelected() {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-purple-600">
      <MapPin className="w-16 h-16 text-purple-300 mb-4" />
      <p>Select a city to view pickup stations 🏙️</p>
    </div>
  );
}
