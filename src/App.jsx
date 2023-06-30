import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/qw">About</Link>
          <Link to="/00000000000000000000000000">Failed</Link>
        </div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/qw" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}
