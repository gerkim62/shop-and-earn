// const IMAGE_URL_PREFIX = "https://fdn2.gsmarena.com/vv/pics";

// async function getImageUrls({ phoneId }: { phoneId: string }) {
//   const validUrls = [];
//   const normalizedId = phoneId.split("-")[0];
//   const phoneBrand = phoneId.split("_")[0];
//   const imageUrlTemplate =
//     `${IMAGE_URL_PREFIX}/${phoneBrand}/${normalizedId}-{{INDEX}}.jpg`.replaceAll(
//       "_",
//       "-"
//     );

//   for (let i = 1; ; i++) {
//     const imageUrl = imageUrlTemplate.replace("{{INDEX}}", i.toString());
//     console.log(imageUrl);
//     const isValid = await checkIsImageUrlValid(imageUrl);
//     if (!isValid) {
//       console.log(`This phone has ${i - 1} valid images. Breaking...`);
//       break;
//     }

//     validUrls.push(imageUrl);
//   }

//   return validUrls;
// }

// async function checkIsImageUrlValid(url: string) {
//   console.log("Checking", url);

//   const response = await fetch(url, {
//     method: "HEAD",
//   });

//   return response.status === 200;
// }

// // Example usage
// const urls = getImageUrls({ phoneId: "itel_a23s-12494" });
// urls.then(console.log);
