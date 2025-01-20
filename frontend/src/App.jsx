import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import LogIn from './pages/auth/LogIn.jsx';
import Signup from './pages/auth/Signup.jsx';
import MainLayout from './Layout/MainLayout.jsx';

function App() {
  // const [search, setSearch] = React.useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/" element={<Home search={search} setSearch={setSearch}/>}></Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/jobdetail/:id" element={<JobDetail />}></Route>

        <Route path="/" element={<UserLayout/>}>
        
          <Route element={<Sidebarlayout />}> */}
            {/* user */}
            
              {/* <Route path="userdashboard" element={<UserDashBoard />}></Route>
              <Route
                path="usepProfileCard"
                element={<UsepProfileCard />}
              ></Route>
              <Route path="apply/:id" element={<JobApplicationForm/>}></Route>
              <Route
                path="userupdateprofile"
                element={<Userupdateprofile />}
              ></Route> */}
              {/* <Route
                path="userapplication"
                element={<Userapplication />}
              ></Route>
              <Route
                path="UpdateUserApplication/:id"
                element={<UpdateUserApplication />}
              ></Route>
              <Route
                path="applicationview/:id"
                element={<ApplicationView />}
              ></Route>
             */}
            {/* Recuiter */}

            {/* <Route
              path="/recuiter"
              element={<RecuiterLayout role={"recuiter"}/>}>
              <Route path="addjob" element={<Addjob />}></Route>
              <Route path="updatejob/:id" element={<Updatejob />}></Route>
              <Route
                path="recuiterdashboard"
                element={<RecuiterDashBoard />}
              ></Route> */}

              {/* <Route path="manageJobs" element={<Managejob />}></Route>
              <Route
                path="recuiterProfileCard"
                element={<RecuiterProfileCard />}
              ></Route>
              <Route
                path="recuiterupdateprofile"
                element={<Recuiterupdaterofile />}
              ></Route> */}
              {/* <Route
                path="recuiterapplication"
                element={<Recuiterapplication />}
              ></Route>
            </Route> */}

            {/* Admin */}

            {/* <Route path="/admin" element={<AdminLayout role={"admin"}/>} >
              <Route path="admindashboard" element={<AdminDashBoard />}></Route>
              <Route
                path="adminprofilecard"
                element={<AdminProfileCard />}
              ></Route> */}
              {/* <Route
                path="adminupdateprofile"
                element={<AdminUpdateProfile />}
              ></Route>
              <Route path="manageUsers" element={<ManageUsers />}></Route>
              <Route path="addcategory/" element={<AddCategory />}></Route>
              <Route path="adminStatus" element={<Admin />}></Route>
            </Route> */}
          {/* </Route> */}
        {/* </Route> */}
      </Route>
    )
  );
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
