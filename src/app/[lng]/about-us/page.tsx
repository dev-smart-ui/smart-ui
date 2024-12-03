import { PageEnum } from '@app-types/enums';

import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';

import { ServicesTabs } from '../homePage/components/ServicesTabs';
import { GoalsAndValues } from './GoalsAndValues';
import { DrivingSuccess } from './components';
import heroImg from './img/heroImg.png';

export default async function AboutUsPage() {
  return (
    <>
      <Hero page={PageEnum.AboutUs} colorGradiant="Third" image={heroImg} />
      <DrivingSuccess />
      <ServicesTabs />
      <GoalsAndValues />
      <ContactForm />
    </>
  );
}
