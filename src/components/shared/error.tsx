'use client';

import toast, { Toaster } from 'react-hot-toast';
import { AxiosError } from 'axios';
function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message ?? error.message;
    const status = error.response?.status;
    if (status === 404) return 'Resource not found.';
    if (status && status >= 500) return 'Server error. Please try again later.';
    if (status && status >= 400) return typeof message === 'string' ? message : 'Request failed.';
    return message || 'Network error. Please check your connection.';
  }
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'Something went wrong. Please try again.';
}


export function showErrorToast(error: unknown, customMessage?: string): string {
  const message = customMessage ?? getErrorMessage(error);
  return toast.error(message, {
    duration: 3000,
    position: 'top-center',
    style: {
      background: '#fee2e2',
      color: '#991b1b',
      border: '1px solid #fecaca',
    },
  });
}



export default function ErrorToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        error: {
          style: {
            background: '#fee2e2',
            color: '#991b1b',
            border: '1px solid #fecaca',
          },
        },
      }}
    />
  );
}
