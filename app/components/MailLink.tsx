'use client';

import { MouseEvent, ReactNode } from 'react';

type Props = {
  email: string;
  children: ReactNode;
  className?: string;
  subject?: string;
};

/** Opens mail app on mobile; Gmail compose on desktop (works without Outlook). */
export default function MailLink({ email, children, className, subject = 'Enquiry - Pnj Projects' }: Props) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile) {
      window.location.href = mailto;
      return;
    }
    window.open(gmail, '_blank', 'noopener,noreferrer');
  };

  return (
    <a className={className} href={mailto} onClick={onClick}>
      {children}
    </a>
  );
}
