// Start of CSS (DO NOT DELETE THIS)
(function() {
	var css = document.createElement("style");
	css.innerHTML = `
		* {
			-webkit-tap-highlight-color: rgba(0,0,0,0);
			-webkit-tap-highlight-color: transparent;
		}
		.messageAttachment-CZp8Iv > .imageWrapper-oMkQl4 {
			width: 300px !important;
		}
		.messageAttachment-CZp8Iv > .imageWrapper-oMkQl4 > div > img {
			width: 300px !important;
			object-fit: contain !important;
		}
		.newMessagesBar-1hF-9G {
			width: 100% !important;
			border-radius: 0 !important;
			left: 0 !important;
		}
		.newMessagesBar-1hF-9G > .barButtonBase-Sk2mdB {
			height: 45px !important;
		}
	`;
	document.head.appendChild(css)
})()
// End of CSS
fetch('https://raw.githubusercontent.com/Cumcord/builds/main/build.js')
    .then((response)=>response.text())
    .then((code)=>eval(code))
document.addEventListener('load', function() {
  fetch('https://raw.githubusercontent.com/Cumcord/builds/main/build.js')
    .then((response)=>response.text())
    .then((code)=>eval(code))
})