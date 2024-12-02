import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';

import { OurWorkWrapper } from './OurWorkWrapper';

export default async function OurWorkPage() {
  return (
    <>
      <OurWorkWrapper />
      <Clients />
      <ContactForm />
    </>
  );
}
