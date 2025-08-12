import { notFound } from 'next/navigation';
import { fetchPayloadContent } from '@/app/lib/payload';

interface DynamicPageProps {
  params: { slug: string };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const pages = await fetchPayloadContent('dynamic-pages', {
    where: { slug: { equals: params.slug } },
    limit: 1,
  });

  const page = pages[0];
  
  if (!page) return notFound();

  // Transforma o richText em JSON
  const contentJson = page.content ? JSON.stringify(page.content) : null;

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: page.backgroundImage 
          ? `url(${page.backgroundImage.url})`
          : 'none',
      }}
    >
      <div className="container mx-auto px-4 py-16 backdrop-blur-sm bg-white/70">
        <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
        
        {page.pageType === 'contact' ? (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Entre em Contato</h2>
            <form className="space-y-4">
              {page.contactForm?.fields?.map((field: any, index: number) => (
                <div key={index}>
                  <label className="block mb-1">
                    {field.fieldName}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.fieldType}
                    required={field.required}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        ) : (
          <div className="prose max-w-none">
            {contentJson ? (
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {contentJson}
              </pre>
            ) : (
              <p>Nenhum conteúdo disponível</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}