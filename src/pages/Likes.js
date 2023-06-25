import { useState, useEffect } from 'react';
import $ from 'jquery';
const arr = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10];
const Likes = () => {
  const [users, setUsers] = useState([]);
  const api = "AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc";
  const fetchUserData = () => { fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc&maxResults=10", {
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
      }, []);

  $( ".menu" ).on( "click", function() {
    var hidden = $('.left_navbar');
    var like_main = $('.like_main');

    if ($(window).width() > 1300) {
      if (!hidden.hasClass('hidden')){
          hidden.addClass('hidden');
          like_main.css("width","calc(100vw - 88px)");
          like_main.css("margin-left","86px");
      } else {
          hidden.removeClass('hidden');
          like_main.css("width","calc(100vw - 220px)");
          like_main.css("margin-left","220px");
        }
      }
      
      else
      {
        if (!hidden.hasClass('hidden')){
          hidden.addClass('hidden');
          like_main.css("width","calc(100vw - 88px)");
          $(".main").css("opacity", "1");
          like_main.css("margin-left","86px");
      } else {
          hidden.removeClass('hidden');
          $(".main").css("opacity", "0.4");
          like_main.css("width","calc(100vw - 88px)");
          like_main.css("margin-left","86");
      }
    }
  } );

  $(window).on('resize', function(){
    var hidden = $('.left_navbar');
    var like_main = $('.like_main');
    var front = $('.front');

    if (hidden.hasClass('hidden')) {
      like_main.css("width","calc(100vw - 88px)");
      like_main.css("margin-left","86px");
    } else {
      like_main.css("width","calc(100vw - 220px)");
      like_main.css("margin-left","220px");
    }

    if ($(this).width() < 1080) {
      front.css("width","calc(100vw - 88px)");
    }
    else{
      front.css("width","100%");
    }
  });

  return(
      <>
      <div className="like_main">
        <div className="like_holder">
          <div className="like_vids">
          <div className='like_vids_holder'>
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
                  <div className="vids">
                    <div className="vid_number">{users.indexOf(i)+1}</div>
                    <div className="thumbnail" style={{backgroundImage: "url(' " + (i.snippet.thumbnails.maxres === undefined ? i.snippet.thumbnails.high.url : i.snippet.thumbnails.maxres.url) + "')"}}>
                    </div>
                    <div className="chnl_text">
                      <div className="vid_desc">
                        <div className="main_desc">
                          <div className='title'>{i.snippet.title}</div>
                        </div>
                        <div className='chnl_group'>
                          <div className="vid_stats">
                            <div className="chnl_name">{i.snippet.channelTitle}</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_views">300k views</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_date">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vert_div"><span className="material-symbols-outlined">more_vert</span></div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
        </div>
        
        {users.length !== 0 ? (
        <div className='like_info_holder' style={{backgroundImage: "url(' " + (users[0].snippet.thumbnails.maxres === undefined ? users[0].snippet.thumbnails.high.url : users[0].snippet.thumbnails.maxres.url) + "')"}}>
            <div className="front"></div>
            <div className='like_info_profile'>
                {users.length !== 0 ? (
                <div className='like_info_thumbnail' style={{backgroundImage: "url(' " + (users[0].snippet.thumbnails.maxres === undefined ? users[0].snippet.thumbnails.high.url : users[0].snippet.thumbnails.maxres.url) + "')"}}></div>
                ) : (
                <div className='like_info_thumbnail'></div>
                )}
                <div className="like_info_container">
                    <div className='like_info_text'>Liked videos</div>
                    <div className="like_profile_info_options">
                        <div className="like_profile_name_info">
                            <div className="like_profile_name">Arnav Gaur</div>
                            <div className="like_profile_info">
                                <div className="like_profile_info_val">{users.length + " videos"}</div>
                                <div className="like_profile_info_val">No views</div>
                                <div className="like_profile_info_val">Updated today</div>
                            </div>
                        </div>
                        <div className="like_profile_options">
                            <div className="like_profile_options_val"><span className="material-symbols-outlined">vertical_align_bottom</span></div>
                            <div className="like_profile_options_val"><span className="material-symbols-outlined">more_vert</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="like_profile_type">
                <div className="like_profile_type_val like_play">
                    <div className='like_profile_type_val_val'><span className="material-symbols-outlined play">play_arrow</span></div>
                    <div className='like_profile_type_val_val'>Play all</div>
                </div>
                <div className="like_profile_type_val like_shuffle">
                    <div className='like_profile_type_val_val'><span className="material-symbols-outlined">shuffle</span></div>
                    <div className='like_profile_type_val_val'>Shuffle</div>
                </div>
            </div>
        </div>
    //   </div>
        ) : (
        <div className='like_info_holder'>
            <div className='like_info_profile'>
                {users.length !== 0 ? (
                <div className='like_info_thumbnail' style={{backgroundImage: "url(' " + (users[0].snippet.thumbnails.maxres === undefined ? users[0].snippet.thumbnails.high.url : users[0].snippet.thumbnails.maxres.url) + "')"}}></div>
                ) : (
                <div className='like_info_thumbnail'></div>
                )}
                <div className="like_info_container">
                    <div className='like_info_text'>Liked videos</div>
                    <div className="like_profile_info_options">
                        <div className="like_profile_name_info">
                            <div className="like_profile_name">Arnav Gaur</div>
                            <div className="like_profile_info">
                                <div className="like_profile_info_val">{users.length + " videos"}</div>
                                <div className="like_profile_info_val">No views</div>
                                <div className="like_profile_info_val">Updated today</div>
                            </div>
                        </div>
                        <div className="like_profile_options">
                            <div className="like_profile_options_val"><span className="material-symbols-outlined">vertical_align_bottom</span></div>
                            <div className="like_profile_options_val"><span className="material-symbols-outlined">more_vert</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="like_profile_type">
                <div className="like_profile_type_val like_play">
                    <div className='like_profile_type_val_val'><span className="material-symbols-outlined play">play_arrow</span></div>
                    <div className='like_profile_type_val_val'>Play all</div>
                </div>
                <div className="like_profile_type_val like_shuffle">
                    <div className='like_profile_type_val_val'><span className="material-symbols-outlined">shuffle</span></div>
                    <div className='like_profile_type_val_val'>Shuffle</div>
                </div>
            </div>
        </div>
    //   </div>
        )}
        </div>
      </>
    )

  };
  
  
  export default Likes;