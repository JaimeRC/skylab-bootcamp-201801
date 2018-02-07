/**
 * Beers API client.
 * 
 * @version 1.0.0
 */

var beersApi;

(function () {
    "use strict";

    function call(url, handleSuccess, handleError, timeout) {
        $.ajax({
            url: url,
            timeout: timeout,
            success: handleSuccess,
            error: handleError
        });
    }

    /**
    * Searches beers by matching a text.
    * 
    * @param {String} query - The text to search.
    * @param {Function} handleResults - Handles the results.
    * @param {Function} handleError - Handles an error.
    */
    beersApi = {
        url: "https://quiet-inlet-67115.herokuapp.com/api/",

        timeout: 3000,

        search: function (query, handleResults, handleError) {
            call(
                this.url + query,
                handleResults,
                handleError,
                this.timeout
            );
        },
    }
})();

