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
      // クリックした要素の先祖要素の中で、classの値がname_table_novelの要素を取得
      const name_table_novel = $(this).parents('.name_table_novel'); 
      name_table_novel.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      name_table_novel.find('.is-show').removeClass('is-show');
      // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
      // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      name_table_novel.find(".panel").eq(index).addClass('is-show');
  });
});

jQuery(function($){
  $('.tab').click(function(){
      // クリックした要素の先祖要素の中で、classの値がname_table_illustの要素を取得
      const name_table_illust = $(this).parents('.name_table_illust'); 
      name_table_illust.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      name_table_illust.find('.is-show').removeClass('is-show');
      // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
      // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      name_table_illust.find(".panel").eq(index).addClass('is-show');
  });
});
// タブ切り替え  