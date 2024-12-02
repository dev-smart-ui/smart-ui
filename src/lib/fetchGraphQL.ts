export const fetchGraphQL = async (
  query: string,
  variables: object,
  callbacks?: {
    onStart?: () => void;
    onEnd?: () => void;
  },
) => {
  const strapiApiUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ??
    'https://strapi-smart-ui.smart-ui.pro/graphql';

  try {
    callbacks?.onStart?.();
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
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const { data } = await res.json();
    return data || {};
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error during GraphQL request:', error);
    return {};
  } finally {
    callbacks?.onEnd?.();
  }
};
