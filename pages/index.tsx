import Head from "next/head";
import BreadCrumb from "../components/inc/breadcrumb";
import Footer from "../components/inc/footer";

//Internal Components
import NavBar from "../components/inc/navbar";
import Sidebar from "../components/inc/sidebar";
import Dashboard from "../components/pages/dashboard";

export default function Home() {
  return (
    <div className="bg-gray-100 h-fu">
      {/* Site head */}
      <Head>
        <title>UCP - Dashboard</title>
      </Head>

      {/* Sidebar and Navbar(location/userName) */}
      <Sidebar
        children={
          <>
            <NavBar userName="Ghost" />
            <BreadCrumb
              location="Dashboard"
              list={[{ title: "Dashboard", href: "/" }]}
            />

            <Dashboard/>
            
            <Footer/> 
          </>
        }
      />

      {/* Dashboard */}
      {/* <Dashboard/> */}

    </div>
  );
}
