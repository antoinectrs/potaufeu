let win = $("#left .js-loop");
let listBloc = $("#left .list-bloc");
let blocInit = listBloc.height();
let create = true;
let count = 1;
// $(window).on("click", function(e) {
//   createD();
// });
// Each time the user scrolls

// $("#right .js-loop .list-bloc").scroll(function() {
// // let invertScroll =$(this).scrollTop();
// let invertScroll =$(this).scrollTop();
// console.log("test");
//   $("#right .js-loop ").css("top",""+invertScroll+"px)");
// });

// $(".container .js-loop").scroll(function() {
//   console.log("test");
//   // console.log(listBloc.height(), blocInit, win.scrollTop());
//   $("#right .js-loop").css("transform","translateY("+win.scrollTop()+"px)");
//   if (win.height() == win.scrollTop()) {
//     // console.log("in");

//     if (create ) {
//       // console.log("1");
//       createD();
//       // create = false;
//     } else if (create == false && win.scrollTop() >= $(".a").height() * 2) {
//       // console.log("2");
//       // create = true;
//     }
//   }
// });
// function createD() {
//   console.log("test");
//   // $(".left").clone().appendTo(".content");
//   $("#left .list-bloc div:first-child")
//     .clone()
//     .appendTo("#left .list-bloc");
//   $( "#left .list-bloc div:first-child" ).remove();
// }

// $("#left .js-loop ").scroll(function() {
//   let invertScroll =$(this).scrollTop();
//   // console.log("test");
//     $("#right .js-loop ").css("top",""+invertScroll+"px)");
//   });

$("#left .js-loop ").scroll(function() {
  // console.log(listBloc.height(), blocInit, win.scrollTop());
  $("#right .js-loop").css(
    "transform",
    "translateY(" + win.scrollTop() + "px)"
  );
  $("#condiment .js-loop").css(
    "transform",
    "translateY(" +(- win.scrollTop()) + "px)"
  );
  if (win.height() == win.scrollTop()) {
    if (create) {
      createD();
    }
  }
});
function createD() {
  console.log("test");
  // $(".left").clone().appendTo(".content");
  $("#left .list-bloc div:first-child")
    .clone()
    .appendTo("#left .list-bloc");
  $("#left .list-bloc div:first-child").remove();
}



  // win.scrollTop({
  //   top:100,
  //   behavior: 'smooth',
  //   transition: '5s',
  // });
  // $(".SmoothmyTop").click(function() {
  //     console.log( win.scrollTop(0,0))
  //   $("#left .js-loop").animate({ scrollTop: 0 }, 10000);
  // });


  	$('.SmoothmyTop').click(function(){
      console.log( win.scrollTop(0,0))
      $("#left .js-loop").animate({ scrollTop: 0 }, 1000);
        return false;
    });



