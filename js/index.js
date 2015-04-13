(function() {
  var timeSince;

  timeSince = function(date) {
    var interval, seconds;
    seconds = Math.floor((new Date() - date) / 1000);
    interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + "年前";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + "个月前";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + "天前";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + "小时前";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + "分钟前";
    }
    return Math.floor(seconds) + "秒前";
  };

  $(function() {
    $('.date').each(function(idx, item) {
      var $date, date, timeStr, unixTime;
      $date = $(item);
      timeStr = $date.data('time');
      if (timeStr) {
        unixTime = Number(timeStr) * 1000;
        date = new Date(unixTime);
        return $date.prop('title', date).find('.from').text(timeSince(date));
      }
    });
    $('pre code').each(function(i, block) {
      return hljs.highlightBlock(block);
    });
    $('img').each(function(idx, item) {
      var $item, $link, imageAlt;
      $item = $(item);
      $item.wrap('<a class="image-preview"></a>');
      $link = $item.parent('a');
      $link.prop('href', $item.prop('src'));
      imageAlt = $item.prop('alt');
      if ($.trim(imageAlt)) {
        return $link.after('<div class="image-alt">' + imageAlt + '</div>');
      }
    });
    if ($().fluidbox) {
      return $('.image-preview').fluidbox();
    }
  });

}).call(this);
