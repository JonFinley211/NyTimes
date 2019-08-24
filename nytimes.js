// var appID= c3dcd766-c6cc-4c8f-bb02-9e1b1c7ae417
// var key=48vmZRIbDQgo8l5Js2RRntA9wNNH43SQ
var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=48vmZRIbDQgo8l5Js2RRntA9wNNH43SQ"

$("button").on("click", function() {
    this 
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        currentArticle = response.response.doc[0]
        console.log(currentArticle)
    });
})a