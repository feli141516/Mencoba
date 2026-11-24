import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";

export const A = "/assets";

export function Icon({
  name,
  alt = "",
  className = "",
}: {
  name: string;
  alt?: string;
  className?: string;
}) {
  return <img className={`icon ${className}`} src={`${A}/${name}`} alt={alt} />;
}

export function StatusBar() {
  return (
    <div className="status-bar" aria-label="Status perangkat">
      <span>9:41</span>
      <div>
        <Icon name="a0842.svg" alt="Sinyal seluler" />
        <Icon name="f07aa.svg" alt="Wi-Fi" />
        <Icon name="12cc2.svg" alt="Baterai" />
      </div>
    </div>
  );
}

export function AppPage({
  children,
  className = "",
  bottomNav,
}: {
  children: ReactNode;
  className?: string;
  bottomNav?: ReactNode;
}) {
  return (
    <main className={`app-page ${className}`}>
      <StatusBar />
      <div className="page-scroll">{children}</div>
      {bottomNav}
    </main>
  );
}

export function PageHeader({ title, back = true }: { title: string; back?: boolean }) {
  const navigate = useNavigate();
  return (
    <header className="page-header">
      {back ? (
        <button className="icon-button" onClick={() => navigate(-1)} aria-label="Kembali">
          <Icon name="38a33.svg" />
        </button>
      ) : (
        <span />
      )}
      <h1>{title}</h1>
    </header>
  );
}

export function PrimaryButton({
  children,
  to,
  onClick,
  secondary = false,
  type = "button",
}: {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  secondary?: boolean;
  type?: "button" | "submit";
}) {
  const className = secondary ? "primary-button secondary" : "primary-button";
  return to ? (
    <Link className={className} to={to}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

const customerNav = [
  ["Home", "/home", "4da19.svg"],
  ["Layanan", "/layanan/rumah", "47cd5.svg"],
  ["Pesanan", "/pesanan", "72b08.svg"],
  ["Profil", "/profil", "fda1d.svg"],
];
const cleanerNav = [
  ["Beranda", "/cleaner", "22060.svg"],
  ["Jadwal", "/cleaner/jadwal", "1b180.svg"],
  ["Pendapatan", "/cleaner/pendapatan", "43388.svg"],
  ["Profil", "/cleaner/profil", "e82e5.svg"],
];

export function BottomNav({ active, cleaner = false }: { active: string; cleaner?: boolean }) {
  return (
    <nav className="bottom-nav" aria-label="Navigasi utama">
      {(cleaner ? cleanerNav : customerNav).map(([label, to, icon]) => (
        <Link className={active === label ? "active" : ""} to={to} key={label}>
          <Icon name={icon} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Field({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="field-wrap">
      {label && <span>{label}</span>}
      <span className="field">
        {icon && <Icon name={icon} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </span>
    </label>
  );
}

export function Tag({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return <span className={blue ? "tag blue" : "tag"}>{children}</span>;
}
