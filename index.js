// let docTitle = HomePage;
// window.addEventListener("blur", () {
//     document.title = "Comeback :("
// })
// window.addEventListener("focus", () {
//     document.title = "Homepage :("
// })
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Come Back :(';
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        document.title = attentionMessage;
      }else {
        document.title = pageTitle;
      }
    });
  };