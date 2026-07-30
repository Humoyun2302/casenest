import { Logo } from './components/Logo';
import { ContactButton } from './components/ContactButton';
import {
  InstagramIcon,
  TelegramIcon,
  DirectIcon,
  PhoneIcon,
} from './components/icons';
import './App.css';

const links = [
  {
    href: 'https://instagram.com/casenestuz',
    label: 'INSTAGRAM',
    subtitle: '@casenestuz',
    icon: <InstagramIcon />,
    external: true,
    ariaLabel: 'Open CASENEST Instagram @casenestuz',
  },
  {
    href: 'https://t.me/casenestuz',
    label: 'TELEGRAM',
    subtitle: '@casenestuz',
    icon: <TelegramIcon />,
    external: true,
    ariaLabel: 'Open CASENEST Telegram @casenestuz',
  },
  {
    href: 'https://instagram.com/casenest_uz',
    label: 'DIRECT',
    subtitle: '@casenest_uz',
    icon: <DirectIcon />,
    external: true,
    ariaLabel: 'Open CASENEST Instagram Direct @casenest_uz',
  },
  {
    href: 'tel:+998985551505',
    label: 'CALL',
    subtitle: '+998 98 555 15 05',
    icon: <PhoneIcon />,
    external: false,
    ariaLabel: 'Call CASENEST at +998 98 555 15 05',
  },
] as const;

export default function App() {
  return (
    <main className="page">
      <div className="page__glow" aria-hidden="true" />
      <div className="glass-panel">
        <div className="glass-panel__border" aria-hidden="true" />
        <div className="glass-panel__reflection" aria-hidden="true" />
        <div className="glass-panel__flare" aria-hidden="true" />

        <header className="header">
          <h1 className="sr-only">CASENEST — Premium Phone Accessories</h1>
          <Logo />
        </header>

        <nav className="links" aria-label="Contact links">
          {links.map((link) => (
            <ContactButton key={link.label} {...link} />
          ))}
        </nav>
      </div>
    </main>
  );
}
