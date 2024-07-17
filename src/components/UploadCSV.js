import React from 'react';

const UploadCSV = ({ handleFileUpload }) => {
    return (
        <div>
            <input
                type = "file"
                accept = ".csv"
                onChange={(e) => handleFileUpload(e.target.files[0])}
            />
        </div>
    );
}

export default UploadCSV; 