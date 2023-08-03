var topic = document.getElementById("input");
var btn = document.getElementById("searchBtn");
var PexelsApiKey = 'OwkM6MPGAgrOf7q4aEXCiSMCh6nDXqlwRGPrFY2wqDthBf0djDILv9mg'
var requestPexels = `https://api.pexels.com/v1/search?page=${topic}&rating=g&api_key=${PexelsApiKey}`;
var GiphyAPIkey = "tZuspRklb8ygicJMNGrPxVwcWBYhVH3R";
var PexelsParent = document.getElementById("pexels-parent");
var GiphyParent = document.getElementById("giphy-parent");

btn.addEventListener("click", function() {
    sendGiphyApiRequest();
})

function sendGiphyApiRequest() {
    var topic = document.getElementById("input").value;
    var requestGiphy = `https://api.giphy.com/v1/gifs/search?q=${topic}&rating=g&api_key=${GiphyAPIkey}`;
    console.log(requestGiphy);
    fetch(requestGiphy).then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json);
        console.log(json.data[0].images.fixed_height.url)
        var gifPath = json.data[0].images.fixed_height.url;
        var gif = document.createElement("img");
        gif.setAttribute("src", gifPath)
        GiphyParent.appendChild(gif);
    })
};

function sendPexelsApiRequest() {
    console.log(topic)
    fetch(requestPexels).then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        var imgPath = json.data[0].images.fixed_height.url;
        var img = document.createElement("img");
        img.setAttribute("src", imgPath)
        document.PexelsParent.appendChild(img);
    });
}

