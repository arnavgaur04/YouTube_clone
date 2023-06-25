import { Outlet, Link } from "react-router-dom";

const myStyle = 
  { 
    position: "absolute",
    width:"100%",
    height:"100%",
    top:"0",
    left: "0",
    zIndex: "999",
    cursor: "pointer"
};

const Layout = () => {
    
  return (
    <>
    <div className="top">
    <div className="drawer">
      <span className="material-symbols-outlined menu">
      menu
      </span>
    </div>
    <div className="yt_logo">
    <Link to="/"><span style={myStyle}>
      
      </span></Link>
    </div>

    <div className="search_bar">
    <input type="text" name="text" className="input" placeholder="Search" />
    <button className="search__btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#efeff1"></path>
      </svg>
    </button>
    </div>

    <div className="top_right">
      <div className="video_add">
        <span className="material-symbols-outlined">
        video_call
        </span>
      </div>

      <div className="notification">
        <span className="material-symbols-outlined">
        notifications
        </span>
      </div>

      <div className="profile">

      </div>
    </div>

    </div>
    <div className="whole">
    <div className="left_navbar">
      <nav>
        <ul>
          
            <Link to="/"><li>
            <span className="material-symbols-outlined home">home</span>
              <span className="navbar_text">Home</span>
            </li></Link>
          
            <Link to="/"><li>
              <span className="material-symbols-outlined">
              magic_exchange
              </span>
              <span className="navbar_text">Shorts</span>
              </li></Link>
          
            <Link to="/subscriptions"><li>
            <span className="material-symbols-outlined">
            subscriptions
            </span>
            <span className="navbar_text">Subscriptions</span>
            </li></Link>
          
        </ul>
      </nav>
      
      <nav>
        <ul>
          
            <Link to="/library"><li>
              <span className="material-symbols-outlined">
              video_library
              </span>
              <span className="navbar_text">Library</span>
            </li></Link>
          
            <Link to="/history"><li>
            <span className="material-symbols-outlined">
            history
            </span>
            <span className="navbar_text">History</span>
            </li></Link>
          
            <Link to="/"><li>
              <span className="material-symbols-outlined">
              slideshow
              </span>
              <span className="navbar_text">Your videos</span>
              </li></Link>
              
            <Link to="/liked"><li>
              <span className="material-symbols-outlined">
              thumb_up
              </span>
              <span className="navbar_text">Liked videos</span>
              </li></Link>
          
        </ul>
      </nav>


      <nav>
        <ul>
          <div className="heading_navbar">More from YouTube</div>
            <Link to="/"><li>
            <span className="yt"></span>
              <span className="navbar_text">YouTube Premium</span>
            </li></Link>
          
            <Link to="/"><li>
            <span className="yt"></span>
            <span className="navbar_text">YouTube Studio</span>
            </li></Link>
          
            <Link to="/"><li>
              <span className="yt_music"></span>
              <span className="navbar_text">YouTube Music</span>
              </li></Link>

            <Link to="/"><li>
              <span className="yt_kids"></span>
              <span className="navbar_text">YouTube Kids</span>
              </li></Link>
          
        </ul>
      </nav>

      <nav>
        <ul>
          
            <Link to="/"><li>
            <span className="material-symbols-outlined">settings</span>
              <span className="navbar_text">Settings</span>
            </li></Link>
          
            <Link to="/"><li>
            <span className="material-symbols-outlined">
            flag
            </span>
            <span className="navbar_text">Report history</span>
            </li></Link>
          
            <Link to="/"><li>
              <span className="material-symbols-outlined">
              help
              </span>
              <span className="navbar_text">Help</span>
              </li></Link>

            <Link to="/"><li>
              <span className="material-symbols-outlined">
              sms_failed
              </span>
              <span className="navbar_text">Send feedback</span>
              </li></Link>
          
        </ul>
      </nav>

      <div className="info">
      About  Press  Copyright Contact us Creators Advertise Developers
      Terms Privacy Policy & Safety 
      How YouTube worksTest new features
      © 2023 Google LLC
      </div>

    </div>

    <div className="left_navbar_small">
      <Link to="/"><div>
      <span className="material-symbols-outlined home_small">home</span>
      <span>Home</span>
      </div></Link>
    
      <Link to="/"><div>
        <span className="material-symbols-outlined">magic_exchange</span>
        <span>Shorts</span>
      </div></Link>
    
      <Link to="/subscriptions"><div>
      <span className="material-symbols-outlined">subscriptions</span>
      <span>Subscriptions</span>
      </div></Link>
      
      <Link to="/library"><div>
        <span className="material-symbols-outlined">video_library</span>
        <span>Library</span>
      </div></Link>
    </div>
    
    <div className="main">
      <Outlet />
    </div>
    </div>
    </>
  )
};

export default Layout;