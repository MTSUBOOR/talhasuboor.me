  
    $(document).on('click', function(event) {
      if ($(event.target).has('.modal-content').length) {
        closeModal();
      }
    });
  function openModal() {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    document.getElementById('myModal').style.display = "block";
    console.log('openModal');

  }

  function closeModal() {
    clearSlides();
    document.getElementsByTagName("BODY")[0].style.removeProperty('overflow');
    document.getElementById('myModal').style.display = "none";
    console.log('closeModal');
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function fillSlides(modalID){
    var container = document.getElementsByClassName("modal-content");
    var bcontainer = document.getElementById("myModal");
    var dcontainer = document.createElement('dot_content');

    var slides = {
      "1": ["images/LS_01.jpg", "images/LS_02.jpg", "images/LS_03.jpg", "images/LS_04.jpg" ],
      "2": ["images/Privaseable-blur.JPG", "images/privaseeable-scramble.JPG", "images/privaseeableUI.png" ],
      "3": ["images/bugsndaffy.jpg", "images/garfieldb.jpg", "images/shadecar.jpg", "images/xhatchcar.jpg" ]
    };
    var modal_num = modalID.getAttribute('data-modal');
    //alert(slides[modal_num].length);

    for (var i = 0 ; i < slides[modal_num].length; i++) {
      var the_divs = document.createElement('div');
      var s_img = document.createElement('img'); 
      var s_dot = document.createElement('span');



      the_divs.className = 'mySlides';

      s_img.src = slides[modal_num][i];

      the_divs.appendChild(s_img);

      container[0].appendChild(the_divs); 
      dcontainer.className = 'dot-content';
      dcontainer.id = 'dot_content';
      s_dot.className = 'demo';
      
      dcontainer.appendChild(s_dot);
      container[0].appendChild(dcontainer);
      s_dot.onclick = currentSlide(i);
    }
    console.log('fillSlides');
  }

  function clearSlides() {
    var myNode = document.getElementById("modal_content");
  //use spread operator to convert nodelist to array for using
  // array methods
  var c = [...myNode.children];
  c.forEach(function(item, index) {
    console.log(item)
    // check if the current element have a class using 'contains'
    if (!item.classList.contains('elbutton')) {
      //use remove method to remove the element
      
      item.remove();          
      
    }
  })
  console.log('clearSlides');
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
        //captionText.innerHTML = dots[slideIndex-1].alt;
        console.log('showSlides');
      }
      function dotfunction() {
       var slides = document.getElementsByClassName("mySlides");
       var dotfunctionadder = document.getElementsByClassName("demo");
       for (var i = 0; i < slides.length; i++) {
        dotfunctionadder.onclick = currentSlide(i);
      }
      console.log('dotfunction');
    }
