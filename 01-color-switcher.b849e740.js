!function(){var o=function(o){setTimeout((function(){return console.log(o)}),1e3*o)},e=document.querySelector(".data-start");console.log(e);var n=document.querySelector(".data-stop");function t(){return"#"+Math.floor(16777215*Math.random()).toString(16)}console.log(n),console.log(t());var l=null;e.addEventListener("click",(function(){l=setInterval((function(){document.body.style.backgroundColor=t()}),1e3),console.log(document.body.style.background),console.log(t()),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(l),e.disabled=!1,n.disabled=!0}));for(var c=3;c>0;c--)o(c)}();
//# sourceMappingURL=01-color-switcher.b849e740.js.map