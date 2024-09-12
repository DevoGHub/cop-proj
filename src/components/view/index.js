import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileView } from "../profileView";
import { RecordSummaryList } from "../recordSummaryList";
import { SearchComp } from "../searchComp";

const sample = []

export const View = () => {
    const [patient, setPatient] = useState();
    let { patientId } = useParams()

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
            <ProfileView patient={patient} />
            {
                patient && <RecordSummaryList records={patient.records} patientId={patient.id} />
            }
        </div>
    );
}