[...document.querySelectorAll('.TopstoryItem.Card')].map((v,i)=> v.querySelector("a").href.indexOf("zvideo") !== -1 ? v : false).filter(v=>v).forEach(v=>v.remove())
