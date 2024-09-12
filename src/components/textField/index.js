export const TextField = ({ fieldId, placeholder, label, type = "text", disabled = false, value, setValue }) => (
    <label className="text-field-wrapper" htmlFor={fieldId}>
        <div >{label}</div>
        <input id={fieldId} placeholder={placeholder} type={type} disabled={disabled} defaultValue={value} onChange={(evt) => setValue(evt.target.value)} />
    </label>
)