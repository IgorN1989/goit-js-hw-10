!function(){function e(e){var n="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e,"&x-api-key=live_OLk1RycgcWv2xBkEUGVJtAj6KrGstFwR9QZRnnjj8HNyEgldoS7QordoNgkDvqzx");fetch(n).then((function(e){return e.json()})).then((function(e){return console.log(e[0])}))}console.log((function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return refs.select.insertAdjacentHTML("beforeend",addOptions(e))}))})),console.log(e);var n={select:document.querySelector(".breed-select"),info:document.querySelector(".cat-info  ")};n.select.addEventListener("change",(function(){e(n.select.value)}))}();
//# sourceMappingURL=index.01fa4436.js.map
