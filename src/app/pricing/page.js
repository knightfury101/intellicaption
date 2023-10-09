import PageHeaders from "@/components/PageHeaders";

export default function PricingPage() {
  return (
    <div>
      <PageHeaders
        h1Text={"Check Out Our Pricing (LOL!)"}
        h2Text={"You Don't Have To Pay For Anything, Just Use It And Have Fun"}
      />
      <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
        <h3 className="font-bold text-3xl text-center">Free</h3>
        <h4>Free Forever</h4>
      </div>
    </div>
  );
}
