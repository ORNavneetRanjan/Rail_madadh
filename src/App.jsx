import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./user/Login";
import Footer from "./Components/Footer";
import SignIn from "./user/SignIn";
import ForgotPass from "./user/ForgotPass";
import Home from "./Home";
import UserProvider from "./provider/UserProvider";
import Profile from "./user/Profile";
import UserRoute from "./Routes/UserRoute";
import AuthRoute from "./Routes/AuthRoute";
import Alert from "./Components/Alert";
import Admin from "./Admin/Admin";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <UserProvider>
          <Header />
          <div className="grow">
            <Alert />
            <Routes>
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <AuthRoute>
                    <SignIn />
                  </AuthRoute>
                }
              />
              <Route path="/forgot-pass" element={<ForgotPass />} />
              <Route
                path="/profile"
                element={
                  <UserRoute>
                    <Profile />
                  </UserRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <UserRoute>
                    <Admin />
                  </UserRoute>
                }
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </UserProvider>
      </div>
    </>
  );
}
