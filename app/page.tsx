import { redirect } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;

// Reuse the English version content
export { default } from './en/page'; 