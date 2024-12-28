import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
