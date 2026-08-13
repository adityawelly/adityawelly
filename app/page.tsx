import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a
          href="https://cv.adityawelly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-link"
        >
          Resume
        </a>
        <Image
          src="/logo.png"
          alt="Aditya Welly"
          width={44}
          height={44}
          priority
          className="topbar-logo"
        />
        <a
          href="https://trip.adityawelly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-link"
        >
          Journey
        </a>
      </header>
      <main className="stage">
        <Image
          src="/foto.png"
          alt="Aditya Welly"
          width={1200}
          height={800}
          priority
          className="picture"
        />
      </main>
    </>
  );
}