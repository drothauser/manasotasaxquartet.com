// Side bar menu - See https://www.w3schools.com/howto/howto_js_sidenav.asp
function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

var menuHTML = ''
menuHTML += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'
menuHTML += '<a href="index.html">Home</a>'
menuHTML += '<a href="personnel.html">Personnel</a>'
menuHTML += '<a href="https://www.youtube.com/channel/UCXAAWGf1NkOcLn8zd8leNMw" target="_blank">Manasota Sax Quartet YouTube Channel</a>'
menuHTML += '<a href="schedule.html">Upcoming Performances</a>'
menuHTML += '<a href="contact.html">Contact</a>'

document.write(menuHTML)  

