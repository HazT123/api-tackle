document.addEventListener('DOMContentLoaded', function () {
let img = document.getElementById('gif');

fetch('http://api.giphy.com/v1/gifs/search?q=random&api_key=C0ZzErFyLOX9TQ8HeShUl1OkYHMrXL0f')
.then( response => response.json())
.then( data => {
    console.log(data.data)
    let i = Math.floor(Math.random() * 20);
    img.src = data.data[i].images.original.url
});

searchGif = () => {
    console.log('haelelelele')
    let searchTerm = document.getElementById('giphyCount').value;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=C0ZzErFyLOX9TQ8HeShUl1OkYHMrXL0f`)
    .then( response => response.json())
    .then( data => {
        let p = Math.floor(Math.random() * 20);
        img.src = data.data[p].images.original.url;
})}
    document.getElementById('button').addEventListener('click', searchGif);
})