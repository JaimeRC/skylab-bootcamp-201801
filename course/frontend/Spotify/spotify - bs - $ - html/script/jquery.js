$(document).ready(function () {

    //https://developer.spotify.com/web-api/console/get-search-item/

    $('#button_search').on('click', function (e) {
        e.preventDefault();

        var query = $('.form-control').val();
        console.log(query);
        spotifyApi.getArtists(query).then(data => showAllArtist(data));
    });

    function showAllArtist(allArtists) {
        console.log(allArtists);
        allArtists.forEach(function (artist) {
            var imgArtist = getImage(artist);

            var infoArtist = '<div class="list_artists"><div class="col-lg-4">' +
                '<img id="image_artist" class="rounded-circle" src="' + imgArtist + '">' +
                '<h5 id="artist_name">' + artist.name + '</h5>' +
                '<button id="artt" type="submit" class="btn btn-primary btn-sm" value="' + artist.id + '">View details</button>' +
                //'<a class="btn btn-secondary" href="#" role="button" value="' + artist.id + '" >View details</a>' +
                '</div></div>';

            $('.row').append(infoArtist);
        });
    }

    $('#artt').on('click', function (e) {
        e.preventDefault();
        var query = $(this).attr('value');

        console.log(query);

        spotifyApi.getAlbums(query).then(data => showAllAlbum(data));


    });


    function showAllAlbum(allAlbums) {
        $('.list_artist').hide();
        console.log(allAlbums);
        allAlbums.forEach(function (album) {
            var imgAlbum = getImage(album);

            var infoAlbum = '<div id="list_albums"><div class="col-lg-4">' +
                '<img id="image_artist" class="rounded-circle" src="' + imgAlbum + '">' +
                '<h2 id="artist_name">' + album.name + '</h2>' +
                '<a class="btn btn-secondary" href="#" role="button" value="' + album.id + '" >View details</a>' +
                '</div></div>';

            $('.row').append(infoAlbum);
        });
    }

    function showAllTrack(allTracks) {
        //$('.list_artist').hide();
        allTracks.forEach(function (track) {
            var imgTrack = getImage(track);

            var infoTrack = '<div id="list_albums"><div class="col-lg-4">' +
                '<img id="image_artist" class="rounded-circle" src="' + imgTrack + '">' +
                '<h2 id="artist_name">' + track.name + '</h2>' +
                '<a class="btn btn-secondary" href="#" role="button" value="' + track.id + '" >View details</a>' +
                '</div></div>';

            $('#list').append(track);
        });
    }

    function getImage(obj) {
        var img = '';
        obj.images.length === 0 ? img = "images/no_image.jpg" : img = obj.images[1].url;
        return img;
    }
});

