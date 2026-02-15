import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div style={{ display: "flex", background: "#0f172a", minHeight: "100vh" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
