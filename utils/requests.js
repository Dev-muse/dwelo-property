const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const fetchProperties = async () => {
  try {
    // HANDLE CASE WHEN DOMAIN IS NOT AVAILABLE
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("could not fetch data");
    }
    return data;
  } catch (error) {
    console.error("error occured", error);
  }
};

export const fetchProperty = async (id) => {
  try {
    // HANDLE CASE WHEN DOMAIN IS NOT AVAILABLE
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("could not fetch data");
    }
    return data;
  } catch (error) {
    console.error("error occured", error);
  }
};
