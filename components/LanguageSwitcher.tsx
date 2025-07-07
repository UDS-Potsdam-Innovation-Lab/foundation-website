'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: 'en' | 'de') => {
    localStorage.setItem('preferredLocale', locale);

    const segments = pathname.split('/');
    segments[1] = locale; // replace the current locale in the URL
    router.push(segments.join('/'));
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => switchLocale('en')} className="text-sm hover:underline">
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button onClick={() => switchLocale('de')} className="text-sm hover:underline">
        DE
      </button>
    </div>
  );
}
