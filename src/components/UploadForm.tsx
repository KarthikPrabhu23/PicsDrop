const UploadForm = () => {
  return (
    <div className="text-center mt-15 pt-10">
      <form className="flex items-center flex-col">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        <button className="btn gap-5 mt-10"> Upload file</button>
      </form>
    </div>
  );
};

export default UploadForm;
