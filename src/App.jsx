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
import AlertProvider from "./provider/AlertProvider";
import ProblemProvider from "./provider/ProblemProvider";
import Complaint from "./Forms/Complaint";
import Emergency from "./Admin/Emergency";
import Emergency_form from "./Emergency_form";
import Problems from "./Components/Problems";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AlertProvider>
          <UserProvider>
            <ProblemProvider>
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
                  <Route path="/complaint" element={<Complaint />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/emergency" element={<Emergency_form />} />
                  <Route path="/problemjjjjj" element={<Problems />} />
                </Routes>
              </div>
              <Footer />
            </ProblemProvider>
          </UserProvider>
        </AlertProvider>
      </div>
    </>
  );
}
