// import React from "react";
// // import Login from './LoginComponent/Login'
// import Navbar from "./RegistrationComponents/Navbar";
// import Dashboard from "./RegistrationComponents/Dashboard";
// function App() {
//   return (
//     <div>
//       {/* <Navbar/>
//       <Dashboard/> */}
//       {/* <Login/> */}
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import things from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 30 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const AboutPage = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <>
      <h1>This is About page</h1>
      {state && (
        <div>
          <h3>Passed data:</h3>
          <p>From: {state.from}</p>
          <p>Message: {state.message}</p>
          <p>Timestamp: {state.timestamp}</p>
        </div>
      )}
      <hr />
      <Link to="/">Go Home</Link>
    </>
  );
};

// HomePage.js

const HomePage = (props) => {
  // this is for the first Link
  const data1 = {
    from: "Link #1",
    message: "Welcome to KindaCode.com",
    timestamp: Date.now(),
  };

  // this is for the second Link
  const data2 = {
    from: "Link #2",
    message: "Just another message by zahid",
    timestamp: Date.now(),
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link to="/about" state={data1}>
          Go to About Page (Link #1)
        </Link>
      </p>
      <p>
        <Link to="/about" state={data2}>
          Go to About Page (Link #2)
        </Link>
      </p>
    </>
  );
};

// export { HomePage };
export default App;
