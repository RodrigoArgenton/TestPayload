// apps/backend/src/collections/Menu.ts
import { CollectionConfig } from 'payload';

export const MenuItens: CollectionConfig = {
  slug: 'menu',
  labels: {
    singular: 'Grupo de Menu',
    plural: 'Grupos de Menu',
  },
  admin: {
    useAsTitle: 'groupName',
    defaultColumns: ['groupName', 'updatedAt'],
    group: 'Navegação',
  },
  fields: [
    {
      name: 'groupName',
      type: 'text',
      required: true,
      label: 'Nome do Grupo',
      maxLength: 30,
      admin: {
        placeholder: 'Ex: Menu Principal, Rodapé, Redes Sociais',
      },
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links do Menu',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nome da opção',
          maxLength: 20,
          admin: {
            placeholder: 'Nome da opção. Ex: "Home", "Sobre nós" e "Contato"'
          }
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
          validate: (val: any) => {
            if (!val.startsWith('/') && !val.startsWith('http')) {
              return 'A URL deve começar com "/" (interno) ou "http" (externo)';
            }
            return true;
          },
          admin: {
            placeholder: 'Ex: "/home" ou "http://seusite.com.br"'
          }
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Abrir em nova aba?',
          defaultValue: false,
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  timestamps: true,
};
