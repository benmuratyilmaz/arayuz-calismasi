//slider

$(document).ready(function () {
  $(".slider-field-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        },
      },
    ],
  });
  $(".arrow-left").click(function () {
    $(".slider-field-content").slick("slickPrev");
  });

  $(".arrow-right").click(function () {
    $(".slider-field-content").slick("slickNext");
  });
});
