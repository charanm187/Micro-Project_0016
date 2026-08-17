function Header() {
  return (
    <header className="header">

      <div className="logo">
        RVU App
      </div>

      <nav className="nav">

        <a href="/">
          Home
        </a>

        <a href="/#features">
          Services
        </a>

        <a href="/login">
          Login
        </a>

        <a href="/login" className="nav-button">
          Get Started
        </a>

      </nav>

    </header>
  );
}

export default Header;