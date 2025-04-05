import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'owner',
      type: 'relationship',
      relationTo: ['users', 'media']
    },
  ],
}
