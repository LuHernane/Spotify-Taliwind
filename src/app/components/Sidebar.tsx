import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-4 mt-10">
        <a
          href=""
          className="flex item-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex item-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex item-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          You Library
        </a>
      </nav>
      <nav className="mt-8 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Playlist
        </a>
      </nav>
    </aside>
  );
}
