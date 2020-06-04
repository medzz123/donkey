import * as React from "react";
import Link from "next/link";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout: React.FunctionComponent = ({ children }) => (
  <div style={layoutStyle}>
    <header>
      <nav
        style={{
          maxWidth: 300,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
