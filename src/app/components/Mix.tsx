import Image from "next/image";

export default function Mix() {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src="/spotify.jpg"
        className="w-full"
        width={120}
        height={120}
        alt="LetoDie"
      />
      <strong className="font-semibold"> Daily Mix 1</strong>
      <span className="text-xs text-zinc-500">Leto...</span>
    </a>
  );
}