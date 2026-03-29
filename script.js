let players = [
 {name:"ItzReal", type:"all", region:"na", tiers:["HT1","LT2"]},
 {name:"coldifi", type:"ltm", region:"eu", tiers:["HT1"]},
 {name:"Player123", type:"vanilla", region:"na", tiers:["LT2"]}
];

let filter = "all";

function render(){
  let list = document.getElementById("list");
  let search = document.querySelector(".search").value.toLowerCase();

  list.innerHTML = "";

  players
  .filter(p => filter==="all" || p.type===filter)
  .filter(p => p.name.toLowerCase().includes(search))
  .forEach((p,i)=>{

    let tiers = p.tiers.map(t =>
      `<span class="${t.includes('HT')?'ht':'lt'}">${t}</span>`
    ).join("");

    list.innerHTML += `
    <div class="card">
      <div class="rank">${i+1}</div>
      <img class="avatar" src="https://mc-heads.net/avatar/${p.name}">
      <div class="info">
        <div>${p.name}</div>
        <div class="tiers">${tiers}</div>
      </div>
      <div class="region ${p.region}">${p.region.toUpperCase()}</div>
    </div>`;
  });
}

function setFilter(f,el){
  filter=f;
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
  el.classList.add("active");
  render();
}

function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
}

function copyTG(){
  navigator.clipboard.writeText("exetiqueik.t.me");
  alert("Скопировано!");
}

render();
