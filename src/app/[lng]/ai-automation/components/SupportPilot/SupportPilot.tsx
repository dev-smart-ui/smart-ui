'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './supportPilot.module.scss';

type Role = 'bot' | 'user';

interface Message {
  role: Role;
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { role: 'bot', text: 'Hi! I\'m SupportPilot — your AI-powered assistant. How can I help you today?' },
];

const QUICK_REPLIES = [
  'What can you automate?',
  'How long does it take?',
  'How much does it cost?',
];

const BOT_REPLIES: Record<string, string> = {
  'What can you automate?':
    'We automate lead qualification, document processing, email outreach, CRM updates, internal knowledge bases, and more. If it\'s repetitive, we can likely automate it.',
  'How long does it take?':
    'Most pilots are delivered in 2–4 weeks. Full rollouts typically take 4–8 weeks depending on complexity.',
  'How much does it cost?':
    'Pilots start from €2,500. Full projects are scoped after a free discovery call. Reach out and we\'ll put together a proposal.',
};

export const SupportPilot: FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [usedReplies, setUsedReplies] = useState<string[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleQuickReply = (reply: string) => {
    if (isTyping) return;

    setMessages((prev) => [...prev, { role: 'user', text: reply }]);
    setUsedReplies((prev) => [...prev, reply]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: BOT_REPLIES[reply] ?? 'Great question! Reach out and we\'ll discuss your specific case.' },
      ]);
    }, 1400);
  };

  const availableReplies = QUICK_REPLIES.filter((r) => !usedReplies.includes(r));

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.info}>
            <span className={styles.sectionName}>Live Demo</span>
            <h2 className={styles.title}>See AI in Action</h2>
            <p className={styles.description}>
              SupportPilot is a custom AI copilot we build for client support teams.
              It answers questions, qualifies leads, and escalates complex cases —
              24/7, without a human in the loop.
            </p>
            <ul className={styles.features}>
              <li>Trained on your docs & FAQs</li>
              <li>Hands off to human when needed</li>
              <li>Integrates with your helpdesk</li>
            </ul>
          </div>

          <div className={styles.widget}>
            <div className={styles.widgetHeader}>
              <div className={styles.avatar}>SP</div>
              <div>
                <p className={styles.widgetName}>SupportPilot</p>
                <p className={styles.widgetStatus}>
                  <span className={styles.statusDot} />
                  Online
                </p>
              </div>
            </div>

            <ul className={styles.messages} ref={listRef}>
              {messages.map((msg, i) => (
                <li
                  key={i}
                  className={msg.role === 'bot' ? styles.msgBot : styles.msgUser}
                >
                  {msg.text}
                </li>
              ))}
              {isTyping && (
                <li className={styles.msgBot}>
                  <span className={styles.typing}>
                    <span />
                    <span />
                    <span />
                  </span>
                </li>
              )}
            </ul>

            {availableReplies.length > 0 && !isTyping && (
              <div className={styles.quickReplies}>
                {availableReplies.map((reply) => (
                  <button
                    key={reply}
                    className={styles.quickReplyBtn}
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {availableReplies.length === 0 && !isTyping && (
              <div className={styles.cta}>
                <a href="#contactForm" className={styles.ctaLink}>
                  Talk to our team →
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
