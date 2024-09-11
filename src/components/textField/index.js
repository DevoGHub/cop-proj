export const TextField = ({ fieldId, placeholder, label, type = "text", disabled = false, value }) => (
    <label className="text-field-wrapper" htmlFor={fieldId}>
        <div >{label}</div>
        <input id={fieldId} placeholder={placeholder} type={type} disabled={disabled} value={value ? value : null} />
    </label>
)