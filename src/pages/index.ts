import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  A,
  AppPage,
  BottomNav,
  Field,
  Icon,
  PageHeader,
  PrimaryButton,
  StatusBar,
  Tag,
} from "../components/ui";

function Crop({ className, imageClass }: { className: string; imageClass: string }) {
  return (
    <div className={className} aria-hidden="true">
      <img className={imageClass} src={`${A}/9147d.png`} alt="" />
    </div>
  );
}

export function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 1800);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <main className="splash-screen" onClick={() => navigate("/onboarding")}>
      <StatusBar />
      <Crop className="curtain-background" imageClass="curtain-image" />
      <Crop className="living-room" imageClass="living-room-image" />
      <div className="cleanmate-brand">
        <img className="cleanmate-symbol" src={`${A}/6add8.svg`} alt="" />
        <h1>CleanMate</h1>
        <p>Rumah Bersih, Semua Bahagia</p>
      </div>
      <div className="loading-track">
        <span className="loading-progress" />
      </div>
    </main>
  );
}

export function OnboardingPage() {
  return (
    <AppPage className="onboarding-page">
      <section className="onboarding-copy">
        <h1>Bersih Tanpa Ribet, Tetap Ramah untuk Hewan</h1>
        <p>Layanan cleaning yang praktis dan nyaman untuk Anda dan hewan peliharaan.</p>
      </section>
      <div className="onboarding-photo">
        <img src={`${A}/9147d.png`} alt="Ruang keluarga yang bersih" />
      </div>
      <div className="dots">
        <b />
        <i />
        <i />
      </div>
      <div className="bottom-action">
        <PrimaryButton to="/login">Lanjut</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <AppPage className="login-page">
      <button className="bare-back" onClick={() => navigate(-1)}>
        ‹
      </button>
      <section className="login-heading">
        <h1>
          Masuk ke
          <br />
          CleanMate
        </h1>
        <p>Nikmati layanan kebersihan yang praktis dan pet-friendly.</p>
      </section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
      >
        <Field icon="43af5.svg" placeholder="Email atau nomor telepon" />
        <div className="password-field">
          <Field icon="395f6.svg" type={visible ? "text" : "password"} placeholder="Password" />
          <button type="button" onClick={() => setVisible(!visible)}>
            <Icon name="8ec5d.svg" />
          </button>
        </div>
        <button type="button" className="forgot">
          Lupa password?
        </button>
        <PrimaryButton type="submit">Masuk</PrimaryButton>
      </form>
      <p className="separator">atau lanjut dengan</p>
      <button className="social-button">
        <Icon name="8fdd7.svg" />
        Google
      </button>
      <button className="social-button">
        <Icon name="0128f.svg" />
        Apple
      </button>
      <p className="register">
        Belum punya akun? <b>Daftar</b>
      </p>
    </AppPage>
  );
}

