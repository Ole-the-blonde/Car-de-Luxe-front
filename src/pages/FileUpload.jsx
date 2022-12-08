import service from "../api/apiHandler";

function FileUpload({ setImage }) {
  const uploadImage = async (image) => {
    return await service
      .post("/upload", image)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleFileUpload = (e) => {
    const file = new FormData();
    file.append("myFile", e.target.files[0]);
    console.log("the file", file);

    uploadImage(file)
      .then((response) => {
        setImage(response.path);
        console.log(response);
      })
      .catch((err) => console.log("Error while uploading", err));
  };
  return <input type="file" name="myFile" onChange={handleFileUpload} />;
}

export default FileUpload;
