import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-900 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/spotify.jpg" width={60} height={60} alt="LetoDie" />
        <div className="flex flex-col">
          <strong className="font-normal">Só Respire</strong>
          <span className="text-xs text-zinc-400">Letodie</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button
            className="
                w-10
                h-10
                flex
                items-center
                justify-center
                pl-1
                rounded-full
                bg-zinc-200
                text-black
              "
          >
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:29</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rouded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:30</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={16} />
        <LayoutList size={16} />
        <Laptop2 size={16} />
        <div className="flex items-center gap-2">
          <Volume size={16} />
          <div className="h-1 rounded-full w-20 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rouded-full"></div>
          </div>
        </div>
        <Maximize2 size={16} />
      </div>
    </footer>
  );
}
