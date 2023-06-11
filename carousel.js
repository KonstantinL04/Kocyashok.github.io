$(document).ready(function () {
  // Activate Carousel
  $(".carousel").carousel();

  // Activate Carousel
  $(".carousel-control-prev").click(function () {
    $(".carousel").carousel("prev");
  });

  $(".carousel-control-next").click(function () {
    $(".carousel").carousel("next");
  });

  // Enable Carousel Indicators  
  $(".carousel-indicators li").click(function () {

  });

  $(".carousel").on("slide.bs.carousel", function (event) {
    let activeIndex = $(event.relatedTarget).index();

    $(".carousel-item").eq(activeIndex).addClass("carousel-item-next");
    $(".carousel-item-next").css("transform", "translateX(0)");

    if (activeIndex - 1 >= 0) {
      $(".carousel-item").eq(activeIndex - 1).addClass("carousel-item-prev");
      $(".carousel-item-prev").css("transform", "translateX(0)");
    }
  });

  $(".carousel").on("slid.bs.carousel", function (event) {
    $(".carousel-item").removeClass("carousel-item-next carousel-item-prev");
  });
});