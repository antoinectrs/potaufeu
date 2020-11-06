let win = $("#left .js-loop");
let listBloc = $("#left .list-bloc");
let blocInit = listBloc.height();
let create = true;
let count = 1;

$("#left .js-loop ").scroll(function() {
  // $("#container").scroll(function() {
  // console.log(listBloc.height(), blocInit, win.scrollTop());
  $("#right .js-loop").css(
    "transform",
    "translateY(" + win.scrollTop() + "px)"
  );
  $("#condiment .js-loop").css(
    "transform",
    "translateY(" + -win.scrollTop() + "px)"
  );
  if (win.height() == win.scrollTop()) {
    if (create) {
      createD();
    }
  }
});
function createD() {
  // console.log("test");
  // $(".left").clone().appendTo(".content");
  $("#left .list-bloc div:first-child")
    .clone()
    .appendTo("#left .list-bloc");
  $("#left .list-bloc div:first-child").remove();
}
$(".SmoothmyTop").click(function() {
  console.log(win.scrollTop(0, 0));
  $("#left .js-loop").animate({ scrollTop: 1000 }, 1000);
  return false;
});
