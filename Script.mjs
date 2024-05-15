

//menu data structure

let menulinks =[
    {text:'about',href:'/about'},
    {text:'catalog',href:'/catalog'},
    {text:'orders', href:'/orders'},
    {text:'account',href:'/account'},
];



const mainEl =document.getElementsByTagName (`main`)
mainEl[0].style.backgroundColor='var(--main-bg)'
mainEl[0].innerHTML='<h1> DOM Manipulation</h1>'
mainEl[0].classList.add(`flex-ctr`)

//Part 2 :Creating a Menu Bar

const topMenuEl = document.getElementById(`top-menu`)
topMenuEl.style.height=`100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
topMenuEl.classList.add(`flex-around`)
//part -3
menulinks.forEach(menulinks =>{
    let newelment=document.createElement("a")

    newelment.href=menulinks.href
    
    newelment.textContent=menulinks.text;
  
    topMenuEl.appendChild(newelment)

})

//part-4

