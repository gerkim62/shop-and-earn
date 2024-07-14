import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

const IMAGE_URL_PREFIX = "https://fdn2.gsmarena.com/vv/pics";

async function getImageUrls({ phoneId }: { phoneId: string }) {
  const validUrls = [];
  const normalizedId = phoneId.split("-")[0];
  const phoneBrand = phoneId.split("_")[0];
  const imageUrlTemplate =
    `${IMAGE_URL_PREFIX}/${phoneBrand}/${normalizedId}-{{INDEX}}.jpg`
      .replaceAll("_", "-")
      // replace any - more than one in a row with one
      .replace(/-+/g, "-");

  for (let i = 0; ; i++) {
    const index = i === 0 ? "" : i.toString();
    const imageUrl = imageUrlTemplate.replace("{{INDEX}}", index);
    console.log(imageUrl);
    const isValid = await checkIsImageUrlValid(imageUrl);

    // sometimes the image index becomes valid only after a few invalid ones,
    if ((validUrls.length > 0 && !isValid && i > 0) || (i > 5 && !isValid)) {
      console.log(
        `This phone has ${validUrls.length} valid images. Checking complete...`
      );
      break;
    }

    if (isValid) validUrls.push(imageUrl);
  }

  return validUrls;
}

async function checkIsImageUrlValid(url: string) {
  console.log("Checking", url);

  const response = await fetch(url, {
    method: "HEAD",
  });

  return response.status === 200;
}

function getIdLikeString({ imageUrl }: { imageUrl: string }) {
  // const imageUrl = "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40i.jpg"

  const parts = imageUrl.split("/");
  const lastPart = parts.pop();
  const withoutExtension = lastPart?.split(".")[0] as string;
  const withoutHyphen = withoutExtension?.replaceAll("-", "_");
  return withoutHyphen;
}

function getQualityImageUrls({ imageUrl }: { imageUrl: string }) {
  const id = getIdLikeString({ imageUrl });

  const images = getImageUrls({
    phoneId: id,
  });

  return images;
}

async function evaluateQualityImages(product: Product) {
  if (product.isQualityImagesAdded)
    console.log("Quality images exist for this product so not readding them");
  else {
    console.log("Quality images do not exist for this product so adding them");
    const images = await getQualityImageUrls({
      imageUrl: product.images[0] as string,
    });

    await prisma.product.update({
      where: { id: product.id },
      data: {
        qualityImages: images,
        isQualityImagesAdded: true,
      },
    });

    console.log("Quality images added successfully");
  }
}

export default evaluateQualityImages;
