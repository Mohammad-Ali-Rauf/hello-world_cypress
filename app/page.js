import React from 'react';

const Header = ({ appName }) => {
  return (
    <header className="bg-blue-500 p-2">
      <nav className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">{appName}</h1>
        <ul className="flex space-x-2 text-white text-sm">
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#billing">Billing</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-2">
      <h2 className="text-gray-700 text-sm font-semibold">Menu</h2>
      <ul className="mt-2 space-y-1">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#billing">Billing</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </aside>
  );
};

const Content = ({ welcomeMessage }) => {
  return (
    <main className="p-2">
      <h2 className="text-lg font-semibold">Welcome to My App</h2>
      <p className="text-sm text-gray-700">
        {welcomeMessage}
      </p>
    </main>
  );
};

const Footer = ({ copyrightText }) => {
  return (
    <footer className="bg-blue-500 text-white p-2 text-center text-xs">
      &copy; {new Date().getFullYear()} {copyrightText}. All rights reserved.
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header appName="My App" />
      <div className="flex flex-grow">
        <Sidebar />
        <Content welcomeMessage="Thank you for using our app. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <Footer copyrightText="My App" />
    </div>
  );
};

export default App;