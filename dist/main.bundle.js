(()=>{"use strict";const t=document.getElementById("quote-container"),e=document.getElementById("quote"),n=document.getElementById("author"),o=document.getElementById("twitter"),d=document.getElementById("new-quote"),c=document.getElementById("loader");let i=[];function a(){c.hidden=!1,t.hidden=!0}function u(){a();const o=i[Math.floor(Math.random()*i.length)];o.author?n.textContent=o.author:n.textContent="Unknown",o.text.length>120?e.classList.add("long-quote"):e.classList.remove("long-quote"),e.textContent=o.text,t.hidden=!1,c.hidden=!0}d.addEventListener("click",u),o.addEventListener("click",(function(){const t=`https://twitter.com/intent/tweet?text=${e.textContent} - ${author.textContent}`;window.open(t,"_blank")})),async function(){a();try{const t=await fetch("https://type.fit/api/quotes");i=await t.json(),u()}catch(t){}}()})();
//# sourceMappingURL=main.bundle.js.map