import Header from "@/components/Header";

function Home() {
  return (
    <div className="flex-grow">
      <Header pageName="Home" userName="John Doe"/>
      <main className="grid grid-cols-3 h-full">
        <h1>HOME</h1>
      </main>
    </div>
  );
}

export default Home;