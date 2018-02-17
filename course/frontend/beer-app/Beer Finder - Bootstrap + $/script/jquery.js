$(document).ready(function () {

    $('#button_search').on('click', function (e) {
        e.preventDefault();
        $('#intro_search').hide();

        var query = "search/all?q=" + $('.form-control').val();

        beersApi.search(query, showTable, handleError);
    });

    function showTable(list_beers) {

        list_beers.forEach(function (obj) {
            var fila = '<tr value="' + obj.id + '" data-toggle="modal" data-target="#modal_table" >' +
                '<th scope="row">' + obj.id + '</th>' +
                '<td>' + obj.name + ' </a></td>' +
                '<td>' + obj.type + '</td>' +
                '<td>' + obj.isOrganic + '</td>' +
                '</tr>';
            $('#list_brand').append(fila)
        });
        $('.list_beer').slideDown('slow');
    }

    $('#list_brand').on('click', 'tr', function (e) {
        e.preventDefault();
        var query = "beer/" + $(this).attr('value');

        beersApi.search(query, showDetailBeer, handleError);

    });
    function showDetailBeer(beer) {
        try {
            $('#modal_label').text(beer.name);
            $('#modal_body p').text(beer.description);
            $('#modal_image').attr('src', beer.labels.icon);
        } catch (err) {
            console.error(err.message);
        }
    }

    $('#logo').on('click', 'a', function (e) {
        e.preventDefault();
        $('.list_beer').hide();
        $('#intro_search').show();
        $('.form-control').val("");
        $('#list_brand > tr').remove();
    });

    function handleError(err) {
        alert("Error de conexion: " + err.message);
    }

});
