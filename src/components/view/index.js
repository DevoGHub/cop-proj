import { useEffect, useState } from "react";
import { SearchComp } from "../searchComp";

export const View = ({ patientId }) => {
    const [patient, setPatient] = useState();

    useEffect(() => console.log(patient), [patient])

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
        </div>
    );
}