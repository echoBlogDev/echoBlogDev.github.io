function renderMap(latitude, longitude, shopName) {
  var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(latitude, longitude),
    zoom: 16,
  });

  new naver.maps.Marker({
    position: new naver.maps.LatLng(latitude, longitude),
    map: map,
    icon: {
      content: '<div id="map-marker">' + shopName + "</div>",
    },
  });
}

function openMapClickHandler($shop) {
  var latitude = $shop.data("latitude");
  var longitude = $shop.data("longitude");
  renderMap(latitude, longitude, "데몬헤어 " + $shop.find("p").text().trim());
}

$(function () {
  openMapClickHandler($(".reservationBtn").eq(0));

  $(".reservationBtn").on("click", function () {
    openMapClickHandler($(this));
  });
});
