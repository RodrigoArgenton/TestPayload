import { fetchPayloadContent } from "./lib/payload";


export default async function Page() {
  const itens = await fetchPayloadContent('menu', {
    limit: 1,
  })
  const item = itens[0]

  return (
    <>
      <nav>
        {item.links.map((link: any) => (
          <button key={link.id}>{link.name}</button>
        ))}
      </nav>
    </>
  );
}
