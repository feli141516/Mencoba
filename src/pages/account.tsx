import { useState } from "react";
import { Link } from "react-router";
import { A, AppPage, Field, Icon, PageHeader, PrimaryButton, Tag } from "../components/ui";

export function AccountInfoPage() {
  const [name, setName] = useState("Jenni");
  const [email, setEmail] = useState("jenni@gmail.com");
  const [phone, setPhone] = useState("08547897719");
  return (
    <AppPage className="account-page">
      <PageHeader title="Informasi Akun" />
      <div className="account-avatar">
        <img src={`${A}/87e2c.png`} alt="Jenni" />
        <span>▣</span>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Field label="Nama Lengkap" value={name} onChange={setName} />
        <Field label="Tanggal Lahir" value="12 Mei 2004" />
        <Field label="Email" value={email} onChange={setEmail} />
        <Field label="Nomor Telepon" value={phone} onChange={setPhone} />
        <PrimaryButton type="submit">Simpan Perubahan</PrimaryButton>
      </form>
    </AppPage>
  );
}

export function SavedAddressesPage() {
  const cards = [
    ["Kos", "Jl. Soekarno Hatta No. 12, Malang", "Pagar putih, dekat minimarket."],
    ["Rumah", "Jl. Melati No. 12, Malang", "Dekat taman, rumah warna putih."],
  ];
  return (
    <AppPage className="form-page">
      <PageHeader title="Alamat Tersimpan" />
      <div className="address-cards">
        {cards.map(([tag, address, note]) => (
          <article key={tag}>
            <Tag>{tag}</Tag>
            <p>{address}</p>
            <small>{note}</small>
            <div>
              <button>✎ &nbsp; Edit</button>
              <button>♲ &nbsp; Hapus</button>
            </div>
          </article>
        ))}
      </div>
      <div className="bottom-action">
        <PrimaryButton>＋ &nbsp; Tambah Alamat Baru</PrimaryButton>
      </div>
    </AppPage>
  );
}

export function HelpCenterPage() {
  return (
    <AppPage className="help-page">
      <PageHeader title="Help Center" />
      <div className="help-content">
        <Icon name="df8a7.svg" />
        <h1>
          Hubungi CleanMate
          <br />
          melalui WhatsApp
        </h1>
        <b>08547897719</b>
        <p>
          Tim bantuan kami siap
          <br />
          membantu Anda.
        </p>
      </div>
      <div className="bottom-action">
        <a className="primary-button" href="https://wa.me/628547897719">
          <Icon name="232f9.svg" />
          Chat via WhatsApp
        </a>
      </div>
    </AppPage>
  );
}

export function CleanMateCenterPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <AppPage className="chat-page">
      <header className="chat-header">
        <Link to="/profil">‹</Link>
        <span>
          <b>CleanMate Center</b>
          <small>Online</small>
        </span>
        <i>⌕ &nbsp; ☎</i>
      </header>
      <div className="chat-body">
        <span className="today">Hari ini</span>
        <div className="chat-bubble">
          Halo! 👋<br />
          Terima kasih telah menghubungi
          <br />
          CleanMate Center.
          <br />
          <br />
          Tim kami siap membantu Anda mengenai:
          <br />• Informasi layanan
          <br />• Pemesanan dan jadwal
          <br />• Pembayaran
          <br />• Kendala aplikasi
          <br />• Dan pertanyaan lainnya
          <br />
          <br />
          Silakan ketik pesan Anda, ya! 😊<small>09.41</small>
        </div>
        {messages.map((m, i) => (
          <div className="chat-bubble sent" key={i}>
            {m}
          </div>
        ))}
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (message.trim()) {
            setMessages([...messages, message]);
            setMessage("");
          }
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ketik pesan..."
        />
        <button>➤</button>
      </form>
    </AppPage>
  );
}

export function SettingsPage() {
  return (
    <AppPage className="form-page">
      <PageHeader title="Pengaturan" />
      <div className="menu-list settings-list">
        <Link to="/profil/pengaturan/bahasa">
          <Icon name="b03c4.svg" />
          <span>
            Bahasa<small>Indonesia</small>
          </span>
          <b>›</b>
        </Link>
        <Link to="/profil/pengaturan/ubah-sandi">
          <Icon name="6f98a.svg" />
          <span>Ubah Sandi</span>
          <b>›</b>
        </Link>
      </div>
    </AppPage>
  );
}

export function LanguagePage() {
  const [language, setLanguage] = useState("Indonesia");
  return (
    <AppPage className="form-page">
      <PageHeader title="Bahasa" />
      <div className="language-list">
        {[
          ["Indonesia", "🇮🇩"],
          ["Inggris", "🇬🇧"],
        ].map(([label, flag]) => (
          <button onClick={() => setLanguage(label)} key={label}>
            <span>{flag}</span>
            <b>{label}</b>
            <i className={language === label ? "selected" : ""} />
          </button>
        ))}
      </div>
    </AppPage>
  );
}

export function PasswordPage() {
  return (
    <AppPage className="account-page password-page">
      <PageHeader title="Ubah Sandi" />
      <p className="lead">
        Masukkan sandi baru untuk akun Anda.
        <br />
        Pastikan sandi minimal 8 karakter.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Field
          label="Sandi Saat Ini"
          type="password"
          icon="27025.svg"
          placeholder="Masukkan sandi saat ini"
        />
        <Field
          label="Sandi Baru"
          type="password"
          icon="27025.svg"
          placeholder="Masukkan sandi baru"
        />
        <Field
          label="Konfirmasi Sandi Baru"
          type="password"
          icon="27025.svg"
          placeholder="Masukkan kembali sandi baru"
        />
        <div className="requirements">
          <b>Sandi harus mengandung:</b>
          <span>○ &nbsp; Minimal 8 karakter</span>
          <span>○ &nbsp; Huruf besar (A–Z)</span>
          <span>○ &nbsp; Huruf kecil (a–z)</span>
          <span>○ &nbsp; Angka (0–9)</span>
        </div>
        <PrimaryButton type="submit">Ubah Sandi</PrimaryButton>
      </form>
    </AppPage>
  );
}
