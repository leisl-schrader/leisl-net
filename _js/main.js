$(document).ready(function () {

    // functionality: home page list CTA highlights associated nav link(s)

    let baseLink = "home_listCTA-NavHighlight";

    $(`.${baseLink}`).each(function () {

      let link = $(this);

      link.on("click", function (e) {

        // remove any existing active classes
        $(".active").removeClass("active");
  
        // don't jump to top of page
        e.preventDefault();
  
        // get sibling classes
        let classes = $(this).attr("class").split(" ");
  
        // add active class to nav links
        classes.forEach(function (className) {
          if (className !== "home_navHighlight") {
            $(`.${className}`).addClass("active");
          }
        });

        // add active class to list CTA links
        $(".list_CTA .active").removeClass("active");

        $(this).addClass("active");

        // only if on smallest breakpoint and nav is not side by side with list CTA, jump up to nav

        if($(window).width() < 600) {

            if($("#section_Home").css("flex-direction") === "column") {
                $("html, body").animate({ scrollTop: $("#section_Home").offset().top }, "fast");
            }
          }
      });

    });

  });