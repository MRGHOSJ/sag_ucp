import Head from "next/head";

//Internal Components
import NavBar from "../../components/inc/navbar";
import Sidebar from "../../components/inc/sidebar";
import Footer from "../../components/inc/footer";
import Profile from "../../components/pages/profile";
import BreadCrumb from "../../components/inc/breadcrumb";

export default function Stat() {
  return (
    <div className="bg-gray-100 h-fu">
      {/* Site head */}
      <Head>
        <title>UCP - Dashboard</title>
      </Head>
      <Sidebar
        children={
          <>
            <NavBar userName="Ghost" />
            <BreadCrumb
              location="Profile"
              list={[
                { title: "Dashboard", href: "/" },
                { title: "Profile", href: "/profile" },
              ]}
            />
            <Profile userName="Ghost" />
            <Footer />
          </>
        }
      />
    </div>
  );
}
