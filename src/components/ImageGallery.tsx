import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore("images");
  const { docs } = useFirestore("images");
  console.log(docs);

  if (isLoading) {
    const skeletons = [];
    for (let i = 0; i < 5; i++) {
      skeletons.push(
        <div className="inline-flex p-5 m-10 text-center ">
          <div
            key={i}
            className="flex flex-col m-3 p-5 gap-4 w-52 text-center mt-10"
          >
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      );
    }
    return <div className="">{skeletons}</div>;
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 m-5 p-7">
      {images.map((image) => (
        <div
          key={image.ImageURL}
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure className="max-h-[15rem]">
            <img src={image.ImageURL} alt="PicDrop Upload" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PicDrop</h2>
            <p>Uploaded by {image.userEmail} </p>
            {/* <p>URL {image.ImageURL} </p> */}
            <span>Dropped on {image.createAt.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
