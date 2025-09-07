import SideNavigation from "@/components/navigation/side-navigation";
import TopNavigation from "@/components/navigation/top-navigation";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <TopNavigation />
        {/* Page content here */}
        <div className="">
        {children}
        </div>
      </div>
     {/* side navigation */}
     <SideNavigation />
    </div>
  );
}

export default HomeLayout;
