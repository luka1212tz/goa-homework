export default function TableFallback({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}