import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <TodoList />
      </div>
    </main>
  );
}
