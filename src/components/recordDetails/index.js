
export const RecordDetails = ({ record }) => {
    if (!record) return (
        <div className="no-profile-comp">
            No such record Found.
        </div>
    )

    return (
        <div>
            {record.id + "" + record.title}
        </div>
    )
}