$(document).ready(function () {
    var game;

    //Si pulsamos #button_play hacemos desaparecer .play y hacemos aparecer .word
    $('#button_play').on('click', function (e) {
        e.preventDefault();
        $('.play').slideUp("slow");
        $('.word').slideDown("slow");
        $('.game_word').val("")
        $('#number_list').val("");
        $('.hidden_word').text("");
        $('.game_attempts').text("");
    });

    //Si pulsamos #button_word hacemos desaparecer .word y hacemos aparecer .game
    $('#button_word').on('click', function (e) {
        e.preventDefault();

        var word = $('.game_word').val();
        var attempts = $('#number_list').val();

        $('.game_attempts').text(attempts);

        $('.word').slideUp("slow");
        $('.game').slideDown("slow");

        game = new Hangman(word, attempts);
    });


    //Si pulsamos #buton_game enviamos la letra para comprobar la palabra.
    $('#button_game').on('click', function (e) {
        e.preventDefault();

        var charOrWord = $('.game_tried').val();
        var result = game.try(charOrWord);
        $('.hidden_word').text(result.message);
        $('.game_attempts').text(result.attempts);

        if (result.status === 'win' || result.status === 'lose') {
            $('.final_word').text('You ' + result.status + "! with " + result.attempts + " attempts missing.");
            $('.game').slideUp("slow");
            $('.play').slideDown("slow");
        }
        $('.game_tried').val("")
    });

});