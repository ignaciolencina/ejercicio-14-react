import { useSession } from "../../stores/useSession.js";

const HomeView = () => {
  const { user, isLoggedIn } = useSession();

  console.log(user, isLoggedIn)

  return <div>HomeView</div>;
};
export default HomeView;
