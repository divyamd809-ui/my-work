export default function LogTable({ logs }) {
  return (
    <table border="1" width="100%" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>IP</th>
          <th>Attack</th>
          <th>Severity</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.ip}</td>
            <td>{log.attack}</td>
            <td>{log.severity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
