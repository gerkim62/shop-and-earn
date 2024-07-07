import prisma from "@/lib/prisma";
import React from "react";
import fs from "fs";
import regions from "@/data/regions";
import env from "@/constants/env";

type Props = {};

export default async function page({}: Props) {
  async function createAdminUser() {
    const admin = await prisma.user.findUnique({
      where: {
        email: env.ADMIN_EMAIL,
      },
    });

    if (admin) {
      console.log("Admin user already exists, skipping seeding.");
      return;
    }

    await prisma.user.create({
      data: {
        email: env.ADMIN_EMAIL,
        fullName: env.ADMIN_NAME,
        password: env.ADMIN_PASSWORD,
        role: "ADMIN",
      },
    });
    console.log("Admin user created.");
  }
  async function addRegions() {
    const existingRegions = await prisma.region.findMany();
    if (existingRegions.length > 0) {
      console.log("Regions already exist, skipping seeding.");
      return;
    }

    for (const region of regions) {
      console.log("region", region.name);
      const createdRegion = await prisma.region.create({
        data: {
          name: region.name,
          cities: {
            create: region.cities.map((city) => ({
              name: city.name,
              stations: {
                create: city.stations.map((station) => ({
                  name: station.name,
                  fee: station.fee,
                  address: station.address,
                  town: station.town,
                  googleMapsLink: station.googleMapsLink,
                  contactInfo: station.contactInfo,
                  openingHours: station.openingHours,
                  paymentOptions: station.paymentOptions,
                })),
              },
            })),
          },
        },
      });

      console.log("Created region", createdRegion.name);
    }
  }

  async function products() {
    const existingProducts = await prisma.product.findMany();
    if (existingProducts.length > 0) {
      console.log("Products already exist, skipping seeding.");
      return;
    }

    console.log("Seeding started...");
    // In folder ./data/brands has json files such as Infinix.json, Samsung.json, Tecno.json. Each file contains an array of objects with keys name, description, img. The file name is the brand name. Seed the data to the database
    try {
      const brands = fs.readdirSync("./data/brands");
      console.log("brands", brands);
      for (const brand of brands) {
        console.log("brand", brand);
        const data = JSON.parse(
          fs.readFileSync(`./data/brands/${brand}`, "utf8")
        );

        // @ts-expect-error
        for (const item of data) {
          console.log("item", item);
          await prisma.product.create({
            data: {
              name: item.name,
              description: item.description,
              images: [item.img],
              manufacturer: brand.replace(".json", ""),
              discount: Math.floor(Math.random() * 40) + 1,
              reviewsCount: Math.floor(Math.random() * 100) + 1,
              rating:
                Math.round((Math.pow(Math.random(), 2) * 1.5 + 3.7) * 10) / 10,
            },
          });
        }
      }

      console.log("Seeded.");
    } catch (error) {
      console.error("Seeding failed: ", error);
    }
  }

  await Promise.all([createAdminUser(), addRegions(), products()]);

  return <div>page</div>;
}
