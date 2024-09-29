// A propos de moi
const tabsContainer = document.querySelector (".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tabs-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tabs-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// portofolio item
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
         togglePortfolioPopup();
         document.querySelector(".portfolio-popup").scrollTo(0,0);
         portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
     document.querySelector(".portfolio-popup").classList.toggle("open");
     document.body.classList.toggle("hide-scrolling");
     document.querySelector(".main").classList.toggle("fade-out");
 }
 document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//cachez la popup quand on clique en exterieure
 document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("pp-inner")){
    togglePortfolioPopup();
  }
 });

 function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".porfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-detail").innerHTML;
 }
// navbar part
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=> {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
  document.querySelector(".header").classList.toggle("active");
}


/********************Active section*****************/
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
    // activate overlay to prevent multiple click
    document.querySelector(".overlay").classList.add('active');
    navToggler.classList.add("hide");
    const hash = e.target.hash;
    if(e.target.classList.contains("nav-item")){
      toggleNavbar();
    }
    else{
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(()=>{
      document.querySelector("section.active").classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove ("hide");
      document.querySelector(".overlay").classList.remove('active');
  },500);
}
});

//page loader
window.addEventListener('load', () =>{
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.home-section').classList.add("active");
  //load page
  document.querySelector('.page-loader').classList.add("fade-out");
  setTimeout(() =>{
    document.querySelector('.page-loader').style.display = "none";
  },600);
});

