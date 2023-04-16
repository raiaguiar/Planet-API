const formSearch = document.querySelector("form");

    formSearch.onsubmit = (ev) => {
        ev.preventDefault();
        
        const search = ev.target.search.value;

        if (search == ""){
            alert("Empty Search");
            return;
        }

        fetch(`https://planets-17f2.onrender.com/planets/getPlanet?name=${search}`)
        .then(result => result.json())
        .then(json => funcList(json));   
    }

    const funcList = (json) => {
        const list = document.querySelector("div.list");
        list.innerHTML = "";
      
   
  if ("error" in json) {
    alert("Planet not found");
    return;
  }
      
        let item = document.createElement("div")
        item.classList.add("item");
      
        item.innerHTML = `<img src="${json.picture}" /><h2>${json.name}</h2> 
        <h2 class="description"><p>Description:</p>${json.description}</h2><h3>Number Of Moons: ${json.numberOfMoons}</h3>
        <h3>Namesake: ${json.namesake}</h3>`
      
        list.appendChild(item)
      }
    
// https://planets-17f2.onrender.com/planets/getPlanet?name=

