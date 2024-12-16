'use client';

import { IImage } from '@app-types/interfaces';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/Button';
import { InputField } from '@components/Input';
import { TextareaField } from '@components/TextAreaField';

import styles from './form.module.scss';

interface FormValues {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormProps {
  button: {
    label: string;
    icon: IImage;
  };
}

export const Form: FC<FormProps> = ({ button }) => {
  const { t } = useTranslation('contactForm');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (formData: FormValues) => {
    /* eslint-disable no-console */
    console.log(formData);
  };

  return (
    <form
      action="#"
      className={styles.wrapper}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="firstName"
        className={styles.inputName}
        placeholder={t('contactForm.form.firstName.placeholder')}
        register={register('firstName', {
          required: t('contactForm.form.firstName.errorMessage'),
        })}
        error={errors.firstName?.message}
      />
      <InputField
        id="lastName"
        className={styles.inputName}
        placeholder={t('contactForm.form.lastName.placeholder')}
        register={register('lastName')}
      />
      <InputField
        id="email"
        className={styles.inputEmail}
        placeholder={t('contactForm.form.email.placeholder')}
        register={register('email', {
          required: t('contactForm.form.email.errorMessage'),
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: t('contactForm.form.email.patternMessage'),
          },
        })}
        error={errors.email?.message}
      />
      <InputField
        id="phone"
        className={styles.inputPhone}
        placeholder={t('contactForm.form.phone.placeholder')}
        register={register('phone', {
          required: t('contactForm.form.phone.errorMessage'),
          pattern: {
            value: /^[+]?[0-9]{10,15}$/,
            message: t('contactForm.form.phone.patternMessage'),
          },
        })}
        error={errors.phone?.message}
      />
      <TextareaField
        id="message"
        className={styles.textArea}
        placeholder={t('contactForm.form.textarea.placeholder')}
        register={register('message')}
      />
      <Button
        className={styles.submitButton}
        text={button?.label}
        icon={button?.icon?.data?.attributes?.url}
      />
    </form>
  );
};
