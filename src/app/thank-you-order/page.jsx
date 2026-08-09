import ThankYouOrderClient from '@/components/ThankYouOrderClient';

export const metadata = {
  title: 'Order Placed',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you-order/' },
};

export default function ThankYouOrderPage() {
  return <ThankYouOrderClient />;
}
