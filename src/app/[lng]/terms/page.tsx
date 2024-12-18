import { TERMS_OF_USE_QUERY } from '@graphqlQueries/termsOfUse';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import Layout from '@components/Layout';
import { LegalDocument } from '@components/LegalDocument';

interface PrivacyPolicyProps {
  params: {
    lng: string;
  };
}
export default async function TermsOfUsePage({
  params: { lng },
}: PrivacyPolicyProps) {
  const { termsOfUsePage, header, footer } = await fetchGraphQL(
    TERMS_OF_USE_QUERY,
    { locale: lng },
  );

  const termsOfUsePageData = termsOfUsePage?.data?.attributes || {};
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <LegalDocument data={termsOfUsePageData} />
    </Layout>
  );
}
