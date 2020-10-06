function getFormResults() {
    const request = require("request");
    let width = document.getElementById("collagewidth").value;
    let height = document.getElementById("collageheight").value;
    let playlistID = document.getElementById("playlistid").value;
    let playlistURL = "https://api.spotify.com/v1/playlists/" + playlistID;

    request({url:playlistURL, headers:{"Authorization":"Bearer "}}, function(error, result) {
        if(result) {
            let playlist = JSON.parse(result.body);
            let covers = playlist.images.href;
        }
    })

    document.write("<p>ur gay</p>");
}