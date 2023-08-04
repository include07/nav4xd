let menu = document.querySelector("#menu-logo");
let sidebar = document.querySelector(".sidebar-container");
if(menu){
    menu.addEventListener('click', function(e){
        if(menu.getAttribute('data-state')=='1'){
            menu.setAttribute('src','./images/close.png');
            menu.setAttribute('data-state','2');
            sidebar.style.display="block";

        }else{
            menu.setAttribute('src','./images/menu.png');
            menu.setAttribute('data-state','1');
            sidebar.style.display="none";
        }
    })
}