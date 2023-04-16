const Header = () => {
  const header = document.createElement('header');
  header.innerHTML=`
    <div class="title">
      <h1>¡Busca tu Gift!</h1>
    </div>
  `
  return header;
};

const Main = () => {
  const main = document.createElement('main');
  main.innerHTML=`
    <div class="mainContainer">
      <form id="searchForm">
        <input id="giftInput" placeholder="busca tu gift"/>
        <input type="number" id="giftLimitInput" value="15" min="1" max="15"/>
        <button id="searchBtn">buscar</button>
      </form>
      <div id="giftContainer"></div>
    </div>
  `
  return main;
};

const searchGift = async () => {
  const gift = document.getElementById('giftInput');
  const giftCant = document.getElementById('giftLimitInput');
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gift.value}&limit=${giftCant.value}&offset=0&rating=g&lang=en`;
    const response = await fetch(url)
    const json = await response.json();
    const data = json.data;
    addGift(data);
  })
}

const addGift = data => {
  const giftContainer = document.getElementById('giftContainer');
  return (
    giftContainer.innerHTML=
    data.map((gifts)=>{
      console.log(gifts.images.fixed_height_small.url);
      let gift = gifts.images.fixed_height_small.url;
      return`
        <img src="${gift}">
      `
    }).join("")
    )  
}
