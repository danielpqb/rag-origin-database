import { MonstersTable } from "@/components/MonstersTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-800 py-4">
      <MonstersTable />
    </main>
  );
}
