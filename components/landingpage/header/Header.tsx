import Image from "next/image";
export default function Header() {
  return (
    <div className="ml-20">
      <Image
        alt="logo"
        src="/assets/VERA_Images/levis-white 1@3x.png"
        width={150}
        height={70}
      />
    </div>
  );
}
