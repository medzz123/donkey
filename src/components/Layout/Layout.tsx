import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from './Layout.models';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, showLayout } = props;

  if (!showLayout) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <div style={layoutStyle}>
      <header>
        <nav
          style={{
            maxWidth: 300,
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 40,
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
          <Link href="/home">
            <a>Home</a>
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
