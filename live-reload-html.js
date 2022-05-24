function liveReload(reloadTime=2500, reloadUrl='', originDebugDomin = false) {
    var _reload_message = 'Hot Reload';
    var _start_check = false;

    if((originDebugDomin && originDebugDomin == window.origin) || originDebugDomin==false){
      _start_check = true;
    }

    if(_start_check)
    setInterval(() => {
      fetch(reloadUrl)
        .then(res => res.text())
        .then(text => {
          var html = document.createElement('html');
          html.innerHTML = text;
          var body = html.getElementsByTagName('body')[0];

          if (document.body.innerHTML != body.innerHTML) {

            reloadStylesheets();
            document.body.innerHTML = body.innerHTML;
            console.log(_reload_message);
          }
        })
    }, reloadTime)
  }



  function reloadStylesheets() {
    var queryString = '?reload=' + new Date().getTime();

    var links = document.querySelectorAll('link[rel="stylesheet"]')
    console.log(links);
    links.forEach(style => {
      style.href = style.href.replace(/\?.*|$/, queryString);
    })
  }