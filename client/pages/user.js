import AppLayout from "../components/AppLayout";
import Banner from "../components/Main/Banner/Banner";
import Carousel from "../components/Main/Carousel/Carousel";
import PostCard from "../components/Main/PostCard/PostCard";

const User = () => {
  return (
    <AppLayout>
      <Carousel />
      <Banner />
      <PostCard />
    </AppLayout>
  );
};

export default User;
