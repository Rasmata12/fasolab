export function BurkinaFasoFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Drapeau du Burkina Faso" role="img">
      <rect width="900" height="300" fill="#EF2B2D" />
      <rect width="900" height="300" y="300" fill="#009E49" />
      <polygon
        fill="#FCD116"
        points="450.0,195.0 462.9,232.2 502.3,233.0 470.9,256.8 482.3,294.5 450.0,272.0 417.7,294.5 429.1,256.8 397.7,233.0 437.1,232.2"
      />
    </svg>
  );
}
