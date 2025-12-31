import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";

export default async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  console.log(profile);

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
}

export async function generateMetadata({ params: { profileId } }) {
  await connectDB();

  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
  };
}

// این روش هم صفحه را بصورت SSG میسازد

// export async function generateStaticParams() {
//   await connectDB()
//   const profiles = await Profile.find({}, "_id")
//   return profiles.map((p) => ({ profileId: p._id.toString() }))
// }

// async function getProfile(profileId) {
//   await connectDB()
//   const profile = await Profile.findOne({ _id: profileId }).lean()
//   return JSON.parse(JSON.stringify(profile))
// }

//  export default async function ProfileDetails({ params: { profileId } }) {
//   const profile = await getProfile(profileId)

//   if (!profile) return <h3>مشکلی پیش آمده است</h3>

//   return <DetailsPage data={profile} />
// }
