import type { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';

export type AppType = {
  children?: ReactNode;
}

export const App: FunctionComponent<AppType> = ({ children }) => (
  <div className="wt-app">
    <header className="wt-app__header">
      <Link href="/">
        <a>
          <h1>World Traveler</h1>
        </a>
      </Link>
    </header>
    <main className="wt-app__main">
      {children}
    </main>
    <footer className="wt-app__footer">
      <p>Copyright &copy; 2022 by Phil Schanely. All rights reserved.</p>
    </footer>
  </div>
);