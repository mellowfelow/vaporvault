import { SITE } from '@/config/site';
import { CartProvider } from '@/lib/CartContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AgeGate from '@/components/AgeGate';
import AnnouncementBar from '@/components/AnnouncementBar';
import Toast from '@/components/Toast';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: 'Shop authentic disposable vapes online. Top brands, 21+ age verified, PACT Act compliant.',
  openGraph: { type: 'website', siteName: SITE.name },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/images/favicon.svg' },
};

export const viewport = { themeColor: SITE.themeColor };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `https://${SITE.domain}/#org`,
                  name: SITE.name,
                  url: `https://${SITE.domain}`,
                  description: SITE.entityStatement,
                  email: SITE.email,
                },
                {
                  '@type': 'WebSite',
                  '@id': `https://${SITE.domain}/#website`,
                  url: `https://${SITE.domain}`,
                  name: SITE.name,
                  publisher: { '@id': `https://${SITE.domain}/#org` },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: { '@type': 'EntryPoint', urlTemplate: `https://${SITE.domain}/search/?q={search_term_string}` },
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <CartProvider>
          <AgeGate />
          <AnnouncementBar />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
