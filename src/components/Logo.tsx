import logoSrc from '../assets/logo.png';

export function Logo() {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={logoSrc}
        alt="CASENEST — Phone Accessories"
        width={220}
        height={220}
        decoding="async"
      />
      <span className="logo__shine" aria-hidden="true" />
    </div>
  );
}
