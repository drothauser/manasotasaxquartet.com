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
menuHTML += '<a href="performances.html">Performances</a>'
menuHTML += '<a href="contact.html">Contact</a>'

//menuHTML += '<a href="assertion1.html">All Christians Are Atheists</a>'
//menuHTML += '<a href="assertion2.html">A Universe from Nothing</a>'
//menuHTML += '<a href="assertion3.html">A Complex God Would Need an Explanation</a>'
//menuHTML += '<a href="assertion4.html">Government</a>'
//menuHTML += '<a href="assertion5.html">The Problem Of Evil</a>'
//menuHTML += '<a href="assertion6.html">God and science - Darwin and dating</a>'
//menuHTML += '<a href="assertion7.html">The Garden as a Setup</a>'
//menuHTML += '<a href="assertion8.html">God enslaved the Jews</a>'
//menuHTML += '<a href="assertion9.html">God is a moral monster</a>'
//menuHTML += '<a href="assertion10.html">The Christian Story of Who Jesus Is Can&apos;t Be Trusted</a>'
//menuHTML += '<a href="assertion11.html">Siegfried&apos;s invitation: Imagine there&apos;s no Heaven...</a>'
//menuHTML += '<a href="assertion12.html">God Is an Egomaniacal Child-Abuser</a>'

document.write(menuHTML)  

