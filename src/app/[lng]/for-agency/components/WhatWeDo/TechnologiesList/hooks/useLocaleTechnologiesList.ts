export const useLocaleTechnologiesList = () => {
  const technologies = [
    {
      icon: '/assets/img/technologies/frontendImg.png',
      title: 'Frontend Development',
      list: [
        'React Development',
        'Next.js Development',
        'Gatsby Development',
        'Vue.js Development',
        'Angular Development',
        'Custom JavaScript Development',
        'HTML/CSS Prototyping',
        'Progressive Web App (PWA) Development',
      ],
    },
    {
      icon: '/assets/img/technologies/backendImg.png',
      title: 'Backend Development',
      list: [
        'Django REST Framework',
        'Express Development',
        'Node.js Development',
        'Laravel Development',
        'Spring Boot Development',
        'Ruby on Rails Development',
        'Database Design and Optimization',
        'Serverless Architecture Setup',
      ],
    },
    {
      icon: '/assets/img/technologies/cmsImg.png',
      title: 'CMS',
      list: [
        'WordPress Development',
        'Strapi Development',
        'Netlify Development',
        'HubSpot CMS Development',
        'Contentful Setup and Development',
        'Drupal Development',
        'Ghost CMS Development',
        'Squarespace Development',
      ],
    },
    {
      icon: '/assets/img/technologies/designImg.png',
      title: 'UI/UX Design',
      list: [
        'Prototyping and Wireframing',
        'UI/UX Design Services',
        'Other Custom Design Solutions',
        'Design System Development',
        'Interactive Prototyping (e.g., InVision)',
        'User Journey Mapping',
        'Accessibility Compliance Design',
        'Mobile-First Design',
      ],
    },
    {
      icon: '/assets/img/technologies/customImg.png',
      title: 'Custom Services',
      list: [
        'Email Template Coding',
        'Website Maintenance',
        'Website Redesign',
        'Custom Plugin Development',
        'SEO Optimization Services',
        'Custom Web Animations',
        'CRM Integration',
        '3rd-Party API Integration',
      ],
    },
    {
      icon: '/assets/img/technologies/qaImg.png',
      title: 'QA',
      list: [
        'Manual and Automated Testing',
        'Security Testing',
        'Mobile App Testing',
        'Load and Performance Testing',
        'API Testing',
        'Regression Testing',
        'Cross-Browser Testing',
        'Usability Testing',
      ],
    },
    {
      icon: '/assets/img/technologies/web3Img.png',
      title: 'Web3 - Blockchain',
      list: [
        'Decentralized Application Development',
        'Blockchain Integration',
        'Tokenization',
        'Smart Contract Development',
        'NFT Marketplace Development',
        'Cryptocurrency Wallet Integration',
        'Web3 Payment Gateway Development',
        'DeFi Application Development',
      ],
    },
  ];

  return { technologies };
};
