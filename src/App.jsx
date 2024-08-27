import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}
