import AlertCard from "../components/AlertCard";
import LogTable from "../components/LogTable";
import AgentStatus from "../components/AgentStatus";
import { useEffect, useState } from "react";


export default function Dashboard() {
  const [logs, setLogs] = useState([]);
useEffect(() => {
  getLogs().then(data => {
    setLogs(data);
  });
}, []);

  

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>SOC Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <AlertCard title="Critical" count="5" color="red" />
        <AlertCard title="High" count="3" color="orange" />
        <AlertCard title="Medium" count="2" color="yellow" />
        <AlertCard title="Low" count="1" color="green" />
      </div>

      <LogTable logs={logs} />
      <AgentStatus />
    </div>
  );
}
