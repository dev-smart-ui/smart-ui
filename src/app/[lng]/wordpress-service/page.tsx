import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';

import bottomBgImage from './img/bg.png';
import image from './img/wpImage.png';
import styles from './page.module.scss';

export default async function WordpressService() {
  const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
    locale: 'en',
    pagination: { limit: 5 },
  });

  const singleProjectsData = singleProjects?.data || [];

  return (
    <div className={styles.wrapper}>
      <Hero
        page="wordpressService"
        image={image}
        bottomBgImage={bottomBgImage}
      />
      <Clients />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </div>
  );
}
