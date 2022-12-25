import Head from "next/head";
import { useRouter } from "next/router";

//Internal Components
import NavBar from "../../components/inc/navbar";
import Sidebar from "../../components/inc/sidebar";
import Footer from "../../components/inc/footer";
import Profile from "../../components/pages/profile";
import BreadCrumb from "../../components/inc/breadcrumb";



export default function Stat() {
    const { query } = useRouter();
    const userName = query["method"] as string;
    
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
            <Profile userName={userName}/>
            <Footer />
          </>
        }
      />
    </div>
  );
}
