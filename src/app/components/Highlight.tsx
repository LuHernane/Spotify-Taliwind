import Playlist from "./Playlist";

const entries = [
  {
    name: "Leto",
    id: 1,
  },
  {
    name: "metalica",
    id: 2,
    url: "/Metalica.jfif",
  },
];

export function Highlight() {
  return (
    <div className="grid grid-cols-3 rounded gap-3 mt-6">
      {entries.map((entry) => (
        <Playlist name={entry.name} key={entry.id} url={entry.url} />
      ))}
    </div>
  );
}
