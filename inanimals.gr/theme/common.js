function load_districts(html_select, selected_district_id) {
  html_select.append('<option></option>');

  $.ajax({
    type: 'GET',
    url: "/ilioupoli/ui-api/districts",
    success: function (districts) {
      districts.forEach(function (district) {
        var html = '';
        html += '<option value="' + district.id + '" ' + (district.id === parseInt(selected_district_id) ? 'selected' : '') + '>';
        html += district.name;
        html += '</option>';

        html_select.append(html);
      });
    }
  });
}

function add_marker_on_map(map, latlng, icon) {
  return L.marker().setLatLng(latlng).setIcon(icon).addTo(map);
}

function add_popup_to_marker(marker, text, popup_options = {}, is_open = false) {
  var popup = L.popup(popup_options).setContent(text);
  marker.bindPopup(popup);

  if (is_open) {
    marker.openPopup();
  }
  return popup;
}

const ATHENS_COORDINATES = {lat: 37.9347513, lng: 23.7597463};

const popupBtns = document.querySelectorAll('.fade__btn')

document.addEventListener("DOMContentLoaded", function () {
  Array.prototype.forEach.call(popupBtns, function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("body").style.overflow = "hidden";
      const popup = btn.parentElement.parentElement.querySelector('.card-popup')
      const popupClose = popup.querySelector('.card-popup__close')
      const popupFade = document.querySelector('.card-popup__fade')
      const scroll = document.querySelector('.back-to-top')
      const navbar = document.querySelector('.navbar')
      popup.classList.add("open")
      popupFade.classList.add("open")
      scroll.style.display='none'
      navbar.style.display='none'
      Array.prototype.forEach.call([popupFade, popupClose], function (item) {
        item.addEventListener("click", function (e) {
          document.querySelector("body").style.overflow = ""
          popupFade.classList.remove("open")
          popup.classList.remove("open")
          scroll.style.display='inline'
          navbar.style.display='block'
        })
      })
/*      popupFade.addEventListener("click", function (e) {
        document.querySelector("body").style.overflow = ""
        popupFade.classList.remove("open")
        popup.classList.remove("open")
        scroll.style.display='inline'
        navbar.style.display='block'
      })
      popupClose.addEventListener("click", function (e) {
        document.querySelector("body").style.overflow = ""
        popupFade.classList.remove("open")
        popup.classList.remove("open")
        scroll.style.display='inline'
        navbar.style.display='block'
      })*/
    })

  })

})
