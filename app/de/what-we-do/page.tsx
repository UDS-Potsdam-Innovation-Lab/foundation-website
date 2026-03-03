'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WhatWeDoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/de/funding');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Weiterleitung zur Förderung...</p>
    </main>
  );
}
