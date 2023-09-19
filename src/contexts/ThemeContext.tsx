"use client";

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { ProvidersProps } from '@/props';

export function ThemeProviders({ children }: ProvidersProps) {
  return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
}