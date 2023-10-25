// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
console.log(topMenuEl)

const subMenuEl = document.getElementById('sub-menu');
/* console.log(subMenuEl) */
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class","flex-around");