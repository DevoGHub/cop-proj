import UploadIcon from '../../assets/images/upload_icon.svg'

export const FileUpload = ({ fieldId, label, value = null, setValue }) => {

    return (
        <div className="file-upload-wrapper">
            <label htmlFor={fieldId}>
                <div>{label}</div>
                <input id={fieldId} type="file" onChange={(evt) => {
                    if (evt.target.files.length !== 0) {
                        const reader = new FileReader()
                        reader.readAsDataURL(evt.target.files[0])
                        reader.addEventListener('load', (e) => setValue(e.target.result))
                    }
                }} hidden accept="image/*" />
                {
                    !value && <div type="button" className="upload-div">
                        <span>Upload File</span>
                        <img src={UploadIcon} alt="camera icon" className='icon' />
                    </div>
                }
                {
                    value && <img src={value} alt="preview-image" className='preview-img' />
                }
            </label>
        </div>
    )
}