// ck editor
document.querySelectorAll(".CkEditor").forEach((item, index) => {
  CKEDITOR.replace(item, {
    filebrowserUploadUrl: "{{ route('api.ckeditor.upload', {'_token' : ''}) }}",
    filebrowserUploadMethod: "form",
    extraPlugins: "html5video",
    language: "fa",
  });
});
// image upload
window.onload = function () {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    var filesInput = document.getElementById("files");
    filesInput.addEventListener("change", function (event) {
      var files = event.target.files; //FileList object
      var output = document.getElementById("preview");

      // clear the preview
      while (output.firstChild) output.removeChild(output.firstChild);

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (!file.type.match("image")) continue;
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
          var picFile = event.target;
          var div = document.createElement("div");
          div.innerHTML =
            "<img class='thumbnail' src='" +
            picFile.result +
            "'" +
            "title='" +
            picFile.name +
            "'/>";
          output.insertBefore(div, null);
        });
        //Read the image
        picReader.readAsDataURL(file);
      }
    });
  } else {
    console.log("Your browser does not support File API");
  }
};
// errors
(function ($) {
  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".navbar-collapse").toggleClass("show");
  });

  /* ================ Revolution Slider. ================ */
  if ($(".tp-banner").length > 0) {
    $(".tp-banner").show().revolution({
      delay: 6000,
      startheight: 550,
      startwidth: 1170,
      hideThumbs: 1000,
      navigationType: "none",
      touchenabled: "on",
      onHoverStop: "on",
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: "none",
      fullWidth: "on",
    });
  }
  if ($(".tp-banner-full").length > 0) {
    $(".tp-banner-full").show().revolution({
      delay: 6000,
      hideThumbs: 1000,
      navigationType: "none",
      touchenabled: "on",
      onHoverStop: "on",
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: "none",
      fullScreen: "on",
    });
  }

  /*==== Nav ====*/
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  /* ================ Nav ================ */
  $(".fa-caret-down").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle("");
  });

  /* ================ Nice Select ================ */
  $(document).ready(function () {
    $("select").niceSelect();
  });

  // The slider being synced must be initialized first
  $("#carousel").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: "#slider",
  });

  $("#slider").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
  });
})(jQuery);
// canvas nav
