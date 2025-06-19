export const dynamic = 'force-static';
export const dynamicParams = false;

export default function RootPage() {
  // This is a static page that will be pre-rendered at build time
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
      </head>
      <body>
        <p>Redirecting to English version...</p>
        <script dangerouslySetInnerHTML={{ 
          __html: `
            // Get user's browser language
            const userLang = navigator.language || navigator.userLanguage;
            // Redirect to German if browser language starts with 'de', otherwise English
            window.location.href = userLang.startsWith('de') ? '/de' : '/en';
          `
        }} />
      </body>
    </html>
  );
} 