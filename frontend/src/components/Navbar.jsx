import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={'/'}><div
            className="logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "12px",
            }}
          >
            <i
              className="fa-solid fa-briefcase"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
            &nbsp;&nbsp;
            <span
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Jobs
            </span>
          </div></Link>
          {/* {
            key && user ?
             <div className="btn-group dropstart">
               <img src={user?.avatar} alt="" style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
              <button
                className="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ outline: "none", border: "none", color: "white" }}
              >
                 Hi, {user?.firstname}  {user?.lastname} 
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                style={{ width: "20px" }}
              >
                <li>
                  {
                    user?.roles === "admin" ? ( <Link to={'/admin/admindashboard'} className="dropdown-item">
                      Dashboard
                    </Link>) : (user?.roles === "recuiter" ? (<Link to={'/recuiter/recuiterdashboard'} className="dropdown-item">
                      Dashboard
                    </Link>) : (<Link to={'userdashboard'} className="dropdown-item">
                    Dashboard
                  </Link>))
                  }
                  
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Link to={'/'}>
                <li>
                  <button className="dropdown-item" onClick={handleLogOut}>
                    LogOut
                  </button>
                </li>
                </Link>
              </ul>
            </div> 
            :  */}
          <>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginInline:"20px"}}>
            <Link to={"/login"}>
            <button className="btn custom-btn">LogIn</button>
            </Link>
           <Link to={"/signup"}>
           <button className="btn custom-btn" style={{marginInline:"10px"}}>SignUp</button>
           </Link>
          </div>
           
          </>
          {/* } */}
          
        </div>
      </nav>
    </>
    </>
  )
}

export default Navbar
