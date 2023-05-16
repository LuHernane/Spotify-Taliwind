import Mix from "./Mix";

const entries = [
  {
    name: "LetoDie",
    id: 1,
  },
  {
    name: "Top Sertanejo",
    id: 2,
    url: "",
  },
];
export default function DailyMix() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      {entries.map((entry) => (
        <Mix name={entry.name} key={entry.id} url={entry.url} />
      ))}
    </div>
  );
}
