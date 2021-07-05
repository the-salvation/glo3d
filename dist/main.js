/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,o,a,r,c,i,l,u,s,d,m,v,f,g,p,h,y,E,L,b,x,C,q,S,w,A,k,I,M,T,B,D,_,z;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),a=function(){var e=(new Date("26 december 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60)%60;return{hours:Math.floor(e/60/60),minutes:n,seconds:t,timeRemaining:e}},r=function(){var e=a();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,e.hours<10&&(t.textContent="0"+e.hours),e.minutes<10&&(n.textContent="0"+e.minutes),e.seconds<10&&(o.textContent="0"+e.seconds)};if(a().timeRemaining>0)r(),setInterval(r,1e3);else if(a().timeRemaining<0){var c="00";t.textContent=c,n.textContent=c,o.textContent=c}})(),function(){var e=document.querySelector("menu"),t=function(){e.classList.toggle("active-menu")};document.body.addEventListener("click",(function(n){var o=n.target;"A"===o.tagName&&o.closest("li")&&function(e){var t=e.target;e.preventDefault();var n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"center"})}(n),o.closest(".menu")||o.closest(".active-menu")&&!o.classList.contains("active-menu")&&"LI"!==o.tagName?t():(o=o.closest(".active-menu"),e.classList.contains("active-menu")&&!o&&t())}))}(),T=document.querySelector(".popup"),B=0,D=document.documentElement.clientWidth,_=function e(){M=requestAnimationFrame(e),B+=10,++B<200?T.firstElementChild.style.top=B+"px":cancelAnimationFrame(M)},z=function(){B=0,T.firstElementChild.style.top="-350px",T.style.display="none"},document.body.addEventListener("click",(function(e){var t=e.target;D=document.documentElement.clientWidth,t.classList.contains("popup-btn")?(T.style.display="block",D>768?M=requestAnimationFrame(_):D<768&&(cancelAnimationFrame(M),T.firstElementChild.style.top="200px")):t.classList.contains("popup-close")?z():(t=t.closest(".popup-content"))||z()})),A=document.querySelector(".service-header"),k=A.querySelectorAll(".service-header-tab"),I=document.querySelectorAll(".service-tab"),A.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&k.forEach((function(e,n){e===t&&function(e){for(var t=0;t<I.length;t++)e===t?(k[t].classList.add("active"),I[t].classList.remove("d-none")):(k[t].classList.remove("active"),I[t].classList.add("d-none"))}(n)}))})),function(){var e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item");t.forEach((function(t,n){(t=document.createElement("li")).classList.add("dot"),e.appendChild(t),0===n&&t.classList.add("dot-active")}));var n,o=document.querySelectorAll(".dot"),a=document.querySelector(".portfolio-content"),r=0,c=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),++r>=t.length&&(r=0),i(t,r,"portfolio-item-active"),i(o,r,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;n=setInterval(l,e)};a.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),a.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(),a.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&o.forEach((function(e,t){e===n&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),i(t,r,"portfolio-item-active"),i(o,r,"dot-active"))}));var s=document.querySelector("main").lastElementChild;s.addEventListener("click",(function(e){e.preventDefault();var t=s.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"center"})}))}(),e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll("input[type=email]"),n=document.querySelectorAll("input[type=tel]"),o=document.querySelectorAll(".mess"),a=document.querySelectorAll("input.calc-item"),r=document.getElementById("form1-name"),c=document.getElementById("form2-name"),i=document.getElementById("form3-name"),l=document.getElementById("form1-email"),u=document.getElementById("form2-email"),s=document.getElementById("form3-email"),d=document.getElementById("form1-phone"),m=document.getElementById("form2-phone"),v=document.getElementById("form3-phone"),f=document.getElementById("form2-message"),g=/\D/,p=/[^а-я-' ё]/gi,h=/([^а-я0-9-,.' ё])/gi,y=/[^a-z0-9-' @\.']/gi,E=/[^0-9+]/g,L=function(e){var t=e.target;t.value=t.value.replace(g,"")},b=function(e){"text"===e.target.type&&e.target.classList.contains("mess")&&!e.target.classList.contains("calc-item")&&(e.target.value=e.target.value.replace(h,""))},x=function(e){e.target.value=e.target.value.replace(y,"").replace(/\s+/g," ")},C=function(e){e.target.value=e.target.value.replace(E,"")},q=function(e){e.target.value=e.target.value.replace(/[^а-яё -]/gi,"").replace(/^[ -]+/g,"").replace(/[ -]+$/g,"").replace(/\s+/g," ").split(" ").map((function(e){return""===e?e:e[0].toUpperCase()+e.slice(1)})).join(" ")},S=function(e){e.target.value=e.target.value.replace(y,"").replace(/\s+/g," ")},w=function(e){e.target.value=e.target.value.replace(/[^()\-0-9]/g,"").replace(/^[ -]+/g,"").replace(/[ -]+$/g,"").replace(/\s+/g," ")},a.forEach((function(e){e.addEventListener("blur",L)})),t.forEach((function(e){e.addEventListener("input",x)})),n.forEach((function(e){e.addEventListener("input",C)})),document.body.addEventListener("input",(function(e){"text"!==e.target.type||e.target.classList.contains("mess")||e.target.classList.contains("calc-item")||(e.target.value=e.target.value.replace(p,""))})),o.forEach((function(e){e.addEventListener("input",b)})),e.forEach((function(e){e.classList.contains("calc-type")||e.addEventListener("input",L)})),r.addEventListener("blur",q),c.addEventListener("blur",q),i.addEventListener("blur",q),l.addEventListener("blur",S),u.addEventListener("blur",S),s.addEventListener("blur",S),d.addEventListener("blur",w),m.addEventListener("blur",w),v.addEventListener("blur",w),f.addEventListener("blur",(function(e){e.target.value=e.target.value.replace(h,"").replace(/^[ -]+/g,"")})),function(){var e=document.querySelectorAll(".command__photo"),t=document.getElementById("command"),n=[];e.forEach((function(e){var t=e.getAttribute("src");n.push(t)}));var o=n.toString().split(",");e.forEach((function(e){e.addEventListener("mouseover",(function(e){e.target.classList.contains("command__photo")&&(e.target.src=e.target.dataset.img)}))})),t.addEventListener("mouseout",(function(t){if(t.target.classList.contains("command__photo"))for(var n=0;n<e.length;n++)e[n].setAttribute("src",o[n])}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(){var t=0,i=1,l=1,u=n.options[n.selectedIndex].value,s=+o.value;r.value>1&&(i+=(r.value-1)/10),a.value&&a.value<5?l*=2:a.value&&a.value<10&&(l*=1.5),u&&s&&(t=e*u*s*i*l),c.textContent=t,function(e,t,n,o){var a=document.getElementById("total"),r=n-0,c=Math.abs(Math.floor(o/r));c=Math.max(c,10);var i,l=(new Date).getTime()+o,u=function(){var e=(new Date).getTime(),t=Math.max((l-e)/o,0),c=Math.round(n-t*r);a.textContent=Math.ceil(c),c===n&&clearInterval(i)};i=setInterval(u,c),u()}(0,0,t,1e3)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),function(){var e='\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <g>\n    <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#ffffff" stroke-width="15"></path>\n    <path d="M49 3L49 27L61 15L49 3" fill="#ffffff"></path>\n    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.2987012987012987s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>\n  </g>\n  </svg>',t=document.querySelectorAll("form"),n=document.createElement("div"),o=document.body.querySelectorAll("input");n.style.cssText="\n\t\tfont-size: 2rem;\n\t\tcolor: tomato;\n\t";t.forEach((function(t){return(a=t).addEventListener("input",(function(e){var t=e.target;e.preventDefault(),a.appendChild(n);var o=a.querySelector('input[name="user_phone"]'),r=a.querySelector('input[name="user_name"]'),c=a.querySelector('input[name="user_message"]'),i=a.querySelector('input[name="user_email"]'),l=document.querySelectorAll(".form-btn"),u="tomato",s=function(){l.forEach((function(e){e.removeAttribute("disabled")}))},d=function(){l.forEach((function(e){e.setAttribute("disabled",!0)}))};return t.contains(r)&&!/([А-Яа-яЁё]){2,}/g.test(r.value)?(d(),r.style.backgroundColor=u,void(n.textContent="only cyrylic allowed")):(s(),n.textContent="",r.style.backgroundColor="white",t.contains(o)&&!o.value.match(/(\+|\d){1}(\d){10}(?![A-Za-zА-Яа-яЁё])/)||o.value.length>17?(d(),o.style.backgroundColor=u,void(n.textContent="only numbers allowed")):(o.value=o.value.replace(/[a-zа-яё]/i,""),s(),n.textContent="",o.style.backgroundColor="white",t.contains(i)&&!i.value.match(/^\w+@\w+\.\w{2,}$/)?(d(),i.style.backgroundColor=u,void(n.textContent="xxx@yyy.zzz")):(i.value=i.value.replace(/[а-яё]\s/i,""),s(),n.textContent="",i.style.backgroundColor="white",t.contains(c)&&!/(\s){0,}([А-Яа-яЁё]){1,}/g.test(c.value)?(d(),c.style.backgroundColor=u,void(n.textContent="only russian allowed")):void(t.contains(c)&&(s(),n.textContent="",c.style.backgroundColor="white")))))})),void a.addEventListener("submit",(function(t){t.preventDefault(),a.appendChild(n);var r=new FormData(a),c={};r.forEach((function(e,t){c[t]=e})),function(t){return n.innerHTML=e,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(c).then((function(e){if(200!==e.status)throw new Error("response status isn't 200!");return e})).then(n.innerHTML=e).then((function(){n.textContent="Thanks, will get in touch soon!",c={},o.forEach((function(e){e.value=""}))})).catch((function(e){n.textContent="it's broke",console.error(e)})),new Promise((function(e,t){setTimeout(e,5e3)})).then((function(){n.innerHTML=""}))}));var a}))}()})();