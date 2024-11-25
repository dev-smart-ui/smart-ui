export const fetchGraphQL = async (query: string, variables: object = {}) => {
  const strapiApiUrl =
    process.env.STRAPI_API_URL ?? 'http://localhost:1337/graphql';

  try {
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
      /* eslint-disable no-console */
      console.error('Failed to fetch data:', res.status, res.statusText);
      return {};
    }

    const { data } = await res.json();
    return data || {};
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error during GraphQL request:', error);
    return {};
  }
};
