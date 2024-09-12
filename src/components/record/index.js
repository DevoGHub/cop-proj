import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/json/data";
import { ProfileView } from "../profileView";
import { RecordDetails } from "../recordDetails";

const sample = []

export const Record = () => {
    let { patientId, recordId } = useParams();
    const [patient, setPatient] = useState(...data.filter(({ id }) => id.toLowerCase() === patientId.toLowerCase()));
    const [record, setRecord] = useState()

    useEffect(() => {
        if (patient) setRecord(...patient.records.filter((r) => r.id.toLowerCase() === recordId.toLowerCase()))
    }, [patient])

    return (
        <div>
            <Link to={patient ? `/view/${patientId}` : '/view'}>← Go Back</Link>
            <ProfileView patient={patient} />
            {
                patient && <RecordDetails record={record} />
            }
        </div>
    );
}