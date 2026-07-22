import { Navbar, Welcome, Dock } from "./components/Index.js";

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;
