export async function getViagemImages(viagemId: string) {
    // 1. List all travel files from collections path
    let images = import.meta.glob<{ default: ImageMetadata }>(
      "/src/content/viagens/**/*.{jpeg,jpg}"
    );
  
    // 2. Filter images by viagemId
    images = Object.fromEntries(
      Object.entries(images).filter(([key]) => key.includes(viagemId))
    );
  
    // 3. Images are promises, so we need to resolve the glob promises
    const resolvedImages = await Promise.all(
      Object.values(images).map((image) => image().then((mod) => mod.default))
    );

      // 4. Shuffle images in random order
    resolvedImages.sort(() => Math.random() - 0.5);

    return resolvedImages;
  }
  