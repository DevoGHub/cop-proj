import { Scanner } from "@yudiel/react-qr-scanner";
import { useCallback, useEffect, useState } from "react";
import CameraIcon from '../../assets/images/camera_icon.svg';
import SearchIcon from '../../assets/images/search_icon.svg';
import data from "../../assets/json/data";
import { TextField } from "../textField";

export const SearchComp = ({ setPatient, patientId = "" }) => {
    const [id, setId] = useState(patientId);
    const [cameraOpened, setCameraOpened] = useState(false);

    const searchFunction = useCallback(() => {
        setPatient(...data.filter(({ id: patientObjectId }) => patientObjectId.toLowerCase().trim() === id.toLowerCase().trim()))
    }, [id])

    useEffect(() => {
        patientId !== "" && searchFunction();
    }, [])

    return (
        <>
            <div className="search-wrapper">
                <div className="search-container">
                    <TextField label="Patient ID" placeholder="Enter Patient ID" fieldId="patientId" value={id} setValue={setId} />
                    <button type="button" className="search-btn" onClick={searchFunction}>
                        <img src={SearchIcon} alt="search icon" />
                    </button>
                </div>
                <span className="or-span">or</span>
                <button type="button" className="search-with-camera" onClick={() => setCameraOpened(!cameraOpened)}>
                    <span>Search Using QR Code</span>
                    <img src={CameraIcon} alt="camera icon" />
                </button>
            </div>
            {
                cameraOpened && (
                    <div className="camera-wrapper">
                        <Scanner
                            onScan={async ([result]) => {
                                setId(result.rawValue);
                                setCameraOpened(false);
                                setPatient(...data.filter(({ id: patientObjectId }) => patientObjectId.toLowerCase().trim() === result.rawValue.toLowerCase().trim()))
                            }}
                        />
                    </div>
                )
            }
        </>
    )
}