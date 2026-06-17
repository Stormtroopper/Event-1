import NavBar from "@/component/NavBar";
import React from "react";
import { Link } from "react-router-dom";
const Home = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      {/* <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-400">
          PDF Extractor
        </h1> */}

      {/* <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </nav> */}
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        {loggedIn ?
          <>
            
            <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Welcome Back Noob!
            </h2>

          </>
          : <>

            <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Extract Text from PDFs
              <span className="block text-blue-400">
                Quickly and Securely
              </span>
            </h2>

            <p className="max-w-2xl mt-6 text-lg text-slate-400">
              Upload your Files and extract readable text in seconds. View your
              extraction history and access your previously processed files anytime.
            </p>
          </>}
        {
          loggedIn ?
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link
                to='/upload'
                className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Upload File
              </Link>

              <Link
                to='/history'
                className="px-6 py-3 font-semibold border border-slate-700 rounded-lg hover:bg-slate-800 transition"
              >
                View History
              </Link>
            </div>
            : <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link
                to='/'
                className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                About Us
              </Link>


            </div>}
      </section>

      {/* Feature Section */}
      <section className="grid gap-6 px-8 pb-20 md:grid-cols-3">
        <div className="p-6 border bg-slate-900 border-slate-800 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400">
            Easy Upload
          </h3>
          <p className="mt-3 text-slate-400">
            Upload files directly from your device with a simple and clean
            interface.
          </p>
        </div>

        <div className="p-6 border bg-slate-900 border-slate-800 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400">
            Fast Extraction
          </h3>
          <p className="mt-3 text-slate-400">
            Extract text content from documents quickly and efficiently.
          </p>
        </div>

        <div className="p-6 border bg-slate-900 border-slate-800 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400">
            Secure History
          </h3>
          <p className="mt-3 text-slate-400">
            Access your past extractions securely through your authenticated
            account.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;