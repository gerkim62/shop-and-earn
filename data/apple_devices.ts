const appleDevices = [
  {
    id: "apple_ipad_pro_13_(2024)-12987",
    name: "iPad Pro 13 (2024)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-13-2024.jpg",
    description:
      "Apple iPad Pro 13 (2024) tablet. Announced May 2024. Features 13.0″  display, Apple M4 chipset, 10290 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2024)-12986",
    name: "iPad Pro 11 (2024)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2024.jpg",
    description:
      "Apple iPad Pro 11 (2024) tablet. Announced May 2024. Features 11.0″  display, Apple M4 chipset, 8160 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_air_13_(2024)-12985",
    name: "iPad Air 13 (2024)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-13-2024.jpg",
    description:
      "Apple iPad Air 13 (2024) tablet. Announced May 2024. Features 13.0″  display, Apple M2 chipset, 1024 GB storage, 8 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_air_11_(2024)-12984",
    name: "iPad Air 11 (2024)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-11-2024.jpg",
    description:
      "Apple iPad Air 11 (2024) tablet. Announced May 2024. Features 11.0″  display, Apple M2 chipset, 1024 GB storage, 8 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_15_pro_max-12548",
    name: "iPhone 15 Pro Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    description:
      "Apple iPhone 15 Pro Max smartphone. Announced Sep 2023. Features 6.7″  display, Apple A17 Pro chipset, 4441 mAh battery, 1024 GB storage, 8 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_15_pro-12557",
    name: "iPhone 15 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    description:
      "Apple iPhone 15 Pro smartphone. Announced Sep 2023. Features 6.1″  display, Apple A17 Pro chipset, 3274 mAh battery, 1024 GB storage, 8 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_15_plus-12558",
    name: "iPhone 15 Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg",
    description:
      "Apple iPhone 15 Plus smartphone. Announced Sep 2023. Features 6.7″  display, Apple A16 Bionic chipset, 4383 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_15-12559",
    name: "iPhone 15",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    description:
      "Apple iPhone 15 smartphone. Announced Sep 2023. Features 6.1″  display, Apple A16 Bionic chipset, 3349 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_watch_ultra_2-12560",
    name: "Watch Ultra 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra2.jpg",
    description:
      "Apple Watch Ultra 2 watch. Announced Sep 2023. Features 1.92″  display, Apple S9 chipset, 564 mAh battery, 64 GB storage, MIL-STD 810H certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_9-12561",
    name: "Watch Series 9",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series9.jpg",
    description:
      "Apple Watch Series 9 watch. Announced Sep 2023. Features 1.9″  display, Apple S9 chipset, 308 mAh battery, 64 GB storage, IP6X certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_9_aluminum-12562",
    name: "Watch Series 9 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series9-aluminum.jpg",
    description:
      "Apple Watch Series 9 Aluminum watch. Announced Sep 2023. Features 1.9″  display, Apple S9 chipset, 308 mAh battery, 64 GB storage, IP6X certified, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2022)-11939",
    name: "iPad Pro 12.9 (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2022.jpg",
    description:
      "Apple iPad Pro 12.9 (2022) tablet. Announced Oct 2022. Features 12.9″  display, Apple M2 chipset, 10758 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2022)-11940",
    name: "iPad Pro 11 (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2022.jpg",
    description:
      "Apple iPad Pro 11 (2022) tablet. Announced Oct 2022. Features 11.0″  display, Apple M2 chipset, 7538 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_(2022)-11941",
    name: "iPad (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-10-2022.jpg",
    description:
      "Apple iPad (2022) tablet. Announced Oct 2022. Features 10.9″  display, Apple A14 Bionic chipset, 7606 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_14_pro_max-11773",
    name: "iPhone 14 Pro Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
    description:
      "Apple iPhone 14 Pro Max smartphone. Announced Sep 2022. Features 6.7″  display, Apple A16 Bionic chipset, 4323 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_14_pro-11860",
    name: "iPhone 14 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
    description:
      "Apple iPhone 14 Pro smartphone. Announced Sep 2022. Features 6.1″  display, Apple A16 Bionic chipset, 3200 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_14_plus-11862",
    name: "iPhone 14 Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
    description:
      "Apple iPhone 14 Plus smartphone. Announced Sep 2022. Features 6.7″  display, Apple A15 Bionic chipset, 4323 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_14-11861",
    name: "iPhone 14",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
    description:
      "Apple iPhone 14 smartphone. Announced Sep 2022. Features 6.1″  display, Apple A15 Bionic chipset, 3279 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_watch_ultra-11827",
    name: "Watch Ultra",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra.jpg",
    description:
      "Apple Watch Ultra watch. Announced Sep 2022. Features 1.92″  display, Apple S8 chipset, 542 mAh battery, 32 GB storage, MIL-STD 810H certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_8-11866",
    name: "Watch Series 8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8.jpg",
    description:
      "Apple Watch Series 8 watch. Announced Sep 2022. Features 1.9″  display, Apple S8 chipset, 308 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_8_aluminum-11864",
    name: "Watch Series 8 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8-aluminum.jpg",
    description:
      "Apple Watch Series 8 Aluminum watch. Announced Sep 2022. Features 1.9″  display, Apple S8 chipset, 308 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_se_(2022)-11865",
    name: "Watch SE (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8se-2022.jpg",
    description:
      "Apple Watch SE (2022) watch. Announced Sep 2022. Features 1.78″  display, Apple S8 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_iphone_se_(2022)-11410",
    name: "iPhone SE (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg",
    description:
      "Apple iPhone SE (2022) smartphone. Announced Mar 2022. Features 4.7″  display, Apple A15 Bionic chipset, 2018 mAh battery, 256 GB storage, 4 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_ipad_air_(2022)-11411",
    name: "iPad Air (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-2022-new.jpg",
    description:
      "Apple iPad Air (2022) tablet. Announced Mar 2022. Features 10.9″  display, Apple M1 chipset, 256 GB storage, 8 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_13_pro_max-11089",
    name: "iPhone 13 Pro Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
    description:
      "Apple iPhone 13 Pro Max smartphone. Announced Sep 2021. Features 6.7″  display, Apple A15 Bionic chipset, 4352 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_13_pro-11102",
    name: "iPhone 13 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
    description:
      "Apple iPhone 13 Pro smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_13-11103",
    name: "iPhone 13",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
    description:
      "Apple iPhone 13 smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3240 mAh battery, 512 GB storage, 4 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_13_mini-11104",
    name: "iPhone 13 mini",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
    description:
      "Apple iPhone 13 mini smartphone. Announced Sep 2021. Features 5.4″  display, Apple A15 Bionic chipset, 2438 mAh battery, 512 GB storage, 4 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_ipad_mini_(2021)-11105",
    name: "iPad mini (2021)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg",
    description:
      "Apple iPad mini (2021) tablet. Announced Sep 2021. Features 8.3″  display, Apple A15 Bionic chipset, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_10_2_(2021)-11106",
    name: "iPad 10.2 (2021)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-102-2021-.jpg",
    description:
      "Apple iPad 10.2 (2021) tablet. Announced Sep 2021. Features 10.2″  display, Apple A13 Bionic chipset, 8557 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_edition_series_7-11147",
    name: "Watch Edition Series 7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-titanium.jpg",
    description:
      "Apple Watch Edition Series 7 watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_7-11146",
    name: "Watch Series 7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-stainless-steel.jpg",
    description:
      "Apple Watch Series 7 watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_7_aluminum-11107",
    name: "Watch Series 7 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-aluminum.jpg",
    description:
      "Apple Watch Series 7 Aluminum watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2021)-10864",
    name: "iPad Pro 12.9 (2021)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2021.jpg",
    description:
      "Apple iPad Pro 12.9 (2021) tablet. Announced Apr 2021. Features 12.9″  display, Apple M1 chipset, 10758 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2021)-10865",
    name: "iPad Pro 11 (2021)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2021.jpg",
    description:
      "Apple iPad Pro 11 (2021) tablet. Announced Apr 2021. Features 11.0″  display, Apple M1 chipset, 7538 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_12_pro_max-10237",
    name: "iPhone 12 Pro Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
    description:
      "Apple iPhone 12 Pro Max smartphone. Announced Oct 2020. Features 6.7″  display, Apple A14 Bionic chipset, 3687 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_12_pro-10508",
    name: "iPhone 12 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
    description:
      "Apple iPhone 12 Pro smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 512 GB storage, 6 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_12-10509",
    name: "iPhone 12",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
    description:
      "Apple iPhone 12 smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 256 GB storage, 4 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_iphone_12_mini-10510",
    name: "iPhone 12 mini",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
    description:
      "Apple iPhone 12 mini smartphone. Announced Oct 2020. Features 5.4″  display, Apple A14 Bionic chipset, 2227 mAh battery, 256 GB storage, 4 GB RAM, Ceramic Shield glass.",
  },
  {
    id: "apple_ipad_air_(2020)-10444",
    name: "iPad Air (2020)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air4-2020.jpg",
    description:
      "Apple iPad Air (2020) tablet. Announced Sep 2020. Features 10.9″  display, Apple A14 Bionic chipset, 7606 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_10_2_(2020)-10445",
    name: "iPad 10.2 (2020)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad8-102-inches-2020.jpg",
    description:
      "Apple iPad 10.2 (2020) tablet. Announced Sep 2020. Features 10.2″  display, Apple A12 Bionic chipset, 128 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_se-10446",
    name: "Watch SE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-se.jpg",
    description:
      "Apple Watch SE watch. Announced Sep 2020. Features 1.78″  display, Apple S5 chipset, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_series_6_aluminum-10447",
    name: "Watch Series 6 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6.jpg",
    description:
      "Apple Watch Series 6 Aluminum watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_series_6-10448",
    name: "Watch Series 6",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-steel.jpg",
    description:
      "Apple Watch Series 6 watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_edition_series_6-10449",
    name: "Watch Edition Series 6",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-titanium.jpg",
    description:
      "Apple Watch Edition Series 6 watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_iphone_se_(2020)-10170",
    name: "iPhone SE (2020)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
    description:
      "Apple iPhone SE (2020) smartphone. Announced Apr 2020. Features 4.7″  display, Apple A13 Bionic chipset, 1821 mAh battery, 256 GB storage, 3 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2020)-10136",
    name: "iPad Pro 12.9 (2020)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-12-2020.jpg",
    description:
      "Apple iPad Pro 12.9 (2020) tablet. Announced Mar 2020. Features 12.9″  display, Apple A12Z Bionic chipset, 9720 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2020)-10137",
    name: "iPad Pro 11 (2020)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2020.jpg",
    description:
      "Apple iPad Pro 11 (2020) tablet. Announced Mar 2020. Features 11.0″  display, Apple A12Z Bionic chipset, 1024 GB storage, 6 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_11_pro_max-9846",
    name: "iPhone 11 Pro Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
    description:
      "Apple iPhone 11 Pro Max smartphone. Announced Sep 2019. Features 6.5″  display, Apple A13 Bionic chipset, 3969 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_11_pro-9847",
    name: "iPhone 11 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
    description:
      "Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″  display, Apple A13 Bionic chipset, 3046 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_11-9848",
    name: "iPhone 11",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    description:
      "Apple iPhone 11 smartphone. Announced Sep 2019. Features 6.1″  display, Apple A13 Bionic chipset, 3110 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_10_2_(2019)-9857",
    name: "iPad 10.2 (2019)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad7-102-inches.jpg",
    description:
      "Apple iPad 10.2 (2019) tablet. Announced Sep 2019. Features 10.2″  display, Apple A10 Fusion chipset, 8827 mAh battery, 128 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_edition_series_5-9860",
    name: "Watch Edition Series 5",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-series-5.jpg",
    description:
      "Apple Watch Edition Series 5 watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_5-9859",
    name: "Watch Series 5",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-5.jpg",
    description:
      "Apple Watch Series 5 watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_5_aluminum-9858",
    name: "Watch Series 5 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-aluminum-series-5.jpg",
    description:
      "Apple Watch Series 5 Aluminum watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_air_(2019)-9638",
    name: "iPad Air (2019)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air3-2019.jpg",
    description:
      "Apple iPad Air (2019) tablet. Announced Mar 2019. Features 10.5″  display, Apple A12 Bionic chipset, 8134 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_mini_(2019)-9637",
    name: "iPad mini (2019)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2019.jpg",
    description:
      "Apple iPad mini (2019) tablet. Announced Mar 2019. Features 7.9″  display, Apple A12 Bionic chipset, 5124 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2018)-9387",
    name: "iPad Pro 12.9 (2018)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2018.jpg",
    description:
      "Apple iPad Pro 12.9 (2018) tablet. Announced Oct 2018. Features 12.9″  display, Apple A12X Bionic chipset, 9720 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2018)-9386",
    name: "iPad Pro 11 (2018)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2018.jpg",
    description:
      "Apple iPad Pro 11 (2018) tablet. Announced Oct 2018. Features 11.0″  display, Apple A12X Bionic chipset, 7812 mAh battery, 1024 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_xs_max-9319",
    name: "iPhone XS Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
    description:
      "Apple iPhone XS Max smartphone. Announced Sep 2018. Features 6.5″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 3174 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_xs-9318",
    name: "iPhone XS",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
    description:
      "Apple iPhone XS smartphone. Announced Sep 2018. Features 5.8″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 2658 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_xr-9320",
    name: "iPhone XR",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
    description:
      "Apple iPhone XR smartphone. Announced Sep 2018. Features 6.1″  display, Apple A12 Bionic chipset, 12 MP primary camera, 7 MP front camera, 2942 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_series_4-9321",
    name: "Watch Series 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-4-steel.jpg",
    description:
      "Apple Watch Series 4 watch. Announced Sep 2018. Features 1.78″  display, Apple S4 chipset, 292 mAh battery, 16 GB storage, 1000 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_4_aluminum-9322",
    name: "Watch Series 4 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-4-aluminum.jpg",
    description:
      "Apple Watch Series 4 Aluminum watch. Announced Sep 2018. Features 1.78″  display, Apple S4 chipset, 16 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_9_7_(2018)-9142",
    name: "iPad 9.7 (2018)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-97-2018.jpg",
    description:
      "Apple iPad 9.7 (2018) tablet. Announced Mar 2018. Features 9.7″  display, Apple A10 Fusion chipset, 8 MP primary camera, 1.2 MP front camera, 8827 mAh battery, 128 GB storage, 2 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_x-8858",
    name: "iPhone X",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
    description:
      "Apple iPhone X smartphone. Announced Sep 2017. Features 5.8″  display, Apple A11 Bionic chipset, Dual: 12 MP (f/1.8, 28mm, 1.22µm) + 12 MP primary camera, 7 MP front camera, 2716 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_8_plus-8131",
    name: "iPhone 8 Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-plus-new.jpg",
    description:
      "Apple iPhone 8 Plus smartphone. Announced Sep 2017. Features 5.5″  display, Apple A11 Bionic chipset, Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP primary camera, 7 MP front camera, 2691 mAh battery, 256 GB storage, 3 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_iphone_8-8573",
    name: "iPhone 8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
    description:
      "Apple iPhone 8 smartphone. Announced Sep 2017. Features 4.7″  display, Apple A11 Bionic chipset, 12 MP primary camera, 7 MP front camera, 1821 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_watch_edition_series_3-8861",
    name: "Watch Edition Series 3",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-series3.jpg",
    description:
      "Apple Watch Edition Series 3 watch. Announced Sep 2017. Features 1.65″  display, Apple S3 chipset, 341 mAh battery, 16 GB storage, 768 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_3-8860",
    name: "Watch Series 3",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series3-.jpg",
    description:
      "Apple Watch Series 3 watch. Announced Sep 2017. Features 1.65″  display, Apple S3 chipset, 279 mAh battery, 16 GB storage, 768 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_3_aluminum-8859",
    name: "Watch Series 3 Aluminum",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series3-sport-.jpg",
    description:
      "Apple Watch Series 3 Aluminum watch. Announced Sep 2017. Features 1.65″  display, Apple S3 chipset, 279 mAh battery, 16 GB storage, 768 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2017)-8717",
    name: "iPad Pro 12.9 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2017.jpg",
    description:
      "Apple iPad Pro 12.9 (2017) tablet. Announced Jun 2017. Features 12.9″  display, Apple A10X Fusion chipset, 12 MP primary camera, 7 MP front camera, 10891 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_10_5_(2017)-8716",
    name: "iPad Pro 10.5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-105-2017.jpg",
    description:
      "Apple iPad Pro 10.5 (2017) tablet. Announced Jun 2017. Features 10.5″  display, Apple A10X Fusion chipset, 12 MP primary camera, 7 MP front camera, 8134 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_9_7_(2017)-8620",
    name: "iPad 9.7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-97-2017.jpg",
    description:
      "Apple iPad 9.7 (2017) tablet. Announced Mar 2017. Features 9.7″  display, Apple A9 chipset, 8 MP primary camera, 1.2 MP front camera, 8827 mAh battery, 128 GB storage, 2 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_edition_series_2_42mm-8331",
    name: "Watch Edition Series 2 42mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-edition-42mm.jpg",
    description:
      "Apple Watch Edition Series 2 42mm watch. Announced Sep 2016. Features 1.65″  display, Apple S2 chipset, 334 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_edition_series_2_38mm-8332",
    name: "Watch Edition Series 2 38mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-edition-38mm.jpg",
    description:
      "Apple Watch Edition Series 2 38mm watch. Announced Sep 2016. Features 1.5″  display, Apple S2 chipset, 273 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_2_42mm-8329",
    name: "Watch Series 2 42mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-42mm.jpg",
    description:
      "Apple Watch Series 2 42mm watch. Announced Sep 2016. Features 1.65″  display, Apple S2 chipset, 334 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_2_38mm-8330",
    name: "Watch Series 2 38mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-38mm.jpg",
    description:
      "Apple Watch Series 2 38mm watch. Announced Sep 2016. Features 1.5″  display, Apple S2 chipset, 273 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_series_2_aluminum_42mm-8328",
    name: "Watch Series 2 Aluminum 42mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-sport-42mm.jpg",
    description:
      "Apple Watch Series 2 Aluminum 42mm watch. Announced Sep 2016. Features 1.65″  display, Apple S2 chipset, 334 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_series_1_aluminum_42mm-8334",
    name: "Watch Series 1 Aluminum 42mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch1-sport-42mm.jpg",
    description:
      "Apple Watch Series 1 Aluminum 42mm watch. Announced Sep 2016. Features 1.65″  display, Apple S1P chipset, 250 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_series_2_aluminum_38mm-8327",
    name: "Watch Series 2 Aluminum 38mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-sport-38mm.jpg",
    description:
      "Apple Watch Series 2 Aluminum 38mm watch. Announced Sep 2016. Features 1.5″  display, Apple S2 chipset, 273 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_series_1_aluminum_38mm-8333",
    name: "Watch Series 1 Aluminum 38mm",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch2-s2-sport-38mm.jpg",
    description:
      "Apple Watch Series 1 Aluminum 38mm watch. Announced Sep 2016. Features 1.5″  display, Apple S1P chipset, 205 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_iphone_7_plus-8065",
    name: "iPhone 7 Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-plus-r2.jpg",
    description:
      "Apple iPhone 7 Plus smartphone. Announced Sep 2016. Features 5.5″  display, Apple A10 Fusion chipset, Dual: 12 MP (f/1.8, 28mm, 1/3″, OIS) + 12 MP primary camera, 7 MP front camera, 2900 mAh battery, 256 GB storage, 3 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_iphone_7-8064",
    name: "iPhone 7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg",
    description:
      "Apple iPhone 7 smartphone. Announced Sep 2016. Features 4.7″  display, Apple A10 Fusion chipset, 12 MP primary camera, 7 MP front camera, 1960 mAh battery, 256 GB storage, 2 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_ipad_pro_9_7_(2016)-7984",
    name: "iPad Pro 9.7 (2016)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-97.jpg",
    description:
      "Apple iPad Pro 9.7 (2016) tablet. Announced Mar 2016. Features 9.7″  display, Apple A9X chipset, 12 MP primary camera, 5 MP front camera, 7306 mAh battery, 256 GB storage, 2 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_se-7969",
    name: "iPhone SE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5se-ofic.jpg",
    description:
      "Apple iPhone SE smartphone. Announced Mar 2016. Features 4.0″  display, Apple A9 chipset, 12 MP primary camera, 1.2 MP front camera, 1624 mAh battery, 128 GB storage, 2 GB RAM.",
  },
  {
    id: "apple_iphone_6s_plus-7243",
    name: "iPhone 6s Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg",
    description:
      "Apple iPhone 6s Plus smartphone. Announced Sep 2015. Features 5.5″  display, Apple A9 (14 chipset, 12 MP primary camera, 5 MP front camera, 2750 mAh battery, 128 GB storage, 2 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_iphone_6s-7242",
    name: "iPhone 6s",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
    description:
      "Apple iPhone 6s smartphone. Announced Sep 2015. Features 4.7″  display, Apple A9 (14 chipset, 12 MP primary camera, 5 MP front camera, 1715 mAh battery, 128 GB storage, 2 GB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2015)-7562",
    name: "iPad Pro 12.9 (2015)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-.jpg",
    description:
      "Apple iPad Pro 12.9 (2015) tablet. Announced Sep 2015. Features 12.9″  display, Apple A9X chipset, 8 MP primary camera, 1.2 MP front camera, 10307 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_mini_4_(2015)-7561",
    name: "iPad mini 4 (2015)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/ipad-mini-41.jpg",
    description:
      "Apple iPad mini 4 (2015) tablet. Announced Sep 2015. Features 7.9″  display, Apple A8 chipset, 5124 mAh battery, 128 GB storage, 2 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_edition_42mm_(1st_gen)-7698",
    name: "Watch Edition 42mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-42mm.jpg",
    description:
      "Apple Watch Edition 42mm (1st gen) watch. Announced Sep 2014. Features 1.65″  display, Apple S1 chipset, 250 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_edition_38mm_(1st_gen)-7697",
    name: "Watch Edition 38mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-38mm.jpg",
    description:
      "Apple Watch Edition 38mm (1st gen) watch. Announced Sep 2014. Features 1.5″  display, Apple S1 chipset, 205 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_42mm_(1st_gen)-7696",
    name: "Watch 42mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-42mm.jpg",
    description:
      "Apple Watch 42mm (1st gen) watch. Announced Sep 2014. Features 1.65″  display, Apple S1 chipset, 250 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_38mm_(1st_gen)-7695",
    name: "Watch 38mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-38mm.jpg",
    description:
      "Apple Watch 38mm (1st gen) watch. Announced Sep 2014. Features 1.5″  display, Apple S1 chipset, 205 mAh battery, 8 GB storage, 512 MB RAM, Sapphire crystal glass.",
  },
  {
    id: "apple_watch_sport_42mm_(1st_gen)-7694",
    name: "Watch Sport 42mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-sport-42mm2.jpg",
    description:
      "Apple Watch Sport 42mm (1st gen) watch. Announced Sep 2014. Features 1.65″  display, Apple S1 chipset, 250 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_watch_sport_38mm_(1st_gen)-7693",
    name: "Watch Sport 38mm (1st gen)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-sport-38mm.jpg",
    description:
      "Apple Watch Sport 38mm (1st gen) watch. Announced Sep 2014. Features 1.5″  display, Apple S1 chipset, 205 mAh battery, 8 GB storage, 512 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_air_2-6742",
    name: "iPad Air 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-2-new.jpg",
    description:
      "Apple iPad Air 2 tablet. Announced Oct 2014. Features 9.7″  display, Apple A8X chipset, 8 MP primary camera, 1.2 MP front camera, 7340 mAh battery, 128 GB storage, 2 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_mini_3-6741",
    name: "iPad mini 3",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-3-new.jpg",
    description:
      "Apple iPad mini 3 tablet. Announced Oct 2014. Features 7.9″  display, Apple A7 chipset, 5 MP primary camera, 1.2 MP front camera, 6470 mAh battery, 128 GB storage, 1000 MB RAM, Oleophobic coating.",
  },
  {
    id: "apple_iphone_6_plus-6665",
    name: "iPhone 6 Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-plus2.jpg",
    description:
      "Apple iPhone 6 Plus smartphone. Announced Sep 2014. Features 5.5″  display, Apple A8 chipset, 8 MP primary camera, 1.2 MP front camera, 2915 mAh battery, 128 GB storage, 1000 MB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_iphone_6-6378",
    name: "iPhone 6",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-4.jpg",
    description:
      "Apple iPhone 6 smartphone. Announced Sep 2014. Features 4.7″  display, Apple A8 chipset, 8 MP primary camera, 1.2 MP front camera, 1810 mAh battery, 128 GB storage, 1000 MB RAM, Ion-strengthened glass.",
  },
  {
    id: "apple_ipad_air-5797",
    name: "iPad Air",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air.jpg",
    description:
      "Apple iPad Air tablet. Announced Oct 2013. Features 9.7″  display, Apple A7 chipset, 5 MP primary camera, 1.2 MP front camera, 8820 mAh battery, 128 GB storage, 1000 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_mini_2-5735",
    name: "iPad mini 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini2.jpg",
    description:
      "Apple iPad mini 2 tablet. Announced Oct 2013. Features 7.9″  display, Apple A7 chipset, 5 MP primary camera, 1.2 MP front camera, 6470 mAh battery, 128 GB storage, 1000 MB RAM, Oleophobic coating.",
  },
  {
    id: "apple_iphone_5s-5685",
    name: "iPhone 5s",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5s-ofic.jpg",
    description:
      "Apple iPhone 5s smartphone. Announced Sep 2013. Features 4.0″  display, Apple A7 chipset, 8 MP primary camera, 1.2 MP front camera, 1560 mAh battery, 64 GB storage, 1000 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_iphone_5c-5690",
    name: "iPhone 5c",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5c-new2.jpg",
    description:
      "Apple iPhone 5c smartphone. Announced Sep 2013. Features 4.0″  display, Apple A6 chipset, 8 MP primary camera, 1.2 MP front camera, 1510 mAh battery, 32 GB storage, 1000 MB RAM.",
  },
  {
    id: "apple_ipad_mini_wi_fi-5070",
    name: "iPad mini Wi-Fi",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-final.jpg",
    description:
      "Apple iPad mini Wi-Fi tablet. Announced Oct 2012. Features 7.9″  display, Apple A5 chipset, 5 MP primary camera, 1.2 MP front camera, 64 GB storage, 512 MB RAM, Oleophobic coating.",
  },
  {
    id: "apple_ipad_mini_wi_fi_+_cellular-5061",
    name: "iPad mini Wi-Fi + Cellular",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-final.jpg",
    description:
      "Apple iPad mini Wi-Fi + Cellular tablet. Announced Oct 2012. Features 7.9″  display, Apple A5 chipset, 5 MP primary camera, 1.2 MP front camera, 64 GB storage, 512 MB RAM, Oleophobic coating.",
  },
  {
    id: "apple_ipad_4_wi_fi-5072",
    name: "iPad 4 Wi-Fi",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-3-new.jpg",
    description:
      "Apple iPad 4 Wi-Fi tablet. Announced Oct 2012. Features 9.7″  display, Apple A6X chipset, 5 MP primary camera, 1.2 MP front camera, 11560 mAh battery, 128 GB storage, 1000 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_4_wi_fi_+_cellular-5071",
    name: "iPad 4 Wi-Fi + Cellular",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-3-new.jpg",
    description:
      "Apple iPad 4 Wi-Fi + Cellular tablet. Announced Oct 2012. Features 9.7″  display, Apple A6X chipset, 5 MP primary camera, 1.2 MP front camera, 11560 mAh battery, 128 GB storage, 1000 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_5-4910",
    name: "iPhone 5",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5-ofic.jpg",
    description:
      "Apple iPhone 5 smartphone. Announced Sep 2012. Features 4.0″  display, Apple A6 chipset, 8 MP primary camera, 1.2 MP front camera, 1440 mAh battery, 64 GB storage, 1000 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_ipad_3_wi_fi_+_cellular-4620",
    name: "iPad 3 Wi-Fi + Cellular",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-3-new.jpg",
    description:
      "Apple iPad 3 Wi-Fi + Cellular tablet. Announced Mar 2012. Features 9.7″  display, Apple A5X chipset, 5 MP primary camera, 11560 mAh battery, 64 GB storage, 1000 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_3_wi_fi-4621",
    name: "iPad 3 Wi-Fi",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-3-new.jpg",
    description:
      "Apple iPad 3 Wi-Fi tablet. Announced Mar 2012. Features 9.7″  display, Apple A5X chipset, 5 MP primary camera, 11560 mAh battery, 64 GB storage, 1000 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_4s-4212",
    name: "iPhone 4s",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4s-new.jpg",
    description:
      "Apple iPhone 4s smartphone. Announced Oct 2011. Features 3.5″  display, Apple A5 chipset, 8 MP primary camera, 1432 mAh battery, 64 GB storage, 512 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_ipad_2_wi_fi_+_3g-3848",
    name: "iPad 2 Wi-Fi + 3G",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad2-new.jpg",
    description:
      "Apple iPad 2 Wi-Fi + 3G tablet. Announced Mar 2011. Features 9.7″  display, Apple A5 chipset, 0.7 MP primary camera, 6930 mAh battery, 64 GB storage, 512 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_2_wi_fi-3847",
    name: "iPad 2 Wi-Fi",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad2-new.jpg",
    description:
      "Apple iPad 2 Wi-Fi tablet. Announced Mar 2011. Features 9.7″  display, Apple A5 chipset, 0.7 MP primary camera, 6930 mAh battery, 64 GB storage, 512 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_2_cdma-3849",
    name: "iPad 2 CDMA",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad2-new.jpg",
    description:
      "Apple iPad 2 CDMA tablet. Announced Mar 2011. Features 9.7″  display, Apple A5 chipset, 0.7 MP primary camera, 6930 mAh battery, 64 GB storage, 512 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_4-3275",
    name: "iPhone 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4-ofic-final.jpg",
    description:
      "Apple iPhone 4 smartphone. Announced Jun 2010. Features 3.5″  display, Apple A4 chipset, 5 MP primary camera, 1420 mAh battery, 32 GB storage, 512 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_iphone_4_cdma-3716",
    name: "iPhone 4 CDMA",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone4-cdma.jpg",
    description:
      "Apple iPhone 4 CDMA smartphone. Announced Jan 2011. Features 3.5″  display, Apple A4 chipset, 5 MP primary camera, 1420 mAh battery, 32 GB storage, 512 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_ipad_wi_fi_+_3g-3827",
    name: "iPad Wi-Fi + 3G",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-original.jpg",
    description:
      "Apple iPad Wi-Fi + 3G tablet. Announced Jan 2010. Features 9.7″  display, Apple A4 chipset, 64 GB storage, 256 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_wi_fi-3828",
    name: "iPad Wi-Fi",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-original.jpg",
    description:
      "Apple iPad Wi-Fi tablet. Announced Jan 2010. Features 9.7″  display, Apple A4 chipset, 64 GB storage, 256 MB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_3gs-2826",
    name: "iPhone 3GS",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-3gs-ofic.jpg",
    description:
      "Apple iPhone 3GS smartphone. Announced Jun 2009. Features 3.5″  display, 3.15 MP primary camera, 1400 mAh battery, 32 GB storage, 256 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_iphone_3g-2424",
    name: "iPhone 3G",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone3g.jpg",
    description:
      "Apple iPhone 3G smartphone. Announced Jun 2008. Features 3.5″  display, 2 MP primary camera, 1220 mAh battery, 16 GB storage, 128 MB RAM, Corning Gorilla Glass.",
  },
  {
    id: "apple_iphone-1827",
    name: "iPhone",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone.gif",
    description:
      "Apple iPhone smartphone. Announced Jan 2007. Features 3.5″  display, 2 MP primary camera, 1400 mAh battery, 16 GB storage, Corning Gorilla Glass.",
  },
];

export default appleDevices;
