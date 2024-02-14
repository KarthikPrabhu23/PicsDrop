import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />

      <div className="divider divider-accent m-13"></div>
      <ImageGallery />
    </div>
  );
};

export default Home;
