import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/login") {
    page = <Login />;
  } else if (path === "/dashboard") {
    page = <Dashboard />;
  } else {
    page = <Home />;
  }

  return (
    <div className="app">
      <Header />

      <main>
        {page}
      </main>

      <Footer />
    </div>
  );
}

export default App;