import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

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
