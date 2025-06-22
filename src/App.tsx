import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ParamsPage from "./pages/ParamsPage";
import { SignedOut, SignedIn } from "@clerk/clerk-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <DashboardPage />
              </SignedIn>
              <SignedOut>
                <h1 className="text-3xl text-center mt-10">
                  Please Sign In to access the Dashboard
                </h1>
              </SignedOut>
            </>
          }
        />
        <Route path="/params" element={<ParamsPage />} />
        <Route path="/params/:id" element={<ParamsPage />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
