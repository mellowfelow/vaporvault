import { RULES } from '@/config/site';

const SLIDES = [
  `🔒 ${RULES.ageMinimum}+ Only`,
  `🚚 Free Shipping $${RULES.freeShipping}+`,
  `₿ ${RULES.cryptoDiscount * 100}% Crypto Discount`,
  '📋 PACT Act Compliant',
  '✅ Authentic Products Only',
];

export default function AnnouncementBar() {
  const loop = [...SLIDES, ...SLIDES];
  return (
    <div className="ann-bar">
      <div className="ann-bar-inner" aria-hidden="true">
        {loop.map((s, i) => (
          <span key={i}>{s}{i < loop.length - 1 && <span className="ann-sep">|</span>}</span>
        ))}
      </div>
    </div>
  );
}
