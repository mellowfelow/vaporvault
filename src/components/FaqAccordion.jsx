'use client';
import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
            <button
              type="button" className="faq-question" aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.q}
              <span className="faq-icon" aria-hidden="true">+</span>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
