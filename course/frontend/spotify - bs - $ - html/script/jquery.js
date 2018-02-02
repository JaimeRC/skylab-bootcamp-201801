$(document).ready(function () {

    var token = 'BQAf6rmvvGHFRnNmMEk2_sqFs9g5sWfaqSAQD6kSwdMkmmb';

    $('#button_search').on('click', function (e) {
        e.preventDefault();

        var textSearch = $(campo_texto).val();

        var query = "https://api.spotify.com/v1/searchq=" + textSearch + "&type=artist";

        var allArtirst = getData(query);

        showAllArtist(allArtirst)
    });

    function showAllArtist(allArtist) {

        allArtist.forEach(function (obj) {
            var artist = '<div class="col-lg-4"> ' +
                + '<img id="image_artist" class="rounded-circle" src="' + obj.artists.images[1].url + '">' +
                + '<h2 id="artist_name">' + obj.artists.name + '</h2>' +
                + '<a class="btn btn-secondary" href="#" role="button" value="' + obj.artists.id + '">View details</a>';

            $('.row').append(artist);
        });
    }

    $('.row').on('click', 'a', function (e) {
        e.preventDefault();
        var idArtist = $(this).attr('value');

        var query = "";

    });


    function showAllAlbum(artist) {


    }

    function showAllTrack(album) {

    }

    function getData(url) {

        $.ajax({
            url: url,
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: { "Authorization": "Bearer " + token },
            succes: function (data) {
                return data;
            }
        });

    }
})

