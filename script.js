let menu = document.querySelector("#menu-logo");
let sidebar = document.querySelector(".sidebar-container");
let menuLeft = document.querySelector("#club-logo");
let sidebarLeft = document.querySelector(".sidebar-menu");
if(menu){
    menu.addEventListener('click', function(e){
        if(menu.getAttribute('data-state')=='1'){
            menu.setAttribute('data-state','2');
            sidebar.style.display="block";

        }else{
            menu.setAttribute('data-state','1');
            sidebar.style.display="none";
        }
    })
}
if(menuLeft){
    menuLeft.addEventListener('click', function(e){
        if(menuLeft.getAttribute('data-state')=='1'){
            menuLeft.setAttribute('data-state','2');
            sidebarLeft.style.display="block";

        }else{
            menuLeft.setAttribute('data-state','1');
            sidebarLeft.style.display="none";
        }
    })
}