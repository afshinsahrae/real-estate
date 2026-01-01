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

  const res = await fetch(`${baseUrl}/api/profile`, { cache: "no-store" });

  if (!res.ok) {
    return <h2>مشکلی پیش آمده است</h2>;
  }

  const data = await res.json();
  let finalData = data.data;

  if (searchParams?.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  if (data.error) return <h2>مشکلی پیش آمده است</h2>;

  return <BuyResidentialsPage data={finalData} />;
}





