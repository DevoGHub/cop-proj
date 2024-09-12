import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchComp } from "../searchComp";

export const View = () => {
    const [patient, setPatient] = useState();
    let { patientId } = useParams()

    useEffect(() => console.log(patient), [patient]);

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
        </div>
    );
}