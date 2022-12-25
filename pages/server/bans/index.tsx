import Head from "next/head";
import BreadCrumb from "../../../components/inc/breadcrumb";
import Footer from "../../../components/inc/footer";

//Internal Components
import NavBar from "../../../components/inc/navbar";
import Sidebar from "../../../components/inc/sidebar";
import Logs from "../../../components/pages/logs";

export default function Home() {
  return (
    <div className="bg-gray-100 h-fu">
      {/* Site head */}
      <Head>
        <title>UCP - Ban List</title>
      </Head>

      {/* Sidebar and Navbar(location/userName) */}
      <Sidebar
        children={
          <>
            <NavBar userName="Ghost" />
            <BreadCrumb
              location="Bans"
              list={[{ title: "Dashboard", href: "/" },{ title: "Server", href: "" },{ title: "Bans", href: "/bans" }]}
            />

            <Logs/>

            <Footer/> 
          </>
        }
      />

      {/* Dashboard */}
      {/* <Dashboard/> */}

    </div>
  );
}
