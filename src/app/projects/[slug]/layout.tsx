import NavbarProjects from "@components/NavbarProjects";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: string;
}) {
  return (
    <>
      <NavbarProjects
        navMenus={[
          "eeso-cake-app",
          "JB-NETFLIX",
          "MUSICOR",
          "THE_JINBOK_TIMES",
        ]}
      />
      <main>{children}</main>
    </>
  );
}
