'use client';
let listeners = [];

export function showToast(message, type = '') {
  listeners.forEach((fn) => fn({ message, type }));
}

export function subscribeToast(fn) {
  listeners.push(fn);
  return () => { listeners = listeners.filter((l) => l !== fn); };
}
