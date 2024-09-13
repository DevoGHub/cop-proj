import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FileUpload } from "../fileUpload";
import { ProfileView } from "../profileView";
import { SearchComp } from "../searchComp";
import { TextField } from "../textField";

export const Upload = () => {
    const [patient, setPatient] = useState();
    let { patientId } = useParams();
    const [file, setFile] = useState();
    const [value, setValue] = useState();

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
            <ProfileView patient={patient} />
            {
                patient && <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <FileUpload fieldId="something" label="File" value={file} setValue={setFile} />
                    <TextField fieldId={`id-${() => Math.random() * 120000}`} label="Field Value" placeholder="Enter Field Value" value={value} setValue={setValue} />
                    <Link to={`/view/${patient.id}`} >View Records</Link>
                </div>
            }
        </div >
    );
}