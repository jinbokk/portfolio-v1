import Readme from "@/components/Readme";

export default function Page({ params }) {
  return <Readme project={params.slug} />;
}
