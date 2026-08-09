'use client';
import { useEffect, useState } from 'react';
import { RULES } from '@/config/site';

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('vv_age') !== '1') setVisible(true);
  }, []);

  const enter = () => {
    sessionStorage.setItem('vv_age', '1');
    setFading(true);
    setTimeout(() => setVisible(false), 400);
  };
  const exit = () => { window.location.href = 'https://www.google.com'; };

  if (!visible) return null;

  return (
    <div className="age-gate" style={{ opacity: fading ? 0 : 1, transition: 'opacity .4s' }} role="dialog" aria-modal="true" aria-label="Age verification">
      <div className="age-gate-card">
        <div className="age-gate-icon" aria-hidden="true">🔐</div>
        <div className="age-gate-logo">VAPOR<em>VAULT</em></div>
        <p className="age-gate-kicker">{RULES.ageMinimum}+ Only — Age Verification Required</p>
        <p className="age-gate-sub">This website sells nicotine products for adult use only. You must be {RULES.ageMinimum} years of age or older to enter.</p>
        <div className="age-gate-btns">
          <button type="button" className="btn btn-primary btn-lg" onClick={enter}>I Am {RULES.ageMinimum}+ — Enter</button>
          <button type="button" className="btn btn-ghost" onClick={exit}>I Am Under {RULES.ageMinimum} — Exit</button>
        </div>
        <p className="age-gate-warn">WARNING: This product contains nicotine. Nicotine is an addictive chemical.</p>
      </div>
    </div>
  );
}
