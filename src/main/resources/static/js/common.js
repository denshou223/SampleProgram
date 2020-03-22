  //スムーズスクロール
  // #で始まるアンカーをクリックした場合にスムーススクロール
  // $('a[href^=#]').click(function() {
  //   var speed = 500;
  //   // アンカーの値取得
  //   var href= $(this).attr('href');
  //   // 移動先を取得
  //   var target = $(href === '#' || href === '' ? 'html' : href);
  //   // 移動先を数値で取得
  //   var position = target.offset().top;
    
  //   // スムーススクロール
  //   $('body,html').animate({scrollTop:position}, speed, 'swing');
  //   return false;
  // });

  $('#menu-btn').click(function() {
    $('.wrapper').toggleClass('show-global-menu');
  });

  $(function() {

    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    } else {
      $(window).on('load', function() {
        $('.list li a .box').matchHeight();
      });
    }

    // code-prettify用
    prettyPrint();

  });

  let commentSends = document.getElementsByClassName("commentSend");
  if(commentSends != null){
      Array.prototype.forEach.call(commentSends, e => {
         e.addEventListener("click",() => {
            if(!document.getElementById("modal").classList.contains("show")){
              document.getElementById("modal").classList.add("show");
            }
            return false;
         }, false);
      });

      document.getElementById("modalClose").addEventListener("click",() => {
        document.getElementById("modal").classList.remove("show");
      });

      document.getElementById("modalBg").addEventListener("click",() => {
        document.getElementById("modal").classList.remove("show");
      });
  }