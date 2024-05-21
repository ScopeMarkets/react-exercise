import Categories from "@components/Categories";
import Navigation from "@components/Navigation";

export default function Home() {
  return (
    <main className="h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto py-8">
        <Categories />
      </div>
    </main>
  );
}
