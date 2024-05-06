document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".headerButtons .btnContainer");
    const contentPages = document.querySelectorAll(".contentContainerPage");
    const dogImg = document.querySelector(".mainContainerImg");
    const pawImg = document.querySelector(".mainContainerImgPaw");
    const catImg = document.querySelector(".mainContainerImgCat");
    const faqLeftPaw = document.querySelector(".mainContainerFaqImgPaws");
    const faqRightPaw = document.querySelector(".mainContainerFaqImgPaws2");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const section = this.getAttribute("data-section");
        const selectedButton = document.querySelector(".headerBtnActive");
        const activePage = document.getElementById(section);
  
        // Remove active class from previously selected button
        if (selectedButton) {
          selectedButton.classList.remove("headerBtnActive");
        }
  
        // Add active class to the clicked button
        this.classList.add("headerBtnActive");
  
        // Hide all content pages
        contentPages.forEach(function (page) {
          page.style.display = "none";
        });
  
        // Show the corresponding content page
        activePage.style.display = "flex";
  
        // Show or hide images based on the selected section
        if (section === "start") {
          dogImg.style.display = "block";
          pawImg.style.display = "block";
          catImg.style.display = "block";
          faqLeftPaw.style.display = "none";
          faqRightPaw.style.display = "none";
        } else if (section === "helper") {
          dogImg.style.display = "none";
          pawImg.style.display = "none";
          catImg.style.display = "none";
          faqLeftPaw.style.display = "none";
          faqRightPaw.style.display = "none";
        } else if (section === "donation") {
          dogImg.style.display = "none";
          pawImg.style.display = "none";
          catImg.style.display = "none";
          faqLeftPaw.style.display = "block";
          faqRightPaw.style.display = "block";
        } else if (section === "faq") {
          dogImg.style.display = "none";
          pawImg.style.display = "none"; // Adjust as needed
          catImg.style.display = "none"; // Adjust as needed
          faqLeftPaw.style.display = "block";
          faqRightPaw.style.display = "block";
        }
      });
    });
  });
  