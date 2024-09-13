import { FilePreview } from "../filePreview"
import { TextField } from "../textField"

export const RecordDetails = ({ record }) => {
    if (!record) return (
        <div className="no-profile-comp">
            No such record Found.
        </div>
    )

    return (
        <div className="record-data-container">
            <span>Record Data</span>
            <div className="record-data-wrapper">
                {
                    record.data.map((data, idx) => {
                        if (data.type === 'text') return (<TextField label={data.name} disabled value={data.value} fieldId={`field-${idx}`} key={`field-${idx}`} />)
                        return <FilePreview url={data.value} alt={data.name} label={data.name} key={`field-${idx}`} />
                    })
                }
            </div>
        </div>
    )
}