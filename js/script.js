
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var NYTimesKey = '3ba086a0103a4a7aaf6412ebe333d651'

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var addressStr = streetStr + ', ' + cityStr;

    $greeting.text('So you want to live at ' + addressStr + '?');

    var streetviewURL = 'http://maps.googleapis.com/maps/api/' +
        'streetview?size=600x300&location=' + addressStr + '';

    $body.append('<img class="bgimg" src="' + streetviewURL + '">');



    // load new york times article-list

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
url += cityStr + '&sort=newest&api-key=' +  NYTimesKey

console.log(url)

$.getJSON(url, function(data){

    $nytHeaderElem.text('New York Times Articles About ' + cityStr);

    articles = data.response.docs;
    for ( var i = 0; i < articles.length; i++){
      var article = articles[i];
      $nytElem.append('<li class="article">'+
        '<a href="'+article.web_url+'">'+article.headline.main+
            '</a>'+
          '<p>' + article.snippet + '</p>' +
            '</li>');
    };

}).error(function(e){
    $nytHeaderElem.text('article could not be loaded');
});




    return false;
};

$('#form-container').submit(loadData);


var NYTimesKey = '3ba086a0103a4a7aaf6412ebe333d651'

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
console.log('the url is: ' + url)
url += 'Redondo Beach' + '&sort=newest&api-key=' +  NYTimesKey;

console.log("the updated url is: " + url);
