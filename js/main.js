$(function () {
    let menuOpen = $(".menu--btn");
    let menu = $(".nav--mobile");
    let menuBtnImg = $(".menu--btn span img");

    menuOpen.click(function () {
        menu.toggleClass('on');
        if (menu.css('display') === 'block') {
            menuBtnImg.attr('src','img/menu-minus.png');
        } else {
            menuBtnImg.attr('src','img/menu-plus.png');
           
        }
    });
});
