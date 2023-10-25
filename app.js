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
// console.log(topMenuEl)
// Sub Menu Elements
const subMenuEl = document.getElementById('sub-menu');
// console.log(subMenuEl)
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class","flex-around");
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks)
let showingSubMenu = false;

topMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.tagName !== 'A'){
    return;
  }else{

    console.log(event.target.innerHTML);
  }
})