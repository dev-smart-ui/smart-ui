'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@components/Button';
import { Icons } from '@components/CustomIcons';
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

export const Form: FC = () => {
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
        placeholder="First Name"
        register={register('firstName', {
          required: 'First name is required',
        })}
        error={errors.firstName?.message}
      />
      <InputField
        id="lastName"
        className={styles.inputName}
        placeholder="Last Name"
        register={register('lastName')}
      />
      <InputField
        id="email"
        className={styles.inputEmail}
        placeholder="Email"
        register={register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address',
          },
        })}
        error={errors.email?.message}
      />
      <InputField
        id="phone"
        className={styles.inputPhone}
        placeholder="Phone Number"
        register={register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^[+]?[0-9]{10,15}$/,
            message: 'Invalid phone number',
          },
        })}
        error={errors.phone?.message}
      />
      <TextareaField
        id="message"
        className={styles.textArea}
        placeholder="Message"
        register={register('message')}
      />
      <Button
        className={styles.submitButton}
        text="Send Message"
        icon={<Icons.RocketSmall />}
      />
    </form>
  );
};
