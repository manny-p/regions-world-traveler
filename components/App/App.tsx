import { FunctionComponent, ReactNode } from "react";

export type AppType = {
  children?: ReactNode;
}

export const App: FunctionComponent<AppType> = ({ children }) => (
  <div className="wt-app">
    <header className="wt-app__header">
      <h1>World Traveler</h1>
    </header>
    <main className="wt-app__main">
      {children}
    </main>
    <footer className="wt-app__footer">
      <p>Copyright &copy; 2022 by Phil Schanely. All rights reserved.</p>
    </footer>
  </div>
);