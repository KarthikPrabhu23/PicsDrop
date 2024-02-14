import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      startUpload(selectedFile);
      console.log(selectedFile);
    }

    setSelectedFile(null);
  };

  return (
    <div className="text-center mt-15 pt-10">
      <form onSubmit={handleSubmit} className="flex items-center flex-col">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        <button type="submit" className={`btn gap-5 mt-10 ${Boolean(progress) && 'loading'}`}>
          Upload file
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
