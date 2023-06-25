import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import NoPage from "./pages/NoPage";
import Subscription from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import Likes from "./pages/Likes";

function Component1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="subscriptions" element={<Subscription />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="library" element={<Library />} />
          <Route path="history" element={<History />} />
          <Route path="liked" element={<Likes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);