import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import {
  A,
  AppPage,
  BottomNav,
  Field,
  Icon,
  PageHeader,
  PrimaryButton,
  Tag,
} from "../components/ui";
import { days } from "./customer";

export function CleanerLoginPage() {
  const navigate = useNavigate();
  return (
    <AppPage className="cleaner-login-page">
      <div className="cleaner-login-brand">
        <Icon name="228ca.svg" />
        <h1>CleanMate</h1>
        <p>Kerja Rapi, Pelanggan Happy</p>
      </div>
      <img className="cleaner-login-photo" src={`${A}/f34e3.png`} alt="" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/cleaner");
        }}
      >
        <Field icon="3bfee.svg" placeholder="Email atau nomor telepon" />
        <Field icon="ef8da.svg" type="password" placeholder="Password" />
        <PrimaryButton type="submit">Masuk</PrimaryButton>
      </form>
      <p className="separator">atau lanjut dengan</p>
      <button className="social-button">
        <Icon name="8bc89.svg" />
        Google
      </button>
      <button className="social-button">
        <Icon name="d9f8a.svg" />
        Apple
      </button>
    </AppPage>
  );
}

function Nav({ active }: { active: string }) {
  return <BottomNav cleaner active={active} />;
}
function Job({ pet = false }: { pet?: boolean }) {
  return (
    <div className="cleaner-job">
      <img src={`${A}/${pet ? "b48a4.png" : "8a793.png"}`} alt="" />
      <div>
        <b>{pet ? "Pet Area Cleaning" : "Room Cleaning"}</b>
        <span>{pet ? "16.00 – 18.00" : "13.00 – 15.00"}</span>
        <span>{pet ? "Nadia" : "Dewi"}</span>
      </div>
      <Tag blue={!pet}>{pet ? "Menunggu" : "Akan Datang"}</Tag>
    </div>
  );
}

export function CleanerDashboardPage() {
  return (
    <AppPage bottomNav={<Nav active="Beranda" />} className="cleaner-page">
      <div className="cleaner-welcome">
        <img src={`${A}/01a2c.png`} alt="Sinta" />
        <div>
          Selamat Pagi,<h1>Sinta!</h1>
          <Tag>⚙ Online</Tag>
        </div>
        <span>♧</span>
      </div>
      <div className="stats">
        <div>
          <b>2</b>
          <span>
            Pesanan
            <br />
            Hari Ini
          </span>
        </div>
        <div>
          <b>1</b>
          <span>
            Selesai
            <br />
            Minggu Ini
          </span>
        </div>
        <div>
          <b>Rp 250.000</b>
          <span>
            Pendapatan
            <br />
            Minggu Ini
          </span>
        </div>
      </div>
      <h2>
        Pesanan Berikutnya <Link to="/cleaner/jadwal">Lihat Semua</Link>
      </h2>
      <Job />
      <PrimaryButton to="/cleaner/pesanan">Lihat Detail</PrimaryButton>
      <h2>
        Jadwal Hari Ini <Link to="/cleaner/jadwal">Lihat Semua</Link>
      </h2>
      <Job />
      <Job pet />
    </AppPage>
  );
}

