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

// اجبار به Dynamic Rendering
export const dynamic = "force-dynamic";

export default async function BuyResidentials({ searchParams }) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  console.log("➡️ Fetching profiles from:", `${baseUrl}/api/profile`);

  const res = await fetch(`${baseUrl}/api/profile`, { cache: "no-store" });

  // اگر ارتباط با سرور برقرار نشد
  if (!res.ok) {
    console.error("❌ Fetch error: Response not OK", res.status, res.statusText);
    return <h2>مشکلی در ارتباط با سرور رخ داده است</h2>;
  }

  const data = await res.json();
  console.log("📦 API response in buy-residential:", JSON.stringify(data, null, 2));

  // اگر API خطا برگردوند
  if (data.error) {
    console.error("❌ API returned error:", data.error);
    return <h2>مشکلی در سرور رخ داده است</h2>;
  }

  let finalData = data.data || [];

  // فیلتر بر اساس category
  if (searchParams?.category) {
    console.log("ℹ️ Filtering by category:", searchParams.category);
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  // اگر داده خالی بود
  if (finalData.length === 0) {
    console.warn("⚠️ No profiles found after filtering");
    return <h2>هیچ آگهی‌ای یافت نشد</h2>;
  }

  console.log("✅ Rendering BuyResidentialsPage with", finalData.length, "profiles");

  // نمایش داده‌ها
  return <BuyResidentialsPage data={finalData} />;
}





