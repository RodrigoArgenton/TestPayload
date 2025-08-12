const PAYLOAD_URL = process.env.PAYLOAD_SERVER_URL || 'http://localhost:3000';

export async function fetchPayloadContent(
  collection: string,
  queryParams: Record<string, any> = {}
) {
  try {
    const url = new URL(`${PAYLOAD_URL}/api/${collection}`);
    
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, JSON.stringify(value));
    });

    const res = await fetch(url.toString(), {
      next: { revalidate: 10 } 
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    return [];
  }
}