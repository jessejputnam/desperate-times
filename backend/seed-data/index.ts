import { products } from "./data";
import { KeystoneContext } from "@keystone-6/core/types";

export async function insertSeedData({ prisma }: KeystoneContext) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);

  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);

    const { id } = await prisma.ProductImage.create({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description
      }
    });

    //@ts-ignore
    delete product.photo;
    //@ts-ignore
    await prisma.product.create({ data: product });
  }

  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
