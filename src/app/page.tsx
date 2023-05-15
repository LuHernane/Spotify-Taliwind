import { ChevronLeft, ChevronRight } from "lucide-react";
import DailyMix from "./components/Dailly";
import Footer from "./components/Footer";
import { Highlight } from "./components/Highlight";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="fort-semibold text-4x1 mt-8">Good Morning</h1>
          <Highlight />
          <h2 className="font-semibold text-2x1 mt-10">Made for Lucas</h2>
          <DailyMix />
        </main>
      </div>
      <Footer />
    </div>
  );
}
