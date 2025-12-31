import Profile from "@/models/Profile";
import PublishDetailsPage from "@/template/publishDetailsPage";
import connectDB from "@/utils/connectDB";

export default async function PublishProfileDetails({ params: { profileId } }) {
  console.log(profileId);

  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  console.log(profile);

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

 

  return <PublishDetailsPage data={profile} />;
}
