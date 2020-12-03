const menuButton = document.querySelector('#menu-toggle')
const navigation = document.querySelector('#navigation')
let toggle = false

window.onscroll = function() {changeHeader()}
menuButton.addEventListener('click', toggleMenuMobile)
navigation.addEventListener('click', toggleMenuMobile)

function toggleMenuMobile() {
    navigation.classList.toggle('show-menu')
    if(toggle){
        menuButton.innerHTML = '&#9776;'
        toggle = false
    } else {
        menuButton.innerHTML = '&#10008;'
        toggle = true
    }
}

function changeHeader() {
    if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
        document.querySelector('header').classList.add('long-height')
    } else {
        document.querySelector('header').classList.remove('long-height')
    }
}