const categories = [
  ["Kos", "498b3.svg", "/layanan/kos"],
  ["Rumah", "3e1c9.svg", "/layanan/rumah"],
  ["Apartemen", "e7982.svg", "/layanan/apartemen"],
];
export function HomePage() {
  return (
    <AppPage bottomNav={<BottomNav active="Home" />} className="home-page">
      <header className="location-header">
        <div>
          <Icon name="cdb6e.svg" />
          <b>Malang, Jawa Timur</b>
        </div>
        <span className="notification-icon">
          <Icon name="5732d.svg" />
          <Icon name="eec70.svg" />
        </span>
      </header>
      <div className="search">
        <Icon name="8b5b3.svg" />
        <span>Cari layanan atau lokasi...</span>
      </div>
      <section className="hero-card">
        <div>
          <h1>
            Rumah Bersih,
            <br />
            Aktivitas Lebih Fokus
          </h1>
          <p>
            Jasa cleaning profesional
            <br />
            yang pet-friendly.
          </p>
          <Link to="/layanan/rumah">Book Now</Link>
        </div>
        <div className="hero-photo" aria-hidden="true">
          <img src={`${A}/9147d.png`} alt="" />
        </div>
        <div className="hero-blend" />
      </section>
      <div className="dots small">
        <b />
        <i />
        <i />
      </div>
      <h2>Kategori Layanan</h2>
      <div className="category-grid">
        {categories.map(([label, icon, to]) => (
          <Link to={to} key={label}>
            <Icon name={icon} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <h2>Promo</h2>
      <section className="promo-card">
        <div>
          <b>Diskon 20%</b>
          <span>untuk booking pertama</span>
        </div>
        <div className="promo-photo" aria-hidden="true">
          <img src={`${A}/9147d.png`} alt="" />
        </div>
      </section>
    </AppPage>
  );
}

type Service = { key: string; name: string; image: string; duration: string; pet?: boolean };
const services: Service[] = [
  { key: "room", name: "Room Cleaning", image: "8a793.png", duration: "2–3 jam" },
  { key: "deep", name: "Deep Cleaning", image: "ae6d8.png", duration: "3–4 jam", pet: true },
  { key: "bathroom", name: "Bathroom Cleaning", image: "b7d5e.png", duration: "1–2 jam" },
  { key: "kitchen", name: "Kitchen Cleaning", image: "33d21.png", duration: "1–2 jam" },
  {
    key: "pet-area",
    name: "Pet Area Cleaning",
    image: "b48a4.png",
    duration: "2–4 jam",
    pet: true,
  },
];
const prices: Record<string, string[]> = {
  kos: ["Rp 30.000", "Rp 75.000", "Rp 20.000", "Rp 35.000"],
  rumah: ["Rp 50.000", "Rp 200.000", "Rp 40.000", "Rp 75.000", "Rp 60.000"],
  apartemen: ["Rp 45.000", "Rp 150.000", "Rp 35.000", "Rp 60.000", "Rp 50.000"],
};

export function ServicesPage() {
  const { type = "rumah" } = useParams();
  const list = type === "kos" ? services.filter((s) => s.key !== "kitchen") : services;
  return (
    <AppPage bottomNav={<BottomNav active="Layanan" />} className="services-page">
      <PageHeader title={`Layanan - ${type[0].toUpperCase()}${type.slice(1)}`} />
      <div className="search">
        <Icon name="74496.svg" />
        <span>Cari layanan...</span>
      </div>
      <div className="segment">
        {["kos", "rumah", "apartemen"].map((item) => (
          <Link className={type === item ? "active" : ""} to={`/layanan/${item}`} key={item}>
            {item[0].toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
      <div className="service-list">
        {list.map((service, index) => (
          <Link to={`/detail/${service.key}`} className="service-row" key={service.key}>
            <img src={`${A}/${service.image}`} alt="" />
            <div>
              <h3>{service.name}</h3>
              <b>{prices[type]?.[index]}</b>
              <span>{service.duration}</span>
            </div>
            {service.pet && <Tag>Pet-Friendly</Tag>}
          </Link>
        ))}
      </div>
    </AppPage>
  );
}

const details: Record<
  string,
  {
    name: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    items: string[];
    note: string;
    sub: string;
  }
> = {
  room: {
    name: "Room Cleaning",
    image: "8a793.png",
    duration: "2–3 jam",
    price: "Rp 50.000",
    description:
      "Pembersihan kamar secara menyeluruh, termasuk lantai, meja, tempat tidur, lemari, debu, dan area umum.",
    items: ["Lantai", "Meja & kursi", "Tempat tidur", "Lemari & rak", "Debu & area umum"],
    note: "Aman untuk rumah dengan hewan peliharaan",
    sub: "Cleaner kami terbiasa bekerja di lingkungan yang memiliki hewan peliharaan.",
  },
  bathroom: {
    name: "Bathroom Cleaning",
    image: "b7d5e.png",
    duration: "1–2 jam",
    price: "Rp 40.000",
    description:
      "Pembersihan kamar mandi, termasuk kloset, wastafel, lantai, dinding, dan kaca untuk mengangkat noda sabun serta kerak.",
    items: ["Kloset", "Wastafel", "Lantai & dinding", "Kaca & cermin", "Kerak & saluran air"],
    note: "Kamar mandi bersih, hewan terlindungi",
    sub: "Jauhkan hewan dari kamar mandi hingga lantai kering dan pembersihan selesai.",
  },
  kitchen: {
    name: "Kitchen Cleaning",
    image: "33d21.png",
    duration: "2–4 jam",
    price: "Rp 75.000",
    description:
      "Pembersihan dapur secara menyeluruh, termasuk kompor, meja dapur, bak cuci, lemari bagian luar, serta lantai berminyak.",
    items: ["Kompor", "Meja dapur", "Bak cuci", "Luar lemari", "Lantai & noda minyak"],
    note: "Dapur bersih, aman bersama hewan",
    sub: "Amankan makanan dan tempatkan hewan di luar dapur selama pembersihan.",
  },
  deep: {
    name: "Deep Cleaning",
    image: "ae6d8.png",
    duration: "3–4 jam",
    price: "Rp 200.000",
    description:
      "Pembersihan mendalam yang menggunakan disinfektan untuk membersihkan kotoran membandel, debu di sudut ruangan, serta noda pada lantai dan perabot.",
    items: [
      "Lantai & sudut",
      "Meja & kursi",
      "Kaca & jendela",
      "Lemari & rak",
      "Debu & noda membandel",
      "Disinfektan",
    ],
    note: "Bersih menyeluruh, hewan tetap nyaman",
    sub: "Tempatkan hewan di area terpisah selama pembersihan mendalam berlangsung.",
  },
  "pet-area": {
    name: "Pet Area Cleaning",
    image: "b48a4.png",
    duration: "2–4 jam",
    price: "Rp 60.000",
    description:
      "Pembersihan area hewan peliharaan, termasuk kandang, alas tidur, tempat makan, bulu yang rontok, serta noda dan bau.",
    items: ["Kandang", "Alas tidur", "Tempat makan", "Bulu rontok", "Lantai, noda & bau"],
    note: "Nyaman untuk hewan kesayangan",
    sub: "Petugas kami terbiasa dengan hewan. Informasikan jenis dan kebiasaannya.",
  },
};
export function ServiceDetailPage() {
  const navigate = useNavigate();
  const { service = "room" } = useParams();
  const d = details[service] ?? details.room;
  return (
    <AppPage className="detail-page">
      <div className="detail-hero">
        <img src={`${A}/${d.image}`} alt={d.name} />
        <button onClick={() => navigate(-1)}>‹</button>
        <span>♡</span>
      </div>
      <div className="title-tag">
        <h1>{d.name}</h1>
        <Tag>Pet-Friendly</Tag>
      </div>
      <p className="muted">{d.duration}</p>
      <h2 className="price">{d.price}</h2>
      <p className="detail-description">{d.description}</p>
      <h2>Yang Dibersihkan</h2>
      <div className="clean-grid">
        {d.items.map((item) => (
          <span key={item}>
            ⌂ <small>{item}</small>
          </span>
        ))}
      </div>
      <div className="pet-note">
        <Icon name="736c6.svg" />
        <div>
          <b>{d.note}</b>
          <small>{d.sub}</small>
        </div>
      </div>
      <div className="bottom-action">
        <PrimaryButton to="/pilih-cleaner">Pilih Cleaner</PrimaryButton>
      </div>
    </AppPage>
  );
}

const cleaners = [
  ["Andi", "033c5.png", "Spesialis: & Apartemen"],
  ["Sinta", "01a2c.png", "Spesialis: & Apartemen"],
  ["Bagos", "1b17d.png", "Spesialis: Deep Cleaning"],
  ["Tiara", "4af8a.png", "Spesialis: & Apartemen"],
];
export function CleanerSelectPage() {
  return (
    <AppPage className="form-page">
      <PageHeader title="Pilih Cleaner" />
      <p className="lead">
        Pilih cleaner yang tersedia sesuai jadwal. Semua cleaner kami ramah terhadap hewan
        peliharaan.
      </p>
      <div className="cleaner-list">
        {cleaners.map(([name, photo, specialty], index) => (
          <div className="cleaner-row" key={name}>
            <img src={`${A}/${photo}`} alt={name} />
            <div>
              <h3>{name}</h3>
              <span>{specialty}</span>
            </div>
            {index < 2 && <Tag>Pet-Friendly</Tag>}
            <PrimaryButton to="/pilih-jadwal">Pilih</PrimaryButton>
          </div>
        ))}
      </div>
    </AppPage>
  );
}

export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export function SchedulePage() {
  const [day, setDay] = useState(16);
  const [time, setTime] = useState("13.00");
  return (
    <AppPage className="form-page">
      <PageHeader title="Pilih Jadwal" />
      <h2>
        Oktober 2026 <span className="next">›</span>
      </h2>
      <div className="calendar">
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
            <button className={day === d ? "active" : ""} onClick={() => setDay(d)} key={d}>
              {d}
            </button>
          ))}
        </div>
      </div>
      <h2>Pilih Waktu</h2>
      <div className="time-grid">
        {["09.00", "11.00", "13.00", "15.00", "17.00", "19.00"].map((t) => (
          <button className={time === t ? "active" : ""} onClick={() => setTime(t)} key={t}>
            {t}
          </button>
        ))}
      </div>
      <div className="bottom-action">
        <PrimaryButton to="/alamat-layanan">Lanjut</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function AddressPage() {
  const [selected, setSelected] = useState(0);
  const addresses = [
    ["Kos Soekarno Hatta", "Jl. Soekarno Hatta No. 12, Malang"],
    ["Apartemen Taman Melati", "Jl. Taman Melati No. 8, Malang"],
    ["Rumah", "Jl. Ijen No. 5, Malang"],
  ];
  return (
    <AppPage className="form-page">
      <PageHeader title="Alamat Layanan" />
      <p className="lead">Masukkan alamat lengkap untuk layanan cleaning.</p>
      <h2>Alamat Tersimpan</h2>
      <div className="radio-list">
        {addresses.map(([name, address], index) => (
          <button onClick={() => setSelected(index)} key={name}>
            <i className={selected === index ? "selected" : ""} />
            <span>
              <b>{name}</b>
              <small>{address}</small>
            </span>
          </button>
        ))}
      </div>
      <button className="add-link">＋ Tambah Alamat Baru</button>
      <div className="bottom-action">
        <PrimaryButton to="/hewan-peliharaan">Lanjut</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function PetPage() {
  const [hasPet, setHasPet] = useState(true);
  const [kind, setKind] = useState("Kucing");
  const [count, setCount] = useState(2);
  return (
    <AppPage className="form-page pet-page">
      <PageHeader title="Apakah ada Hewan peliharaan?" />
      <div className="choice-two">
        <button className={!hasPet ? "active" : ""} onClick={() => setHasPet(false)}>
          ○ &nbsp; Tidak ada
        </button>
        <button className={hasPet ? "active" : ""} onClick={() => setHasPet(true)}>
          ● &nbsp; Ada
        </button>
      </div>
      <h2>Jenis Hewan</h2>
      <div className="pet-types">
        {[
          ["Kucing", "a68fa.svg"],
          ["Anjing", "906a9.svg"],
          ["Lainnya", "6e39c.svg"],
        ].map(([label, icon]) => (
          <button
            className={kind === label ? "active" : ""}
            onClick={() => setKind(label)}
            key={label}
          >
            <Icon name={icon} />
            {label}
          </button>
        ))}
      </div>
      <h2>Jumlah Hewan</h2>
      <div className="counter">
        <button onClick={() => setCount(Math.max(0, count - 1))}>−</button>
        <b>{count}</b>
        <button onClick={() => setCount(count + 1)}>＋</button>
      </div>
      <div className="pet-note">
        <Icon name="18121.svg" />
        <span>Informasi ini membantu cleaner mempersiapkan peralatan yang sesuai.</span>
      </div>
      <div className="bottom-action">
        <PrimaryButton to="/ringkasan">Lanjut</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function OrderSummaryPage() {
  const info = [
    ["6d021.svg", "Tanggal & Waktu", "16 Okt 2026, 13.00 – 15.00"],
    ["fe518.svg", "Alamat", "Jl. Soekarno Hatta No. 12, Malang"],
    ["3bcf7.svg", "Hewan Peliharaan", "2 Kucing"],
  ];
  return (
    <AppPage className="form-page summary-page">
      <PageHeader title="Ringkasan Pesanan" />
      <div className="summary-service">
        <img src={`${A}/8a793.png`} alt="" />
        <div>
          <b>Room Cleaning Rumah</b>
          <strong>Rp 30.000</strong>
          <span>Estimasi 2–3 jam</span>
        </div>
        <button>Ubah</button>
      </div>
      <div className="summary-cleaner">
        <img src={`${A}/01a2c.png`} alt="" />
        <b>Sinta</b>
        <button>Ubah</button>
      </div>
      <div className="summary-info">
        {info.map(([icon, title, sub]) => (
          <div key={title}>
            <Icon name={icon} />
            <span>
              <b>{title}</b>
              <small>{sub}</small>
            </span>
            <button>Ubah</button>
          </div>
        ))}
      </div>
      <div className="totals">
        <span>
          Subtotal <b>Rp 30.000</b>
        </span>
        <strong>
          Total Pembayaran <b>Rp 30.000</b>
        </strong>
      </div>
      <div className="bottom-action">
        <PrimaryButton to="/pembayaran">Lanjut ke Pembayaran</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function PaymentPage() {
  const [method, setMethod] = useState("GoPay");
  return (
    <AppPage className="form-page payment-page">
      <PageHeader title="Metode Pembayaran" />
      <h2>♢ &nbsp; E-wallet</h2>
      <div className="wallets">
        {["GoPay", "OVO", "DANA", "Shopee Pay"].map((m) => (
          <button className={method === m ? "active" : ""} onClick={() => setMethod(m)} key={m}>
            <span>▣</span>
            {m}
          </button>
        ))}
      </div>
      <h2>ⓢ &nbsp; Virtual Account</h2>
      <div className="banks">
        {["BCA", "BRI", "BNI", "mandiri"].map((m) => (
          <button onClick={() => setMethod(m)} key={m}>
            {m}
          </button>
        ))}
      </div>
      <button
        className={`payment-line ${method === "QRIS" ? "active" : ""}`}
        onClick={() => setMethod("QRIS")}
      >
        <Icon name="8f9b2.svg" />
        <span>
          <b>QRIS</b>
          <small>Bayar dengan semua e-wallet dan mobile banking</small>
        </span>
      </button>
      <button
        className={`payment-line ${method === "Cash" ? "active" : ""}`}
        onClick={() => setMethod("Cash")}
      >
        <Icon name="b711f.svg" />
        <span>
          <b>Cash</b>
          <small>Bayar langsung ke cleaner</small>
        </span>
      </button>
      <div className="bottom-action">
        <PrimaryButton to="/pesanan-berhasil">Bayar</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function SuccessPage() {
  return (
    <AppPage className="success-page">
      <div className="success-mark">✓</div>
      <h1>Pesanan Berhasil!</h1>
      <p>ID Pesanan</p>
      <h2>CM20261016-001</h2>
      <div className="clipboard">
        ○ ───
        <br />○ ───
        <br />○ ───
      </div>
      <p>Cleaner akan segera dikonfirmasi dan menuju lokasi sesuai jadwal.</p>
      <div className="success-actions">
        <PrimaryButton to="/pesanan">Lihat Pesanan</PrimaryButton>
        <PrimaryButton secondary to="/home">
          Kembali ke Beranda
        </PrimaryButton>
      </div>
    </AppPage>
  );
}

export function OrdersPage() {
  return (
    <AppPage bottomNav={<BottomNav active="Pesanan" />} className="orders-page">
      <PageHeader title="Pesanan Saya" />
      <div className="order-tabs">
        <b>Akan Datang (1)</b>
        <span>Sedang Diproses</span>
        <span>Selesai</span>
        <span>Dibatalkan</span>
      </div>
      <Link to="/tracking" className="order-card">
        <img src={`${A}/8a793.png`} alt="" />
        <div>
          <h3>Room Cleaning</h3>
          <span>16 Okt 2026, 13.00</span>
          <b>Rp 100.000</b>
        </div>
        <Tag blue>Akan Datang</Tag>
      </Link>
    </AppPage>
  );
}

export function TrackingPage() {
  const steps = [
    ["Booking Confirmed", "16 Okt 2026, 11.00"],
    ["Cleaner Assigned", "16 Okt 2026, 11.30"],
    ["On The Way", "16 Okt 2026, 12.15"],
    ["Cleaning in Progress", ""],
    ["Cleaning Completed", ""],
  ];
  return (
    <AppPage className="tracking-page">
      <PageHeader title="Status Pesanan" />
      <div className="map-preview">
        <Icon name="3fe4e.svg" />
        <Icon name="a3bd7.svg" />
        <Icon name="59768.svg" />
      </div>
      <div className="timeline">
        {steps.map(([title, time], i) => (
          <div className={i < 2 ? "done" : i === 2 ? "current" : ""} key={title}>
            <i>{i < 2 ? "✓" : ""}</i>
            <span>
              <b>{title}</b>
              {time && <small>{time}</small>}
            </span>
          </div>
        ))}
      </div>
    </AppPage>
  );
}

const profileItems = [
  ["Informasi Akun", "/profil/informasi-akun", "fdaa3.svg"],
  ["Alamat Tersimpan", "/profil/alamat", "fe518.svg"],
  ["Riwayat Pesanan", "/pesanan", "61aa8.svg"],
  ["Help Center", "/profil/help-center", "7bc9f.svg"],
  ["Pengaturan", "/profil/pengaturan", "2cfbc.svg"],
  ["Keluar", "/login", "e0cf7.svg"],
];
export function ProfilePage() {
  return (
    <AppPage bottomNav={<BottomNav active="Profil" />} className="profile-page">
      <PageHeader title="Profil" />
      <div className="profile-head">
        <img src={`${A}/87e2c.png`} alt="Jenni" />
        <span>
          <h2>Jenni</h2>
          <p>jenni@gmail.com</p>
        </span>
      </div>
      <div className="menu-list">
        {profileItems.map(([label, to, icon]) => (
          <Link to={to} key={label}>
            <Icon name={icon} />
            <span>{label}</span>
            <b>›</b>
          </Link>
        ))}
      </div>
    </AppPage>
  );
}
