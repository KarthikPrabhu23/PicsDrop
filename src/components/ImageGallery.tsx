const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 mt-13 pt-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">PicDrop</h2>
          <p>Uploaded by </p>
          
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
