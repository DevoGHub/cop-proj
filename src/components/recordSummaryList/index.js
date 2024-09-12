import { RecordSummaryCard } from "../recordSummaryCard"

export const RecordSummaryList = ({ records, patientId }) => {
    if (records.length === 0) return (
        <div className="no-profile-comp">
            No Records Found. Search using a Patient ID which has records added to it.
        </div>
    )

    return (
        <div className="list-container">
            <span>Records</span>
            <div className="list-wrapper">
                {
                    records.map((record) => (
                        <RecordSummaryCard record={record} key={record.id} patientId={patientId} />
                    ))
                }
            </div>
        </div>
    )
}