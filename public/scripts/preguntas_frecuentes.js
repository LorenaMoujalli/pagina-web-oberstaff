 var faqItems = document.querySelectorAll(".faq-item"); 

  for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].querySelector(".faq-question").addEventListener("click", function () {
      var item = this.parentNode;

      // Alternar la clase 'active'
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }


/*
   var faqItems2 = document.querySelectorAll(".faq-item2"); 

  for (var i = 0; i < faqItems2.length; i++) {
    faqItems2[i].querySelector(".faq-question2").addEventListener("click", function () {
      var item = this.parentNode;

      // Alternar la clase 'active'
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }
    */