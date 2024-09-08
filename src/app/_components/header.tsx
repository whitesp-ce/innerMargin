import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <Container>
    <header>
      <h2 className="font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
        <Link href="/" className="hover:underline">
          innermargin
        </Link>
        .
      </h2>
    </header>
    </Container>
  );
};

export default Header;
