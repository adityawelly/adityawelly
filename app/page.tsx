import Image from "next/image";

export default function Home() {
  return (
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
  );
}