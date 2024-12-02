import { PageEnum } from '@app-types/enums';

import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';

import { ServicesTabs } from '../homePage/components/ServicesTabs';
import heroImg from './img/heroImg.png';

export default async function AboutUsPage() {
  return (
    <>
      <Hero page={PageEnum.AboutUs} colorGradiant="Third" image={heroImg} />
      <ServicesTabs />
      <Clients />
      <ContactForm />
    </>
  );
}
