import { CollectionConfig } from 'payload';

const DynamicPages: CollectionConfig = {
  slug: 'dynamic-pages',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Página Dinâmica',
    plural: 'Páginas Dinâmicas',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
      admin: {
        description: 'Parte da URL para esta página (ex: "sobre-nos")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título da Página',
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        { label: 'Página Institucional', value: 'institutional' },
        { label: 'Página de Produto', value: 'product' },
        { label: 'Página de Contato', value: 'contact' },
      ],
      label: 'Tipo de Página',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo Principal',
      admin: {
        condition: (data) => data.pageType !== 'contact',
      },  
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem de Fundo',
    },
    {
      name: 'contactForm',
      type: 'group',
      label: 'Formulário de Contato',
      fields: [
        {
          name: 'fields',
          type: 'array',
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              label: 'Nome do Campo',
            },
            {
              name: 'fieldType',
              type: 'select',
              options: [
                { label: 'Texto', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Telefone', value: 'tel' },
              ],
              label: 'Tipo de Campo',
            },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Obrigatório?',
              defaultValue: false,
            },
          ],
          admin: {
            condition: (data) => data.pageType === 'contact',
          },
        },
      ],
      admin: {
        condition: (data) => data.pageType === 'contact',
      },
    },
  ],
};

export default DynamicPages;