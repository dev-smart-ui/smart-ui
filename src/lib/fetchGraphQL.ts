export const fetchGraphQL = async (query: string, variables: object = {}) => {
  const strapiApiUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ??
    'https://strapi-smart-ui.smart-ui.pro/graphql';

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
