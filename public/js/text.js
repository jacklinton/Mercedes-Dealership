// Control tabbed content with thumbnails
$(document).ready(function(){
  $(".thumbnail-1").click(function() {
    $(".tab-1").click()
  })
  
  $(".thumbnail-2").click(function() {
    $(".tab-2").click()
  })

  $(".thumbnail-3").click(function() {
    $(".tab-3").click()
  })

  $(".thumbnail-4").click(function() {
    $(".tab-4").click()
  })

  $(".thumbnail-5").click(function() {
    $(".tab-5").click()
  })

  $(".thumbnail-6").click(function() {
    $(".tab-6").click()
  })
  
  
  
  
  // controls the carousel videos from the tab buttons - doesn't work yet!
  $(".tab-1").click(function() {
    var slides = $(".slidey")
    for(i=0; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
  $(".tab-2").click(function() {
    var slides = $(".slidey")
    for(i=0; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
  $(".tab-3").click(function() {
    var slides = $(".slidey")
    for(i=0; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
  $(".tab-4").click(function() {
    var slides = $(".slidey")
    for(i=0; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
  $(".tab-5").click(function() {
    var slides = $(".slidey")
    for(i=0; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
    $(".tab-6").click(function() {
    var slides = $(".slidey")
    for(i=5; i<slides.length; i++) {
      console.log(slides[i])
      if(slides[i].attributes[1].value == "0") {
        thing = slides[i]
        console.log(slides[i])
        $(slides[i]).addClass("active")
      }
    } 
  })
  
  
});