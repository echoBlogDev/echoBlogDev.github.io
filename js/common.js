function mobileCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

$(function () {
  $(window).resize(function () {
    if ($(window).width() < 871) {
    }
  });

  var swiper1 = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiperPagination",
      type: "fraction",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiperNext",
      prevEl: ".swiperPrev",
    },
    loop: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiperPagination2",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1300,
      disableOnInteraction: false,
    },
    breakpoints: {
      870: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    },
  });

  swiper1.on("slideChange", function () {
    var swiperNum = $(".swiper-pagination-current").text();

    if (swiperNum == "1") {
      $(".swiperTxt").text("데몬헤어의 컬러 제안");
      $(".swiperTxt2").html(
        "데몬헤어는 겟잇뷰티가 찾은<br/>염색을 잘하는 홍대 헤어 숍 1위입니다."
      );
    } else if (swiperNum == "2") {
      $(".swiperTxt").text("데몬헤어에서 건강하게");
      $(".swiperTxt2").html(
        "잦은 헤어 스타일링에도 모발 손상을<br/>최소화 할 수 있도록 프로페셔널 제품을 사용합니다."
      );
    } else if (swiperNum == "3") {
      $(".swiperTxt").text("데몬헤어의 스타일 제안");
      $(".swiperTxt2").html(
        "경력 디자이너가 고객 두상 형태에 따라<br/>최적의 스타일을 찾아드립니다."
      );
    } else if (swiperNum == "4") {
      $(".swiperTxt").text("데몬헤어의 합리적 제안");
      $(".swiperTxt2").html(
        "거품을 뺀 합리적인 금액으로<br/>고객에게 맞는 최상의 스타일을 제안합니다."
      );
    } else if (swiperNum == "5") {
      $(".swiperTxt").text("두피 개선 프로그램");
      $(".swiperTxt2").html(
        "모공에 쌓인 독소를 제거하고 경직된 두피를 풀어주는<br/>안티에이징 헤드스파 프로그램이 준비되어 있습니다."
      );
    }
  });

  swiper2.on("slideChange", function () {
    var swiperNum2 = $(".swiperInfoBox2").find(
      ".swiper-pagination-bullet-active"
    );

    if (swiperNum2.index() == "0") {
      $(".swiperTxt").text("데몬헤어의 컬러 제안");
      $(".swiperTxt2").html(
        "데몬헤어는 겟잇뷰티가 찾은<br/>염색을 잘하는 홍대 헤어 숍 1위입니다."
      );
    } else if (swiperNum2.index() == "1") {
      $(".swiperTxt").text("데몬헤어에서 건강하게");
      $(".swiperTxt2").html(
        "잦은 헤어 스타일링에도 모발 손상을<br/>최소화 할 수 있도록 프로페셔널 제품을 사용합니다."
      );
    } else if (swiperNum2.index() == "2") {
      $(".swiperTxt").text("데몬헤어의 스타일 제안");
      $(".swiperTxt2").html(
        "경력 디자이너가 고객 두상 형태에 따라<br/>최적의 스타일을 찾아드립니다."
      );
    } else if (swiperNum2.index() == "3") {
      $(".swiperTxt").text("데몬헤어의 합리적 제안");
      $(".swiperTxt2").html(
        "거품을 뺀 합리적인 금액으로<br/>고객에게 맞는 최상의 스타일을 제안합니다."
      );
    } else if (swiperNum2.index() == "4") {
      $(".swiperTxt").text("두피 개선 프로그램");
      $(".swiperTxt2").html(
        "모공에 쌓인 독소를 제거하고 경직된 두피를 풀어주는<br/>안티에이징 헤드스파 프로그램이 준비되어 있습니다."
      );
    }
  });

  $(".close").click(function () {
    $(".topBanner").remove();
  });

  $(".close2").click(function () {
    $(".clickBox").hide();
    $(".reservationBtn").show();
  });

  if ($(window).width() < 1010) {
    $("#map").insertBefore(".reservationBox");
  } else {
    $(".reservationBox").insertBefore("#map");
  }

  $(window).resize(function () {
    if ($(window).width() < 1010) {
      $("#map").insertBefore(".reservationBox");
    } else {
      $(".reservationBox").insertBefore("#map");
    }
  });

  $(".reservationBtn").click(function () {
    $(".reservationBtn").hide();
    clickBox = $(this).index();
    if (clickBox == 0) {
      $(".1").show();
    } else if (clickBox == 1) {
      $(".2").show();
    } else if (clickBox == 2) {
      $(".3").show();
    }
  });

  $(".reservation-go").on("click", function () {
    var $this = $(this);

    window.open(
      mobileCheck() ? $this.data("mobile-url") : $this.data("pc-url"),
      "_blank"
    );
  });

  $(".menuBtn").click(function () {
    $(".pcNav").toggleClass("on");
    $(this).toggleClass("on");

    if ($(this).hasClass("on")) {
      $(".menuBtn").attr("src", "/img/ic-clear-white.svg");
      $(".subHad").css("background-color", "black");
    } else {
      $(".menuBtn").attr("src", "/img/ic-menu_white.svg");
      $(".subHad").css("background-color", "transparent");
    }
  });

  $("#hire-page .list-container > div").on("click", function () {
    $(this).toggleClass("open");
  });

  var hireItemLength = $("#hire-page .list-container > div").length;

  if (!hireItemLength) {
    $("#hire-page .list-container").html(
      '<div class="info-empty">진행중인 채용이 없습니다.</div>'
    );
  }

  if (hireItemLength === 1) {
    $("#hire-page .list-container > div").addClass("open");
  }

  $(window).scroll(function () {
    $(".scroll").each(function () {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element - 150) {
        $(this).css("transform", "translateY(-40px)").css("opacity", "1");
      }
    });
  });
});
