$(function () {
  $('.button-more').on('mouseover', function () {
    $(this).animate( {
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function () {
    $(this).animate( {
      opacity: 1.0,
      marginLeft: 0
    }, 100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時
  $('#submit').on('click', function (event) {
    event.preventDefault();
    let result = inputCheck('all');
    let error = result.error;
    let message = result.message;
    if (error == false) {
      alert('お問い合わせを送信しました。');
    } else {
      alert(message);
    }
  });

  // フォーカスが外れた時+フォーカスされた時
  $('#name').blur(function () {
    inputCheck('l_name');
  });
  $('#name').focus(function () {
    $('#name').css('background-color', '#fafafa');
  });
  $('#furigana').blur(function () {
    inputCheck('l_furigana');
  });
  $('#furigana').focus(function () {
    $('#furigana').css('background-color', '#fafafa');
  });
  $('#email').blur(function () {
    inputCheck('l_email');
  });
  $('#email').focus(function () {
    $('#email').css('background-color', '#fafafa');
  });
  $('#tel').blur(function () {
    inputCheck('l_tel');
  });
  $('#tel').focus(function () {
    $('#tel').css('background-color', '#fafafa');
  });
  $('#message').blur(function () {
    inputCheck('l_message');
  });
  $('#message').focus(function () {
    $('#message').css('background-color', '#fafafa');
  });
  $('#agree').click(function () {
    inputCheck('l_agree');
  });
  $('#prefecture').blur(function () {
    inputCheck('l_prefecture');
  });
  $('#prefecture').focus(function () {
    $('#prefecture').css('background-color', '#fafafa');
  });

  // フォームの入力チェック
  function inputCheck( label ) {
    let result;
    let message = '';
    let error = false;
    switch( label ) {
      case 'l_name': 
        if ($('#name').val() == '') {
          $('#name').css('background-color', '#f79999');
        } else {
          $('#name').css('background-color', '#fafafa');
        };
        break;
      case 'l_furigana':
        if ($('#furigana').val() == '') {
          $('#furigana').css('background-color', '#f79999');
        } else {
          $('#furigana').css('background-color', '#fafafa');
        };
        break;
      case 'l_message':
        if ($('#message').val() == '') {
          $('#message').css('background-color', '#f79999');
        } else {
          $('#message').css('background-color', '#fafafa');
        };
        break;
      case 'l_email':
        if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
          $('#email').css('background-color', '#f79999');
        } else {
          $('#email').css('background-color', '#fafafa');
        };
        break;
      case 'l_tel':
        if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1 ) {
          $('#tel').css('background-color', '#f79999');
        } else {
          $('#tel').css('background-color', '#fafafa');
        };
        break;
      case 'l_prefecture':
        if ($('#prefecture').val() == '') {
          $('#prefecture').css('background-color', '#f79999');
        } else {
          $('#message').css('background-color', '#fafafa');
        };
        break;
      default:
        break;
    }
    if ($('#name').val() == '') {
      error = true;
      message += 'お名前を入力してください。\n';
    };
    if ($('#furigana').val() == '') {
      error = true;
      message += 'フリガナを入力してください。\n';
    };
    if ($('#message').val() == '') {
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    };
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    };
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1 ) {
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    };
    if ($('#prefecture').val() == '') {
      error = true;
      message += '都道府県を選択してください。\n';
    };
    if ($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    };
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    };
    result = {
    error: error,
    message: message
    }
    return result;
  };
});