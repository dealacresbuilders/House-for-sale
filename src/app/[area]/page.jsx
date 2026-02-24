import FilterProperties from "./FilterProperties";
import Properties from "@/components/Proprtes"; // path check kar lena

export default async function Page({ params }) {
  const resolvedParams = await params;
  const area = resolvedParams?.area;

  return (
    <>
      {/* 🔥 Filtered Properties (Location Based) */}
      <FilterProperties area={area} />

      {/* 🔥 Divider */}
      <div className="">
        <div className="max-w-7xl mx-auto  border-white/10">
          {/* <h2 className="text-3xl font-bold text-white text-center mb-10">
            Explore More Premium Shops
          </h2> */}
        </div>
      </div>

      {/* 🔥 All Domain Properties */}
      <Properties />
    </>
  );
}