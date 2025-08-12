import type { CollectionConfig } from "payload";

export const templateHome: CollectionConfig = {
  slug: 'Template-home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Template home',
      type: 'text',
      required: true,
    }
  ],
}