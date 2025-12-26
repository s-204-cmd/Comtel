export default function Navbar() {
  return (
    <nav style={{ background: "var(--black)", padding: "1rem" }}>
      <a href="#" style={{ color: "var(--primary-red)", fontSize: "1.5rem" }}>
        COMTEL
      </a>
      <div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
