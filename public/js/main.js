var open = document.getElementById("open-burger")
var close = document.getElementById("close-burger")
var menu = document.getElementById("opened-menu")
var header = document.getElementById("header")
var menuStatus = false
console.log(open, close, menu)

function openBurger () {
    if(menuStatus == false) {
        menuStatus = true
        menu.style.display = "flex"
        close.style.display = "block"
        open.style.display = "none"
        document.body.style.overflow = "hidden"
        header.style.position = "fixed"
    } else {
        menuStatus = false
        menu.style.display = "none"
        close.style.display = "none"
        open.style.display = "block"
        document.body.style.overflowY = "scroll"
        header.style.position = "static"
    }
}