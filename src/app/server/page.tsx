import ClientComponent from "@/ClientComponent";
import ServerComponent from "@/ServerComponent";
import { expensiveFunction } from "@/expensiveFunction";

export default async function ServerPage() {
  console.log("Server");
  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the server...</h1>
    </main>
  );
}