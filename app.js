// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.setAttribute('class', 'flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute('class', 'flex-around')

menuLinks.forEach(function(menuLink){
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href',menuLink.href);
    linkEl.innerText = menuLink.text;
    topMenuEl.appendChild(linkEl);
})

// Sub Menu Elements
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class","flex-around");
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

topMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  console.log(event)
  if(event.target.tagName !== 'A'){
    return;
  }else{
    console.log(event.target.innerHTML);
  }
  if(event.target.className === 'active'){
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
  for(let links of topMenuLinks){
    links.classList.remove('active');
  }
  event.target.className = 'active';

   const subMenuLinks = menuLinks.find(link => link.subLinks && event.target.innerHTML === link.text);
  if(subMenuLinks){
    showingSubMenu = true;
  }else{
    showingSubMenu = false;
  }

  if(showingSubMenu){
    buildSubMenu(subMenuLinks.subLinks);
    subMenuEl.style.top = '100%';
  }else{
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
})

function buildSubMenu(subLinks){
  subMenuEl.innerHTML = "";
  subLinks.forEach(function(subLink){
    const subLinkEl = document.createElement('a');
    subLinkEl.setAttribute('href',subLink.href);
    subLinkEl.innerText = subLink.text;
    subMenuEl.appendChild(subLinkEl);
  })
}

subMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  const subMenu = event.target;
  if(subMenu.tagName !== "A") return;
  console.log(subMenu.innerText)
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  for(let links of topMenuLinks){
    links.classList.remove('active');
  }
  mainEl.innerHTML = '<h1>'+ subMenu.innerHTML +'</h1>';
})