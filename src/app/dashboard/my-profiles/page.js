import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import MyProfilesPage from "@/template/MyProfilesPage";

async function Myprofiles() {
  await connectDB();

  const session = await getServerSession(authOptions);

  const user = await User.findOne({ email: session.user.email });

  const profiles = await Profile.find({ userId: user._id });

  return <MyProfilesPage profiles={profiles} />;
}

export default Myprofiles;
