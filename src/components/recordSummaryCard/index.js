import { Link, useNavigate } from "react-router-dom";
import { TextField } from "../textField";

export const RecordSummaryCard = ({ record, patientId }) => {
    const navigate = useNavigate();

    return (
        <Link to={`/view/${patientId}/${record.id}`}>
            <div className="card-wrapper" tabIndex="0">
                <TextField
                    fieldId="title-record-card"
                    label="Title"
                    value={record.title}
                    disabled
                />
                <TextField
                    fieldId="id-record-card"
                    label="Record ID"
                    value={record.id}
                    disabled
                />
                <TextField
                    fieldId="date-record-card"
                    label="Date"
                    value={record.date}
                    disabled
                />
            </div>
        </Link>
    )
}