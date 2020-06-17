const sections = Array.from(document.getElementsByTagName('section'));
sections.unshift(document.getElementById('title'));
const navBarList = document.getElementById('navbar__list');
const elementPosition = [];
//Creating Dynamic Navigation Bar
function renderNavBar(){
  sections.forEach(section=>{
    let i=0;
    const newLink = document.createElement('li');
    newLink.className= `navLink ${section.id}`;
    newLink.innerHTML = section.dataset.nav;
    newLink.onclick =()=> windowScroll(section);
    navbar__list.appendChild(newLink);
    elementPosition.push(section.offsetTop);
    i+=1;
  });
}

//Check if element is in viewport
function inViewPort(element){
const bounding = element.getBoundingClientRect();
  return(
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight+20 || document.documentElement.clientHeight)
  );
}
    
//To scroll on navigation bar click
function windowScroll(element){
  element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});  
};

//active section and navigation link on scroll
function onWindowScroll(){
  sections.forEach(section => section.classList.remove("your-active-class"));
  navBarList.childNodes.forEach(navLink => navLink.classList.remove("navActive"));
  for(const section of sections){
    section.classList.remove("navAction")
    const activeIndex = sections.findIndex(section => inViewPort(section));
    console.log(activeIndex);
    const activeSection = sections[activeIndex];
    const activeLink = navBarList.childNodes[activeIndex];
    activeSection && activeSection.classList.add("your-active-class");
    activeLink && activeLink.classList.add("navActive");
  }
}

renderNavBar();
//to make home link active in starting
navBarList.childNodes[0].classList.add("navActive");
document.addEventListener('scroll', onWindowScroll);

