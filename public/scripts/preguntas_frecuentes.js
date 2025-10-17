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

    