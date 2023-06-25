import { useState, useEffect } from 'react';
import $ from 'jquery';

const arr = [1, 2, 3 ,4, 5, 6, 7, 8];
const Library = () => {
  const [users, setUsers] = useState([]);
  const api = "AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc";
  const fetchUserData = () => { fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc&maxResults=8", {
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

  // $( ".menu" ).on( "click", function() {
  //   var hidden = $('.left_navbar');
  //   var library_main = $('.library_main');
  //   if (!hidden.hasClass('hidden')){
  //       hidden.addClass('hidden');
  //       library_main.css("width","calc(98vw - 86px)");
  //       library_main.css("margin-left","86px");
  //   } else {
  //       hidden.removeClass('hidden');
  //       library_main.css("width","calc(98vw - 220px)");
  //       library_main.css("margin-left","220px");
  //   }
  // } );

  $(function() {
    var lib_vids = $(".library_holder");
    var lib_main = $(".library_main");
    lib_vids.css("width", 220*Math.floor((lib_main.width()+10-200)/220));
  });

  $(window).on('resize', function(){
    var lib_vids = $(".library_holder");
    var lib_main = $(".library_main");
    lib_vids.css("width", 220*Math.floor((lib_main.width()+10-200)/220));
  });


  return(
      <>
      <div className="library_main">
        <div className="library_holder">
          <div className="library_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className='history'><span className="material-symbols-outlined">history</span></div>
              <div className="history_text">History</div>
            </div>
            
            <div className='manage_vids_buttons'>
              <div className='manage_vids_text'>See all</div>
            </div>
          </div>
          <div className='library_vids_holder'>
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
                            <div className="vid_views">300k views</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_date">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
          <div className="library_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className='history'><span className="material-symbols-outlined">schedule</span></div>
              <div className="history_text">Watch later</div>
            </div>
            
            <div className='manage_vids_buttons'>
              <div className='manage_vids_text'>See all</div>
            </div>
          </div>
          <div className='library_vids_holder'>
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
                            <div className="vid_views">300k views</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_date">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
          <div className="library_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className='history'><span className="material-symbols-outlined">playlist_play</span></div>
              <div className="history_text">Playlists</div>
            </div>
            
            <div className='manage_vids_buttons'>
              <div className='manage_vids_text'>See all</div>
            </div>
          </div>
          <div className='library_vids_holder'>
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
                            <div className="vid_views">300k views</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_date">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
          <div className="library_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className='history'><span className="material-symbols-outlined">thumb_up</span></div>
              <div className="history_text">Liked videos</div>
            </div>
            
            <div className='manage_vids_buttons'>
              <div className='manage_vids_text'>See all</div>
            </div>
          </div>
          <div className='library_vids_holder'>
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
                            <div className="vid_views">300k views</div>
                            <div className="partition">
                              <div className="partition_inside"></div>
                            </div>
                            <div className="vid_date">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
          <div className="clips_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className='history'><span className="material-symbols-outlined">cut</span></div>
              <div className="history_text">Your clips</div>
            </div>
          </div>
          <div className='library_vids_holder clips_vids_holder'>
            Clip and share your favorite moments. Your list shows up right here.
          </div>
          </div>
        </div>

        <div className="about_info">
            <div className="about_holder">
                <div className="about_pic_holder">
                    <div className="about_pic"></div>
                    <div className="about_name">Arnav Gaur</div>
                </div>
                <div className="about_infoo">
                    <div className="about_subscriptions about_data">
                        <div className="name">Subscriptions</div>
                        <div className="value">420</div>
                    </div>
                    <div className="about_uploads about_data">
                        <div className="name">Uploads</div>
                        <div className="value">0</div>
                    </div>
                    <div className="about_likes about_data">
                        <div className="name">Likes</div>
                        <div className="value">1009</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    )

  };
  
  
  export default Library;