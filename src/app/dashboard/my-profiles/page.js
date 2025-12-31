import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import MyProfilesPage from "@/template/MyProfilesPage";

async function Myprofiles() {
  // await connectDB();
  // const session = await getServerSession(authOptions);

  // const [user] = await User.aggregate([
  //   { $match: { email: session.user.email } },
  //   {
  //     $lookup: {
  //       from: "profiles",
  //       foreignField: "userId",
  //       localField: "_id",
  //       as: "profiles",
  //     },
  //   },
  // ]);


await connectDB();    //این روش گرفتن آگهی های کاربر از روش بالایی راحت تر است

const session = await getServerSession(authOptions);

const user = await User.findOne({ email: session.user.email });

const profiles = await Profile.find({ userId: user._id });


  return <MyProfilesPage profiles={profiles} />
}

export default Myprofiles;


