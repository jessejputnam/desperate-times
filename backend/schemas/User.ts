import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  password,
  timestamp,
  select
} from "@keystone-6/core/fields";

export const User = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),

    email: text({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),

    password: password({ validation: { isRequired: true } }),

    // we can use this field to see what Posts this User has authored
    //   more on that in the Post list below
    posts: relationship({ ref: "Post.author", many: true }),

    createdAt: timestamp({
      defaultValue: { kind: "now" }
    })
  }
});
