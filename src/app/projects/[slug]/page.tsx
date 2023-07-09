import Readme from "@/components/Readme";

export default function Page({ params }) {
  return (
    <main>
      <section>
        <Readme project={params.slug} />
      </section>
    </main>
  );
}
