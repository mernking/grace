import { Suspense } from 'react';
import ContactPageJsx from './ContactPage';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <ContactPageJsx />
    </Suspense>
  );
}