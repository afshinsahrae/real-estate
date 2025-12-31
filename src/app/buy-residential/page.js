import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidentials({searchParams}) {
  const res = await fetch("/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  let finalData=data.data

  if(searchParams.category){
    finalData=finalData.filter(i=>i.category===searchParams.category)
  }

  if (data.error) return <h2>مشکلی پیش آمده است</h2>;

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
