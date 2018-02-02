$(document).ready(function () {

    $('#button_search').on('click', function (e) {
        e.preventDefault();
        $('#intro_search').hide();

        var query = $('.form-control').val();

        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
            success: function (beers) {
                showTable(beers);
            }
        });
    });

    function showTable(list_beers) {
        $('.list_beer').slideDown('slow');
        list_beers.forEach(function (obj) {
            var fila = '<tr value="' + obj.id + '" data-toggle="modal" data-target="#modal_table" >' +
                '<th scope="row">' + obj.id + '</th>' +
                '<td>' + obj.name + ' </a></td>' +
                '<td>' + obj.style.category.name + '</td>' +
                '<td>' + obj.isOrganic + '</td>' +
                '</tr>';
            $('#list_brand').append(fila)
        });
    }

    $('#list_brand').on('click', 'tr', function (e) {
        e.preventDefault();
        var query = $(this).attr('value');

        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + query,
            success: function (beer) {
                $('#modal_label').text(beer.name);
                $('#modal_image').attr('src', beer.labels.icon);
                $('#modal_body p').text(beer.description);
            }
        });
    });

    $('.py-2').on('click', function (e) {
        $('.list_beer').hide();
        $('.intro_search').show();
    });

});
