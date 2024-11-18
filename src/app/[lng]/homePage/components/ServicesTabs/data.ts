import { StaticImageData } from 'next/image';

import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';

export type TServiceTab = {
  title: string;
  list: string[] | readonly string[];
  image: StaticImageData;
};

export const TABS = [
  { label: 'Software Development', value: 'softwareDevelopment' },
  { label: 'UI/UX Design', value: 'uiUxDesign' },
  { label: 'Web Development', value: 'webDevelopment' },
  { label: 'Mobile App Development', value: 'mobileAppDevelopment' },
  { label: 'Cloud Integration', value: 'cloudIntegration' },
  { label: 'Data Analytics', value: 'dataAnalytics' },
];

export const SERVICES_TABS = {
  softwareDevelopment: {
    title: 'Tailored Solutions for Your Unique Needs',
    list: [
      'Bespoke Applications',
      'Agile Development Process',
      'Seamless Integration',
      'User-Centric Design',
    ],
    image: image1,
  },
  uiUxDesign: {
    title: 'Crafting Engaging and Intuitive Experiences',
    list: [
      'User-Centered Approach:',
      'Seamless Navigation',
      'Responsive Design',
      'Data-Driven Decisions',
    ],
    image: image2,
  },
  webDevelopment: {
    title: 'Building High-Performance Websites for Your Business',
    list: [
      'Custom Solutions',
      'Optimized Performance',
      'Responsive Design',
      'Secure and Scalable',
    ],
    image: image3,
  },
  mobileAppDevelopment: {
    title: 'Creating Seamless and Engaging Mobile Experiences',
    list: [
      'Custom-Built Apps',
      'Cross-Platform Compatibility',
      'User-Centric Interface',
      'Scalable and Secure',
    ],
    image: image4,
  },
  cloudIntegration: {
    title: 'Connecting Your Systems for Seamless Operations',
    list: [
      'Unified Data Access',
      'Streamlined Processes',
      'Real-Time Updates',
      'Enhanced Security Compliance',
    ],
    image: image5,
  },
  dataAnalytics: {
    title: 'Transforming Data into Actionable Insights',
    list: [
      'Informed Decision-Making',
      'Predictive Analysis',
      'Custom Dashboards',
      'Real-Time Monitoring',
    ],
    image: image6,
  },
} as const;
