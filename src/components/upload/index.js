import { useState } from "react";
import { useParams } from "react-router-dom";
import { FilePreview } from "../filePreview";
import { FileUpload } from "../fileUpload";
import { ProfileView } from "../profileView";
import { SearchComp } from "../searchComp";

export const Upload = () => {
    const [patient, setPatient] = useState();
    let { patientId } = useParams();
    const [file, setFile] = useState();

    return (
        <div>
            <SearchComp setPatient={setPatient} patientId={patientId} />
            <ProfileView patient={patient} />
            <FileUpload fieldId="something" label="File" value={file} setValue={setFile} />
            <FilePreview alt="lorem ipsum" url={'https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg'} label={"something"} />
        </div>
    );
}