import { CollectionConfig } from "payload";

export const Hero: CollectionConfig = {
  slug: 'Hero',
  access: {
    read: () =>true,
  },
  fields: [
    {
      name: 'Menu',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        }
      ]
    }
  ]
}