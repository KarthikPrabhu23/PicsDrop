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
      <ImageGallery />
      <ImageGallery />
      <ImageGallery />
      <ImageGallery />
      <ImageGallery />
    </div>
  );
};

export default Home;
