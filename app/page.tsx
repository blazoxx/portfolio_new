import SiteLoader from "@/components/layout/SiteLoader";

export default function Home() {
  return (
    <main>
      <SiteLoader />

      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">CASII</h1>
      </section>
    </main>
  );
}