// import BuyResidentialsPage from "@/template/BuyResidentialsPage";

// async function BuyResidentials({ searchParams }) {
//   const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/profile`, {
//     cache: "no-store",
//   });

//   const data = await res.json();

//   let finalData = data.data;

//   if (searchParams.category) {
//     finalData = finalData.filter((i) => i.category === searchParams.category);
//   }

//   if (data.error) return <h2>مشکلی پیش آمده است</h2>;

//   return <BuyResidentialsPage data={finalData} />;
// }

// export default BuyResidentials;
/////////


import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

// اجبار به Dynamic Rendering
export const dynamic = "force-dynamic";

export default async function BuyResidentials({ searchParams }) {
  try {
    console.log("➡️ Connecting to database...");
    await connectDB();

    console.log("➡️ Fetching published profiles from DB...");
    const profiles = await Profile.find({ published: true }).select("-userId");

    let finalData = profiles;

    if (searchParams?.category) {
      console.log("ℹ️ Filtering by category:", searchParams.category);
      finalData = finalData.filter((i) => i.category === searchParams.category);
    }

    if (finalData.length === 0) {
      console.warn("⚠️ No profiles found after filtering");
      return <h2>هیچ آگهی‌ای یافت نشد</h2>;
    }

    console.log("✅ Rendering BuyResidentialsPage with", finalData.length, "profiles");
    return <BuyResidentialsPage data={finalData} />;
  } catch (error) {
    console.error("❌ Error in buy-residential page:", error.message);
    return <h2>مشکلی در سرور رخ داده است</h2>;
  }
}