function changeTwitterWidgetDesign(){
    var $twitter_widget = $('iframe.twitter-timeline');
    var $twitter_widget_contents = $twitter_widget.contents();
    
    if (
      $twitter_widget.length > 0 &&
      $twitter_widget[0].contentWindow.document.body.innerHTML !== ""
    ) {
      $twitter_widget_contents
        .find('head')
        .append(
            "<style>.SandboxRoot .timeline-Widget .timeline-Tweet-text{font-size:1rem;line-height:1.6rem}</style>>"
        );
    } else {
      setTimeout(function () {
        changeTwitterWidgetDesign();
      }, 350);
    }
  }
  changeTwitterWidgetDesign();

// タブ切り替え
  jQuery(function($){
    $('.tab').click(function(){
      $('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $('.is-show').removeClass('is-show');
          // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
          // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      $('.panel').eq(index).addClass('is-show');
    });
  });  
// タブ切り替え  