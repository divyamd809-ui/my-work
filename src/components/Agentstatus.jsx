export default function AlertCard({ title, count, color }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: "15px",
      borderRadius: "10px",
      color: color,
      width: "150px"
    }}>
      <h4>{title}</h4>
      <h2>{count}</h2>
    </div>
  );
}
