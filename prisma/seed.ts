import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import propertiesData from "../properties.json";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log(`Starting seed with ${propertiesData.length} properties...`);
  const clearTables = (async () => {
    //await prisma._propertyToUser.deleteMany(); // если есть отдельная таблица для many-to-many
    await prisma.user.deleteMany();
    await prisma.property.deleteMany();
    return true;
  })();
  // Create test user
  const newUser = await prisma.user.create({
    data: {
      email: "test@example.com",
      username: "artem",
      image: "https://example.com/avatar.png",
    },
  });

  for (const prop of propertiesData) {
    await prisma.property.create({
      data: {
        ownerId: newUser.id,
        name: prop.name,
        type: prop.type,
        description: prop.description,
        street: prop.location.street,
        city: prop.location.city,
        state: prop.location.state,
        zipcode: prop.location.zipcode,
        beds: prop.beds,
        baths: prop.baths,
        squareFeet: prop.square_feet,
        amenities: prop.amenities,
        images: prop.images,
        nightlyRate: prop.rates.nightly ?? null,
        weeklyRate: prop.rates.weekly ?? null,
        monthlyRate: prop.rates.monthly ?? null,
        // sellerName: prop.seller_info.name,
        // sellerEmail: prop.seller_info.email,
        // sellerPhone: prop.seller_info.phone,
        sellerName: "Artem",
        sellerEmail: "artem@example.com",
        sellerPhone: "+1234567890",
        isFeatured: prop.is_featured,
        createdAt: new Date(prop.createdAt),
        updatedAt: new Date(prop.updatedAt),
        pulse: {
          create: {
            views: 10,
            likes: 2,
            bookings: 1,
          },
        },
      },
    });
  }
  console.log("User:", newUser);

  console.log("✅ Seed finished successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
