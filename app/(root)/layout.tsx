import HomeHeader from "@/app/(root)/HomeHeader";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <HomeHeader />
      <section className="pt-[256px]">
        {children}
      </section>
    </>
  );
}
