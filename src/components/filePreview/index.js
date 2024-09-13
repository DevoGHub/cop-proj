export const FilePreview = ({ url, label, alt }) => {
    return (
        <div className="file-upload-wrapper">
            <div>{label}</div>
            <img src={url} alt={alt} className='preview-img' />
        </div>
    )
}