function Info({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
export function CleanerOrderPage() {
  return (
    <AppPage className="cleaner-page cleaner-order-page">
      <PageHeader title="Detail Pesanan" />
      <div className="order-overview">
        <img src={`${A}/8a793.png`} alt="" />
        <div>
          <h2>Room Cleaning</h2>
          <span>▣ &nbsp;16 Oktober 2026</span>
          <span>◉ &nbsp;13.00 – 15.00</span>
        </div>
        <Tag blue>Akan Datang</Tag>
      </div>
      <hr />
      <h2>Informasi Pelanggan</h2>
      <div className="customer-row">
        <img src={`${A}/bc7a0.png`} alt="Dewi" />
        <b>Dewi</b>
        <button>☎</button>
        <button>◌</button>
      </div>
      <Info title="Alamat">Kos Soekarno Hatta No. 12, Malang</Info>
      <Info title="Detail Layanan">
        <b>Room Cleaning</b>
        <br />♙ Vacuum Bulu Hewan
        <br />♣ Pet Area Cleaning
      </Info>
      <Info title="Informasi Hewan Peliharaan">♛ &nbsp;2 kucing</Info>
      <Info title="Catatan dari Pelanggan">
        Fokus pada area kamar dan lantai. Terdapat 2 kucing.
      </Info>
      <div className="dual-actions">
        <PrimaryButton secondary to="/cleaner/menuju-lokasi">
          Lihat Lokasi
        </PrimaryButton>
        <PrimaryButton to="/cleaner/menuju-lokasi">Mulai Perjalanan</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function CleanerCalendarPage() {
  return (
    <AppPage bottomNav={<Nav active="Jadwal" />} className="cleaner-page">
      <PageHeader title="Jadwal Kerja" />
      <h2 className="month-title">
        ‹ <span>Oktober 2026</span> ›
      </h2>
      <div className="calendar compact">
        <div className="week">
          {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="days">
          <i />
          <i />
          <i />
          {days.map((d) => (
            <button className={d === 16 ? "active" : ""} key={d}>
              {d}
            </button>
          ))}
        </div>
      </div>
      <h2>Jadwal 16 Oktober 2026</h2>
      <Job />
      <Job pet />
    </AppPage>
  );
}

export function CleanerRoutePage() {
  return (
    <AppPage className="cleaner-page route-page">
      <PageHeader title="Menuju Lokasi" />
      <Tag>Dalam Perjalanan</Tag>
      <div className="route-map">
        <Icon name="40763.svg" />
        <Icon name="54258.svg" />
        <Icon name="e0b53.svg" />
        <div>
          <b>12 menit</b>
          <b>4,2 km</b>
        </div>
      </div>
      <p>◉ &nbsp; Kos Soekarno Hatta No. 12, Malang</p>
      <PrimaryButton>Buka Navigasi</PrimaryButton>
      <div className="contact-actions">
        <button>
          ☎<span>Hubungi Customer</span>
        </button>
        <button>
          ◌<span>Chat</span>
        </button>
      </div>
      <h2>Informasi Pesanan</h2>
      <Job />
    </AppPage>
  );
}

export function CleanerIncomePage() {
  return (
    <AppPage bottomNav={<Nav active="Pendapatan" />} className="cleaner-page">
      <PageHeader title="Pendapatan & Riwayat" />
      <section className="income-card">
        <b>Pendapatan Bulan Ini</b>
        <h1>Rp 650.000</h1>
        <div className="bars">
          {[45, 68, 82, 100].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }}>
              <small>Minggu {i + 1}</small>
            </span>
          ))}
        </div>
      </section>
      <p>Riwayat Pesanan</p>
      <div className="segment">
        <button className="active">Selesai</button>
        <button>Dibatalkan</button>
        <button>Semua</button>
      </div>
      {[
        ["Room Cleaning", "8a793.png", "Rp 80.000"],
        ["Pet Area Cleaning", "b48a4.png", "Rp 100.000"],
        ["Deep Cleaning", "ae6d8.png", "Rp 150.000"],
      ].map(([name, img, price], i) => (
        <div className="income-row" key={name}>
          <img src={`${A}/${img}`} alt="" />
          <div>
            <b>{name}</b>
            <span>{14 - i * 2} Oktober 2026</span>
            <span>10.00 – 12.00</span>
          </div>
          <strong>{price}</strong>
          <Tag>Selesai</Tag>
        </div>
      ))}
    </AppPage>
  );
}

export function CleanerProfilePage() {
  const fields = [
    ["34292.svg", "Nama", "Sinta"],
    ["0bf58.svg", "Tanggal Lahir", "12 Februari 1999"],
    ["be33a.svg", "Email", "sinta.cleaner@gmail.com"],
    ["06899.svg", "Nomor Telepon", "0812 3456 7890"],
  ];
  return (
    <AppPage className="cleaner-page cleaner-profile-page">
      <PageHeader title="Profil" />
      <div className="cleaner-profile-avatar">
        <img src={`${A}/01a2c.png`} alt="Sinta" />
        <span>✎</span>
      </div>
      <div className="cleaner-fields">
        {fields.map(([icon, label, value]) => (
          <div key={label}>
            <Icon name={icon} />
            <span>{label}</span>
            <b>{value}</b>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
