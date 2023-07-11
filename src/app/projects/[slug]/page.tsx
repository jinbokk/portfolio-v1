import Navbar from "@components/Navbar";
import Readme from "@components/Readme";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section>
      {/* <Navbar
        projects={true}
        navMenus={[
          "eeso-cake-app",
          "JB-NETFLIX",
          "MUSICOR",
          "THE_JINBOK_TIMES",
        ]}
      /> */}
      <Readme project={params.slug} />
    </section>
  );
}
