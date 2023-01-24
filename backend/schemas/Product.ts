import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, relationship, timestamp, select } from "@keystone-6/core/fields";

export const Product = list({
  // TODO
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: "textarea"
      }
    })
  }
});
