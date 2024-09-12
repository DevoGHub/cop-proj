import { useCallback, useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { TextField } from "../textField";

export const ProfileComp = () => {
    const [name, setName] = useState("");
    const [profile, setProfile] = useState({
        age: "",
        sex: "",
        phone: "",
        email: "",
        aadhaar: ""
    });
    const [id, setId] = useState("");
    const naviagte = useNavigate();

    const setAge = (age) => setProfile({
        ...profile,
        age
    });

    const setSex = (sex) => setProfile({
        ...profile,
        sex
    });

    const setPhone = (phone) => setProfile({
        ...profile,
        phone
    });

    const setEmail = (email) => setProfile({
        ...profile,
        email
    });

    const setAadhaar = (aadhaar) => setProfile({
        ...profile,
        aadhaar
    })

    const createProfile = useCallback(() => {
        if (name !== "" &&
            profile.age !== "" &&
            profile.phone !== "" &&
            profile.sex !== "" &&
            profile.email !== "") {
            const num = (Math.floor(Math.random() * 26) + 1).toString();
            if (num.length === 1) setId(24 + "PAT00" + num)
            else setId(24 + "PAT0" + num)
        }
        else alert("Please fill all the details");
    }, [name, profile])

    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <TextField
                    fieldId="name-profile"
                    placeholder="Enter Patient Name"
                    label="Name"
                    value={name}
                    disabled={id !== ""}
                    setValue={setName}
                />
                <TextField
                    fieldId="age-profile"
                    placeholder="Enter Patient Age"
                    label="Age"
                    type="number"
                    value={profile.age}
                    disabled={id !== ""}
                    setValue={setAge}
                />
                <TextField
                    fieldId="sex-profile"
                    placeholder="Enter Patient Sex"
                    label="Sex"
                    type="text"
                    value={profile.sex}
                    disabled={id !== ""}
                    setValue={setSex}
                />
                <TextField
                    fieldId="phone-profile"
                    placeholder="Enter Patient Phone Number"
                    label="Phone Number"
                    type="number"
                    value={profile.phone}
                    disabled={id !== ""}
                    setValue={setPhone}
                />
                <TextField
                    fieldId="email-profile"
                    placeholder="Enter Patient Email"
                    label="Email"
                    type="email"
                    value={profile.email}
                    disabled={id !== ""}
                    setValue={setEmail}
                />
                <TextField
                    fieldId="aadhaar-profile"
                    placeholder="Enter Patient Aadhaar"
                    label="Aadhaar"
                    type="number"
                    value={profile.aadhaar}
                    disabled={id !== ""}
                    setValue={setAadhaar}
                />
            </div>
            <div className="create-patient-wrapper">
                <button type="button" onClick={createProfile} disabled={id !== ""}>Create New Patient</button>
            </div>
            {
                id !== "" &&
                <div className="new-patient-details">
                    <div className="qr-wrapper">
                        <QRCode
                            value={id}
                            viewBox="0 0 200 200"
                            size="200"
                        />
                    </div>
                    <div className="patient-fields">
                        <TextField
                            fieldId="generated-patient"
                            label="Patient ID"
                            disabled
                            value={id}
                        />
                        <button type="button" onClick={() => {
                            naviagte(`/upload/${id}`)
                        }} >Add record for this patient</button>
                    </div>
                </div>
            }
        </div>
    )
}