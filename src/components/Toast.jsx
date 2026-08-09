'use client';
import { useEffect, useRef, useState } from 'react';
import { subscribeToast } from '@/lib/toast';

export default function Toast() {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  useEffect(() => subscribeToast((t) => {
    setToast(t);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3400);
  }), []);

  return (
    <div className={`toast ${toast ? 'show' : ''} ${toast?.type || ''}`} role="alert" aria-live="assertive">
      {toast?.message || ''}
    </div>
  );
}
