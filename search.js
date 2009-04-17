Search = function() {

    // Index used to keep track of the current image
    var _index = 0;

    // Max number of images
    var _limit = 10;

    // URL of Flickr API
    var _url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=<TAG>&tagmode=any&format=json&jsoncallback=?";

    // This method will add in all the event handlers
    //
    // You will need to handle:
    //
    // 1) Submit button clicked
    // 2) Enter key on search field
    // 3) Previous/next button clicked
    var _addEventHandlers = function() {
    };

    // This method takes in a query and displays the first image
    var _search = function(query) {
        var urlWithQuery = _url.replace("<TAG>", query);

        // Make JSON call and pass the results to the _callback function
    };


    var _callback = function(data) {
        // Show the controls

        var items = data.items;

        // Loop through items doing the following:
        // 1) Create and <img> tag and append to the search results DIV
        // - Each image source can be found in item.media.m
        // - Ex. var img = $("<img/>").attr("src", item.media.m);
        // 2) Show only the first image
        // 3) Add to the container
        // 4) Only show the first _limit# of images
    };

    return {
        init : function () {
            _addEventHandlers();
        },

        search : function(query) {
            _search(query);
        }
    };
}();

$(Search.init);
