import { TextField } from "../textField"

export const ProfileView = ({ patient }) => {

    if (!patient) {
        return (
            <div className="no-profile-comp">
                Profile Not Found. Search using Patient ID.
            </div>
        )
    }

    return (
        <div className="profile-view-wrapper">
            <span>Patient Profile</span>
            <div className="profile-wrapper">
                <TextField
                    fieldId="name-profile"
                    placeholder="Enter Patient Name"
                    label="Name"
                    value={patient.name}
                    disabled
                />
                <TextField
                    fieldId="age-profile"
                    placeholder="Enter Patient Age"
                    label="Age"
                    type="number"
                    value={patient.profile.age}
                    disabled
                />
                <TextField
                    fieldId="sex-profile"
                    placeholder="Enter Patient Sex"
                    label="Sex"
                    type="text"
                    value={patient.profile.sex}
                    disabled
                />
                <TextField
                    fieldId="phone-profile"
                    placeholder="Enter Patient Phone Number"
                    label="Phone Number"
                    type="number"
                    value={patient.profile.phone}
                    disabled
                />
                <TextField
                    fieldId="email-profile"
                    placeholder="Enter Patient Email"
                    label="Email"
                    type="email"
                    value={patient.profile.email}
                    disabled
                />
                <TextField
                    fieldId="aadhaar-profile"
                    placeholder="Enter Patient Aadhaar"
                    label="Aadhaar"
                    type="number"
                    value={patient.profile.aadhaar}
                    disabled
                />
            </div>
        </div>
    )
}