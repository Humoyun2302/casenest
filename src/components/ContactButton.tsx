import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

export type ContactButtonProps = {
  href: string;
  label: string;
  subtitle: string;
  icon: ReactNode;
  external?: boolean;
  ariaLabel: string;
};

export function ContactButton({
  href,
  label,
  subtitle,
  icon,
  external = false,
  ariaLabel,
}: ContactButtonProps) {
  return (
    <a
      className="contact-btn"
      href={href}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="contact-btn__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-btn__text">
        <span className="contact-btn__label">{label}</span>
        <span className="contact-btn__subtitle">{subtitle}</span>
      </span>
      <ChevronRight className="contact-btn__arrow" aria-hidden="true" strokeWidth={1.6} />
      <span className="contact-btn__sheen" aria-hidden="true" />
    </a>
  );
}
