// Footer section - See https://www.w3schools.com/howto/howto_js_sidenav.asp

var footerHTML = ''
footerHTML += '<hr/>'
footerHTML += '<div class="footer">'
footerHTML += '<a href="index.html">Home</a> | '
footerHTML += '<a href="personnel.html">Personnel</a> | '
footerHTML += '<a href="https://www.youtube.com/channel/UCXAAWGf1NkOcLn8zd8leNMw" target="_blank">YouTube Channel</a> | '
footerHTML += '<a href="schedule.html">Upcoming Performances</a> | '
footerHTML += '<a href="contact.html">Contact</a>'
footerHTML += '</div>'

document.write(footerHTML) 

var bibleLinks = ''
bibleLinks += '<script src="https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js" type="text/javascript"></script>'
bibleLinks += '<script type="text/javascript">'
bibleLinks += '    BGLinks.version = "ESV";'
bibleLinks += '    BGLinks.linkVerses();'
bibleLinks += '</script>'

document.write(bibleLinks) 
