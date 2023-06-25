import { useState, useEffect } from 'react';
import $ from 'jquery';
import Test from './test.js'

$(function() {
  console.log("loaded");
  $("li")[0].click();
  console.log($("li")[0].style.backgroundColor);
  $("li")[0].style.backgroundColor = "#272727";
});


const arr = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 1, 2, 3 ,4, 5, 6, 7, 8, 9, 1, 2, 3 ,4, 5, 6, 7, 8, 9, 1];
const Subscription = () => {
  $(function() {
    var subs_vids = $(".subscription_vids");
    var subs_main = $(".subscription_main");
    subs_vids.css("width", 220*Math.floor((subs_main.width()+10)/220));
  });

  $(".list").on('click', function(){
    $(".subscription_vids_holder").css("flex-direction", "column");
    $(".vids").css("width", "100%");
    $(".vids").css("height", "170px");
    $(".vids").css("flex-direction", "row");
    $(".vids").css("cursor", "default");
    $(".vids").css("margin-left", "30px");
    $(".vids").css("border-bottom", "1px solid #3f3f3f");
    $(".thumbnail").css("width", "246px");
    $(".thumbnail").css("height", "138px");
    $(".thumbnail").css("cursor", "pointer");
    $(".title").css("font-size", "18px");
    $(".chnl_group").css("display", "flex");
    $(".chnl_group").css("flex-direction", "row");
    $(".chnl_group").css("gap", "10px");
    $(".chnl_group").css("margin-top", "5px");
    $(".chnl_text").css("width", "50%");
    $(".chnl_name").css("margin-top", "0px");
    $(".vid_desc").css("cursor", "pointer");
    $(".desc").css("display", "-webkit-box");
    $(".chnl_contents").css("display", "flex");
    $(".chnl_contents").css("margin-left", "30px");
    $(".subscription_vids_holder").css("gap", "30px");
  });
  
  $(".grid_view").on('click', function(){
    $(".subscription_vids_holder").css("flex-direction", "row");
    $(".vids").css("width", "210px");
    $(".vids").css("height", "210px");
    $(".vids").css("flex-direction", "column");
    $(".vids").css("margin-left", "0px");
    $(".vids").css("cursor", "pointer");
    $(".vids").css("border-bottom", "0px");
    $(".thumbnail").css("width", "210px");
    $(".thumbnail").css("height", "118px");
    $(".title").css("font-size", "14px");
    $(".chnl_group").css("display", "flex");
    $(".chnl_group").css("flex-direction", "column");
    $(".chnl_group").css("gap", "0px");
    $(".chnl_group").css("margin-top", "0px");
    $(".chnl_text").css("width", "auto");
    $(".chnl_name").css("margin-top", "0.4vw");
    $(".desc").css("display", "none");
    $(".chnl_contents").css("display", "none");
    $(".chnl_contents").css("margin-left", "0px");
    $(".subscription_vids_holder").css("gap", "10px");
  });

  const [users, setUsers] = useState([]);
  const api = "AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc";
  const fetchUserData = () => { fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc&maxResults=30", {
      headers: {
          Authorization : api,
          Accept: "application/json"
      }
  }).then((response)=>{
      return response.json()
  }).then((val)=>{
        setUsers(val.items)
      });}

      useEffect(() => {
        fetchUserData()
      }, [])


  return(
      <>
      <div className="subscription_main">
        <div className="subscription_vids">
        <div className='manage_vids'>
          <div className='manage_vids_text'>
            Today
          </div>
          
          <div className='manage_vids_buttons'>
            <div className='manage_vids_text'>Manage</div>
            <div className='grid_view'><span className="material-symbols-outlined">grid_view</span></div>
            <div className='list'><span className="material-symbols-outlined">list</span></div>
          </div>
        </div>
        <div className='subscription_vids_holder'>
          {users.length === 0 ? (
          arr.map(() => 
          <div className="vids">
            <div className="loader">
              <div className="wrapper">
                <div className="line-1"></div>
                <div className='ele'>
                  <div className='lines'>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
          
          ) : (

            users?.map(i => (
              <div className="chnl_holder">
                <div className="chnl_contents">
                  <div className="chnl_img"></div>
                  <div className="chnl">{i.snippet.channelTitle}</div>
                </div>
                <div className="vids">
                  <div className="thumbnail" style={{backgroundImage: "url(' " + (i.snippet.thumbnails.maxres === undefined ? i.snippet.thumbnails.high.url : i.snippet.thumbnails.maxres.url) + "')"}}>
                  </div>
                  <div className="chnl_text">
                    <div className="vid_desc">
                      <div className="main_desc">
                        <div className='title'>{i.snippet.title}</div>
                        <span className="material-symbols-outlined">more_vert</span>
                      </div>
                      <div className='chnl_group'>
                        <div className="chnl_name">{i.snippet.channelTitle}</div>
                        <div className="vid_stats">
                          <div className="vid_views">300k views <Test /></div>
                          <div className="partition">
                            <div className="partition_inside"></div>
                          </div>
                          <div className="vid_date">1 day ago</div>
                        </div>
                      </div>
                      <div className="desc">{i.snippet.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

        
        </div>
        </div>
      </div>
      </>
    )

  };
  
  
  export default Subscription;