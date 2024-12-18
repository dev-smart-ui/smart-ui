import { PRIVACY_POLICY_QUERY } from '@graphqlQueries/privacyPolicy';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import Layout from '@components/Layout';
import { LegalDocument } from '@components/LegalDocument';

interface PrivacyPolicyProps {
  params: {
    lng: string;
  };
}
export default async function PrivacyPolicyPage({
  params: { lng },
}: PrivacyPolicyProps) {
  const { privacyPolicyPage, header, footer } = await fetchGraphQL(
    PRIVACY_POLICY_QUERY,
    { locale: lng },
  );

  const privacyPolicyPageData = privacyPolicyPage?.data?.attributes || {};
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <LegalDocument data={privacyPolicyPageData} />
    </Layout>
  );
}
