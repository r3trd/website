        var slideIndex = 0;
        showSlides();
            
        function showSlides() 
        {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) 
            {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 5000); // Change image every 5 seconds
        }

        var slideIdx = 1;
        showDivs(slideIdx);

        function plusDivs(n) 
        {
            showDivs(slideIdx += n);
        }

        function showDivs(n) 
        {
            var i;
            var x = document.getElementsByClassName("mySlides2");
            if (n > x.length) {slideIdx = 1}
            if (n < 1) {slideIdx = x.length}
            for (i = 0; i < x.length; i++) 
            {
                x[i].style.display = "none";  
            }
            x[slideIdx-1].style.display = "block";  
        }
        
        function initMap() 
        {
            var location = {lat: 23.547681007657467, lng: 87.29313611984253};
            // The map, centered at location
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: location});
            // The marker, positioned at location
            var marker = new google.maps.Marker({position: location, map: map});
        }
        
        // On scroll increase opacity of navbar
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
          
            $('.navbar-default').css({
              opacity: function() {
                var elementHeight = $(this).height();
                return 1 - (elementHeight - scrollTop) / elementHeight;
              }
            });
          });