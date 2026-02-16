export async function getLogs() {
  const response = await fetch("http://localhost:8000/logs");
  return response.json();
}

