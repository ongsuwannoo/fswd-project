import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client'

const UPLOAD_FILE = gql`
mutation uploadFile($file: Upload!) {
  uploadFile(file: $file) {
    url
  }
}
`
const UploadForm = () => {
  const [images, setImages] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => {

      setImages([...images, data.uploadFile.url])
      console.log(images);
    }
  })

  const handleFileChange = (e) => {
    const files = e.target.files
    if (!files) return
    Array.from(files).forEach(file => uploadFile({ variables: { file } }))
  }
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} multiple accept="image/png, image/jpeg" />
      {
        images.map(url => {
          return <img src={url} alt="img" />
        })
      }
    </div>
  );
}

export default UploadForm;
