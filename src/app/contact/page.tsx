'use client';
import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { Section } from '@/components/atoms/section';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API;

  if (!accessKey) {
    console.error(
      'Web3Forms API Key is not defined. Please check your .env file.',
    );
  }

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey || '',
    settings: {
      from_name: 'School Diary 2080',
      subject: 'New Contact Message from School Diary Gallery',
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const onSubmitHandler: SubmitHandler<ContactFormInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <Section id="contact" className="max-w-[45rem] mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Contact Me
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Thank you for visiting my website! Please fill out the form below and
          I'll get back to you soon.
        </p>

        <div className="w-full p-8 rounded-lg shadow-lg dark:border-gray-800 border-gray-200 transition-all duration-300">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Full Name is required' })}
                  className={`py-3 px-4 block w-full rounded-md text-sm text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border ${
                    errors.name
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Full Name*"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className={`py-3 px-4 block w-full rounded-md text-sm text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Email*"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className={`py-3 px-4 block w-full rounded-md text-sm text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-700'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Your Message*"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex justify-center px-5 py-3 cursor-pointer transition-all bg-blue-500 text-white rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Send Message
              </button>
            </div>
          </form>

          {isSuccess && (
            <div className="mt-3 text-center">
              <p className="text-sm text-green-500">{result}</p>
            </div>
          )}
          {!isSuccess && result && (
            <div className="mt-3 text-center">
              <p className="text-sm text-red-500">{result}</p>
            </div>
          )}

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              I'll get back to you within 1-2 business days.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
