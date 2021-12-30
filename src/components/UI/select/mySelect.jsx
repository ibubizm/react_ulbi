export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="val1">
        {defaultValue}
      </option>
      {options.map((i) => (
        <option key={i.value} value={i.value}>
          {i.name}
        </option>
      ))}
    </select>
  )
}
