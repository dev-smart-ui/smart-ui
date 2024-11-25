import { Form } from './Form';
import styles from './formWrapper.module.scss';

export const FormWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6 className={styles.title}>Let&apos;s Get Started Now!</h6>
        <p className={styles.subTitle}>
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
      </div>

      <Form />
    </div>
  );
};
