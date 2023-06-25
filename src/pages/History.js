import { useState, useEffect } from 'react';
import $ from 'jquery';

const arr = [1, 2, 3 ,4, 5, 6, 7, 8];
const History = () => {
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

  $( ".menu" ).on( "click", function() {
    var hidden = $('.left_navbar');
    var history_main = $('.history_main');
    if (!hidden.hasClass('hidden')){
        hidden.addClass('hidden');
        history_main.css("width","calc(98vw - 86px)");
        history_main.css("margin-left","86px");
    } else {
        hidden.removeClass('hidden');
        history_main.css("width","calc(98vw - 220px)");
        history_main.css("margin-left","220px");
    }
  } );

//   $(function() {
//     var lib_vids = $(".history_holder");
//     var lib_main = $(".history_main");
//     lib_vids.css("width", 220*Math.floor((lib_main.width()+10-200)/220));
//   });

//   $(window).on('resize', function(){
//     var lib_vids = $(".history_holder");
//     var lib_main = $(".history_main");
//     lib_vids.css("width", 220*Math.floor((lib_main.width()+10-200)/220));
//   });


  return(
      <>
      <div className="history_main">
        <div className="history_holder">
          <div className="history_vids">
          <div className='manage_vids watch_history'>
            <div className="watch_history_text">Watch history</div>
          </div>
          
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className="history_text">Today</div>
            </div>
          </div>
          <div className='history_vids_holder'>
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
                        <div className="hdesc">{i.snippet.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
          <div className="history_vids">
          <div className='manage_vids'>
            <div className='manage_vids_buttons'>
              <div className="history_text">Yesterday</div>
            </div>
          </div>
          <div className='history_vids_holder'>
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
                    <div className="thumbnail" style={{backgroundImage: "url(' " + (i.snippet.thumbnails.maxres === undefined ? i.snippet.thumbnails.standard.url : i.snippet.thumbnails.maxres.url) + "')"}}>
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
                        <div className="hdesc">{i.snippet.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
          
        </div>

        <div className="about_history_info">
            <div className="about_history_holder">
                <div className="about_history_pic_holder">
                    <div className="input-wrapper">
                      <div className="search"><span className="material-symbols-outlined">search</span></div>
                      <input className="input-box" type="text" placeholder="Search watch history" />
                      <span className="underline"></span>
                    </div>
                </div>
                <div className="about_history_infoo">
                    <div className="about_history_subscriptions about_history_data">
                        <div className="name">History type</div>
                    </div>
                    <div className="about_history_uploads about_history_data">
                        <div className="name">Watch history</div>
                        <div className="value">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input type="radio" name="radio-group" id="option1"/>
                            <span className="radio-checkmark"></span>
                          </label>
                        </div>
                        </div>
                    </div>
                    <div className="about_history_likes about_history_data">
                        <div className="name">Community</div>
                        <div className="value">
                        <div className="radio-wrapper">
                          <label className="radio-button">
                            <input type="radio" name="radio-group" id="option1"/>
                            <span className="radio-checkmark"></span>
                          </label>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="about_history_options_holder">
                    <div className="about_history_clear">
                      <div className="about_history_options_holder_text"><span className="material-symbols-outlined">delete</span></div>
                      <div className="about_history_options_holder_text">Clear all watch history</div>
                    </div>
                    <div className="about_history_pause">
                      <div className="about_history_options_holder_text"><span className="material-symbols-outlined">pause_circle</span></div>
                      <div className="about_history_options_holder_text">Pause watch history</div>
                    </div>
                    <div className="about_history_manage">
                      <div className="about_history_manage_holder">
                        <div className="about_history_options_holder_text"><span className="material-symbols-outlined">settings</span></div>
                        <div className="about_history_options_holder_text">Manage all history</div>
                      </div>
                      <div className="about_history_manage_sub">
                        <div>Watch and search history</div>
                        <div>Comments</div>
                        <div>Live chat</div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    )

  };
  
  
  export default History;