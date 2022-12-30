import Head from "next/head";
import BreadCrumb from "../../components/inc/breadcrumb";
import Footer from "../../components/inc/footer";

//Internal Components
import NavBar from "../../components/inc/navbar";
import Sidebar from "../../components/inc/sidebar";
import Map from "../../components/pages/map";

export default function Home() {
  return (
    <div className="bg-gray-100 h-fu">
      {/* Site head */}
      <Head>
        <title>UCP - Map</title>
      </Head>

      {/* Sidebar and Navbar(location/userName) */}
      <Sidebar
        children={
          <>
            <NavBar userName="Ghost" />
            <BreadCrumb
              location="Map"
              list={[{ title: "Dashboard", href: "/" },{ title: "Live", href: "" },{ title: "Map", href: "/map" }]}
            />

            <Map/>

            <Footer/> 
          </>
        }
      />

      {/* Dashboard */}
      {/* <Dashboard/> */}

    </div>
  );
}
