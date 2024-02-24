import { ItemsTable } from "@/components/ItemsTable";
import { MonstersTable } from "@/components/MonstersTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-950 py-4">
      <ItemsTable />
      <MonstersTable />
    </main>
  );
}
