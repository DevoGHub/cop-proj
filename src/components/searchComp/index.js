import { useState } from "react";
import CameraIcon from '../../assets/images/camera_icon.svg';
import SearchIcon from '../../assets/images/search_icon.svg';
import { TextField } from "../textField";

export const SearchComp = ({ title }) => {
    const [id, setId] = useState("");

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <TextField label="Patient ID" placeholder="Enter Patient ID" fieldId="patientId" />
                <button type="button" className="search-btn">
                    <img src={SearchIcon} alt="search icon" />
                </button>
            </div>
            <span className="or-span">or</span>
            <button type="button" className="search-with-camera">
                <span>Search Using QR Code</span>
                <img src={CameraIcon} alt="camera icon" />
            </button>
        </div>
    )
}