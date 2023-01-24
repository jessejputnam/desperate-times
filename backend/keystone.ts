import "dotenv/config";
// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./schema";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";

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
      idField: { kind: "uuid" }
    },
    lists,
    // Show UI only for people who pass this test
    ui: {
      // TODO: Change this for roles
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      }
    },
    // TODO Add session values here
    session
  })
);
