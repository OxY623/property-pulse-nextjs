const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
export async function fetchProperties() {
  try {
    if (!apiDomain) return [];
    const res: Response = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
//fetch single property
export async function fetchProperty(id: string) {
  try {
    if (!apiDomain) return null;
    const res: Response = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
