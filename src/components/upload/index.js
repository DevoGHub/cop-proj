import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileView } from "../profileView";
import { SearchComp } from "../searchComp";

export const Upload = () => {
    const [patient, setPatient] = useState();
    let { patientId } = useParams();

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
            <ProfileView patient={patient} />
        </div>
    );
}