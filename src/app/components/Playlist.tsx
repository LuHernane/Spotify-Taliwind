import { Play } from "lucide-react";
import Image from "next/image";

export default function Playlist({
  name,
  url,
}: {
  name: string;
  url?: string;
}) {
  return (
    <a
      href="#"
      className="bg-white/10 group flex items-center rounded gap-4 overflow-hidden hover:bg-white/20 transition-color"
    >
      <Image
        src={url ? url : "/spotify.jpg"}
        width={90}
        height={90}
        alt="LetoDie"
      />
      <strong>{name}</strong>
      <button
        className="
                w-12
                h-12
                flex
                items-center
                justify-center
                pl-1
                rounded-full
                bg-green-500
                text-black
                ml-auto
                mr-8
                invisible
                group-hover:visible
              "
      >
        <Play />
      </button>
    </a>
  );
}
