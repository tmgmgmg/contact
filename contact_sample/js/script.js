//=====================================================
// ヘッダー分下げる
//=====================================================
$(function () {
  jQuery(function () {
    var windowWidth = $(window).width();
    var headerHight = 100;
    jQuery('a[href^=#]').click(function () {
      var speed = 1000;
      var href = jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHight;
      jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });
});

// 他ページ化の遷移時
$(function () {
  scrollTo(0, 0);
});

$(window).on('load', function () {
  var ahash = location.hash;
  if (ahash) {
    var gotoNum = $(ahash).offset().top;
    $('html,body').animate({ scrollTop: gotoNum - 130 }, 0);
  }
  return false;
});


//=====================================================
//タブ切り替え
//=====================================================

// $(function () {
//   var $filters = $('.filter [data-filter]'),
//     $boxes = $('.works-table-wrapper [data-category]');

//   $filters.on('click', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     $filters.removeClass('active');
//     $this.addClass('active');

//     var $filterTime = $this.attr('data-filter');

//     if ($filterTime == 'all') {
//       $boxes.removeClass('is-animated')
//         .fadeOut().promise().done(function () {
//           $boxes.addClass('is-animated').fadeIn();
//         });
//     } else {
//       $boxes.removeClass('is-animated')
//         .fadeOut().promise().done(function () {
//           $boxes.filter('[data-category~="' + $filterTime + '"]')
//             .addClass('is-animated').fadeIn();
//         });
//     }
//   });
// })

$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.news_area [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-category~="' + $filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
})

//=====================================================
// object-fit
//=====================================================
$(function () {
  objectFitImages('.photo-ofi img');
});
//=====================================================
// swiper
//=====================================================
// $(function () {
//   var swiper = new Swiper('.swiper-fv', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     loop: true,
//     autoplay: {
//       delay: 3000, //表示時間
//       disableOnInteraction: true //操作中の自動再生停止
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
//     speed: 1000, //切り替わる時間
//     effect: 'fade',
//     crossFade: true,
//   });
// });

//=====================================================
// pagetop.js
//=====================================================

$(function () {

  // 「ページトップへ」の要素を隠す
  $('#pagetop').hide();

  // スクロールした場合
  $(window).scroll(function () {
    // スクロール位置が100を超えた場合
    if ($(this).scrollTop() > 100) {
      // 「ページトップへ」をフェードイン
      $('#pagetop').fadeIn();
    }
    // スクロール位置が100以下の場合
    else {
      // 「ページトップへ」をフェードアウト
      $('#pagetop').fadeOut();
    }
  });

  // 「ページトップへ」をクリックした場合
  $('#pagetop').click(function () {
    // ページトップにスクロール
    $('html,body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

//=====================================================
// tel.js
//=====================================================

$(function () {
  if (!isPhone()) {
    return;
  }

  $('span[data-action=call]').each(function () {
    var $ele = $(this);
    var telorg = $(this).text();
    if (telorg == "") {
      var telorg = $(this).children('img').attr('alt');
    }
    var telfix = telorg.replace(/[^0-9]/g, '');
    $ele.wrap('<a class="ddd" href="tel:' + telfix + '"></a>');
  });
});

function isPhone() {

  // Edgeを弾く
  if (navigator.userAgent.indexOf('Edge') >= 0) {
    return false;
  }

  // Android且つMobileだった場合、電話機とみなす
  if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0) {
    return true;
  }

  // 最後はiPhoneかどうかを判定し、結果を返す
  return (navigator.userAgent.indexOf('iPhone') >= 0);
};

//=====================================================
// not_enter.js
//=====================================================

$(document).ready(function () {
  $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      return false;
    } else {
      return true;
    }
  });
});

//=====================================================
// tab
//=====================================================
$(function () {
  $('.js-tab-link').click(function () {
    $('.js-tab-box').hide().filter(this.hash).fadeIn();
    $('js-tab_link').removeClass('selected');
    $(this).addClass('selected');
    $('.js-tab_item').removeClass('select');
    $(this).parent('.js-tab_item').addClass('select');
    return false;
  }).filter(':eq(0)').click();
});
