export const fetchGraphQL = async (query: string, variables: object = {}) => {
  const strapiApiUrl =
    process.env.STRAPI_API_URL ?? 'http://localhost:1337/graphql';

  const res = await fetch(strapiApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();
  return data || {};
};
