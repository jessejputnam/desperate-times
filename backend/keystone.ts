import "dotenv/config";
import { config } from "@keystone-6/core";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { Post } from "./schemas/Post";
import { Tag } from "./schemas/Tag";
import { ProductImage } from "./schemas/ProductImage";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import { insertSeedData } from "./seed-data";

const frontend_url: string =
  process.env.FRONTEND_URL || "http://localhost:7777";

export default withAuth(
  config({
    server: {
      cors: {
        origin: [frontend_url],
        credentials: true
      }
    },
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
      idField: { kind: "uuid" },
      async onConnect(keystone) {
        console.log("Conncted to database!");
        if (process.argv.includes("--seed-data"))
          await insertSeedData(keystone);
      }
    },
    lists: {
      User,
      Product,
      ProductImage,
      Post,
      Tag
    },
    // Show UI only for people who pass this test
    ui: {
      // TODO: Change this for roles
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      }
    },
    // TODO Add session values here
    session
  })
);
