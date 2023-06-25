import { useState, useEffect } from 'react';
import $ from 'jquery';
import Test from './test.js'

function Scroll() {
  return (
    <>
      <div className="bar_ele">
        Comedy
      </div>
    </>
  )
}


const arr = [1, 2, 3 ,4, 5, 6, 7, 8, 9];
const arr_n = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 1, 1, 1 ,1, 1, 1, 1,1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {

  $( ".right_shift" ).on( "click", function() {
      if ($(".scroll_top").width() + $(".scroll_top").scrollLeft() < $(".scroll_top").prop('scrollWidth') - 300) {
        var y = $(".scroll_top").scrollLeft();
        $(".scroll_top").scrollLeft(y+300);
      }
      
      else
      {
        y = $(".scroll_top").scrollLeft();
        $(".scroll_top").scrollLeft(y+300);
        $(this).css("display", "none");
      }

      $(".left_shift").css("display", "block");
  } );
  
  $( ".left_shift" ).on( "click", function() {
      $(".right_shift").css("display", "block");
      var y = $(".scroll_top").scrollLeft();
      $(".scroll_top").scrollLeft(y-300);

      if ($(".scroll_top").scrollLeft() === 0) {
        $(this).css("display", "none");
      }
  } );

  
$( ".menu" ).on( "click", function() {
  var hidden = $('.left_navbar');
  var scroll_top = $('.scroll_top');
  var vid_holder = $('.vid_holder');
  var subscription_main = $('.subscription_main');
  var library_main = $('.library_main');

  if ($(window).width() > 1300) {
    if (!hidden.hasClass('hidden')){
        hidden.addClass('hidden');
        hidden.css('margin-left', "-300px");
        vid_holder.css("width","calc(98vw - 86px)");
        vid_holder.css("margin-left","86px");
        vid_holder.animate({}, "fast");
        scroll_top.css("width","calc(97vw - 86px)");
        scroll_top.css("margin-left","86px");
        subscription_main.css("width","calc(98vw - 86px)");
        subscription_main.css("margin-left","86px");
        library_main.css("width","calc(98vw - 86px)");
        library_main.css("margin-left","86px");
    } else {
        hidden.removeClass('hidden');
        hidden.css('margin-left', "0px");
        vid_holder.css("width","calc(98vw - 220px)");
        vid_holder.css("margin-left","220px");
        scroll_top.css("width","calc(97vw - 220px)");
        scroll_top.css("margin-left","220px");
        subscription_main.css("width","calc(98vw - 220px)");
        subscription_main.css("margin-left","220px");
        library_main.css("width","calc(98vw - 220px)");
        library_main.css("margin-left","220px");
    }
  }
    
  else
  {
    if (!hidden.hasClass('hidden')){
      hidden.addClass('hidden');
      hidden.css('margin-left', "-300px");
      vid_holder.css("width","calc(98vw - 86px)");
      vid_holder.css("margin-left","86px");
      vid_holder.css("opacity","1");
      vid_holder.animate({}, "fast");
      scroll_top.css("width","calc(97vw - 86px)");
      scroll_top.css("margin-left","86px");
      subscription_main.css("width","calc(98vw - 86px)");
      subscription_main.css("margin-left","86px");
      subscription_main.css("opacity","1");
      library_main.css("width","calc(98vw - 86px)");
      library_main.css("margin-left","86px");
      library_main.css("opacity","1");
    } else {
      hidden.removeClass('hidden');
      hidden.css('margin-left', "0px");
      vid_holder.css("width","calc(98vw - 86px)");
      vid_holder.css("margin-left","86px");
      vid_holder.css("opacity","0.4");
      vid_holder.animate({}, "fast");
      scroll_top.css("width","calc(97vw - 86px)");
      scroll_top.css("margin-left","86px");
      subscription_main.css("width","calc(98vw - 86px)");
      subscription_main.css("margin-left","86px");
      subscription_main.css("opacity","0.4");
      library_main.css("width","calc(98vw - 86px)");
      library_main.css("margin-left","86px");
      library_main.css("opacity","0.4");
    }
  }
} );

$( ".left_navbar" ).on( "mouseleave", function() {
  $(".left_navbar").css("overflow-y","hidden");
  $("nav").css("padding-right","10px");
} );

$( ".left_navbar" ).on( "mouseenter", function() {
  $(".left_navbar").css("overflow-y","scroll");
  $("nav").css("padding-right","0px");
  $("nav").css("width","202px");
} );

$( "li" ).on( "mouseenter", function() {
    if (this.style.backgroundColor != "rgb(39, 39, 39)") {
      this.style.backgroundColor = "rgb(25 25 25)";
    }
} );

$( "li" ).on( "mouseleave", function() {
  if (this.style.backgroundColor != "rgb(39, 39, 39)") {
    this.style.backgroundColor = "black";
  } 
} );

$( "li" ).on( "click", function() {
  for (let i = 0; i < 15; i++) {
    document.querySelectorAll("li")[i].style.backgroundColor = "black";  
  }

  this.style.backgroundColor = "#272727";
} );

$(window).on('resize', function(){
  var win = $(this);
  var hidden = $('.left_navbar');
  var scroll_top = $('.scroll_top');
  var vid_holder = $('.vid_holder');
  var subscription_main = $('.subscription_main');
  var library_main = $('.library_main');

  if (win.width() < 1300) {
    hidden.addClass('hidden');
    hidden.css('margin-left', "-300px");
    vid_holder.css("width","calc(98vw - 86px)");
    vid_holder.css("margin-left","86px");
    vid_holder.animate({}, "fast");
    scroll_top.css("width","calc(97vw - 86px)");
    scroll_top.css("margin-left","86px");
    subscription_main.css("width","calc(98vw - 86px)");
    subscription_main.css("margin-left","86px");
    library_main.css("width","calc(98vw - 86px)");
    library_main.css("margin-left","86px");
  } else {
    hidden.removeClass('hidden');
    hidden.css('margin-left', "0px");
    vid_holder.css("width","calc(98vw - 220px)");
    vid_holder.css("margin-left","220px");
    scroll_top.css("width","calc(97vw - 220px)");
    scroll_top.css("margin-left","220px");
    subscription_main.css("width","calc(98vw - 220px)");
    subscription_main.css("margin-left","220px");
    library_main.css("width","calc(98vw - 220px)");
    library_main.css("margin-left","220px");
  }
});

$(window).on('resize', function(){
  var subs_vids = $(".subscription_vids");
  var subs_main = $(".subscription_main");
  if (Math.floor((subs_main.width()+10)/220) != NaN && Math.floor((subs_main.width()+10)/220) != 0) {
    subs_vids.css("width", 220*Math.floor((subs_main.width()+10)/220));
  }
});



  const [users, setUsers] = useState([]);
  const api = "AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc";
  const fetchUserData = () => { fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyB5_Kc5h-Z72FAt4LWm7veU-UWoS8LfUPc&maxResults=9", {
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
      <div className="scroll_top">
        <div className="left_shift">
          <span className="material-symbols-outlined right">
            navigate_before
          </span>
        </div>

        {arr_n.map(() => <Scroll />)}
        
        <div className="right_shift">
          <span className="material-symbols-outlined right">
            navigate_next
          </span>
        </div>
      </div>

      <div className="vid_holder">
            
          {/* {users.length === 0 ? ( */}
          {users.length === 0 ? (
          // <h1>loading..</h1>
          arr.map(() => 
          <div className="vids">
            <div className="loader">
              <div className="wrapper">
                <div className="line-1"></div>
                <div className='ele'>
                  <div className="circle"></div>
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
              <div className="vids">
                <div className="thumbnail" style={{backgroundImage: "url(' " + (i.snippet.thumbnails.maxres === undefined ? i.snippet.thumbnails.standard.url : i.snippet.thumbnails.maxres.url) + "')"}}>
                </div>
                <div className="chnl_text">
                  <div className="chnl_pic">
                  </div>
                  <div className="vid_desc">
                    <div className="main_desc">{users.length === 0 ? <>loading...</> : i.snippet.title}</div>
                    <div className="chnl_name">{users.length === 0 ? <>loading...</> : i.snippet.channelTitle}</div>
                    <div className="vid_stats">
                      <div className="vid_views">300k views <Test /></div>
                      <div className="partition">
                        <div className="partition_inside"></div>
                      </div>
                      <div className="vid_date">1 day ago</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

        
      </div>
      </>
    )

  };
  
  export default Home;