import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './aiServices.module.scss';

const services = [
  {
    icon: '🤖',
    title: 'Custom AI Agents',
    description:
      'Goal-oriented agents that browse, fetch data, make decisions, and execute multi-step tasks autonomously.',
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    description:
      'End-to-end process automation using n8n, Zapier, and custom pipelines — no more copy-paste between tools.',
  },
  {
    icon: '📄',
    title: 'Document Processing & RAG',
    description:
      'Extract, classify, and query documents with LLMs. Build internal knowledge bases your team can chat with.',
  },
  {
    icon: '🔌',
    title: 'AI Integration',
    description:
      'Embed AI capabilities into your existing product — APIs, webhooks, CRM plugins, and more.',
  },
  {
    icon: '🎯',
    title: 'Lead Qualification Agents',
    description:
      'Automatically score inbound leads, send personalised follow-ups, and route hot prospects to your sales team.',
  },
  {
    icon: '💬',
    title: 'AI Copilots',
    description:
      'Chat assistants trained on your docs, processes, and product — supporting both customers and internal teams.',
  },
  {
    icon: '🔍',
    title: 'Knowledge Base & Search',
    description:
      'Semantic search over your company data. Ask in plain English; get instant, cited answers.',
  },
  {
    icon: '🔬',
    title: 'AI Process Audit',
    description:
      'We map your workflows, find automation opportunities, and deliver a prioritised roadmap within one week.',
  },
];

export const AiServices: FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.sectionName}>What We Build</span>
          <h2 className={styles.title}>Core AI Automation Services</h2>
          <p className={styles.subtitle}>
            From single-task agents to fully automated departments — we scope, build, and ship.
          </p>
        </div>
        <ul className={styles.grid}>
          {services.map(({ icon, title, description }) => (
            <li key={title} className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
