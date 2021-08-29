$(document).ready(function(){

  animeTitle();
  animeSecond();
  addText();
  anchorSmooth();

 
  // work section animation 
  $(".work-about").hide();
  $(".work-item").on("mouseover", function () {
    $(this).find(".work-about").stop(false).fadeIn("slow");
    $(this).find("img").css("filter", "blur(8px)");
  });
  $(".work-item").on("mouseout", function () {
    $(this).find(".work-about").stop(false).fadeOut("slow");
    $(this).find("img").css("filter", "blur(0px)");
  });



  const win = $(window);

  win.scroll(function(){

    if(win.scrollTop() > 1000 ){
      $(".about-info").slideDown(500);
      $(".img").fadeIn(1500)
    } else {
      $(".about-info").hide();
      $(".img").fadeOut()
    }

    if(win.scrollTop() > 1400){
      $(".skill").show(1000);
    } else {
      $(".skill").hide();
    }
  });
  
  // email hide code

  let emailE = 'gmail.com';
  emailE = ('mariusz.lazarz97' + '@' + emailE)
  
  $(".social").append(`<li><a href="mailto:${emailE}" rel="noopener"><i class="fas fa-envelope-open"></i></a></li>`)

});


// anime text function

function animeTitle() {
  // Wrap every letter in a span
  const textWrapper = document.querySelector(".ml2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1150,
      delay: (el, i) => 70 * i,
    })
}

function animeSecond() {
  // Wrap every letter in a span
  const textWrapper = document.querySelector(".ml14 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml14 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 3000,
    })
    .add({
      targets: ".ml14 .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: ".ml14",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

// background text add

function addText() {
  $(".body").text("<body>");
  $(".body-close").text("</body>");
  $(".section").text("<section>");
  $(".section-close").text("</section>");
}

// anchor smooth scroll
function anchorSmooth() {
  $("a[href*=\\#]").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
}


// scroll fucniton 


