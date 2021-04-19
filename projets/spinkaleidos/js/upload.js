$('document').ready(function () {
  $('input[type=file]').on('change', function () {
    var $files = $(this).get(0).files;

    if ($files.length) {
      if ($files[0].size > $(this).data('max-size') * 1024) {
        alert('Please select a smaller file');
        return false;
      }

      var apiUrl = 'https://api.imgur.com/3/image';
      var clientId = '21a2d9bc8341170';

      var settings = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: apiUrl,
        headers: {
          Authorization: 'Client-ID ' + clientId,
          Accept: 'application/json',
        },
        mimeType: 'multipart/form-data',
      };

      var formData = new FormData();
      formData.append('image', $files[0]);
      settings.data = formData;

      $.ajax(settings).done(function (response) {
        window.location.href = window.location.href.split('?')[0] + '?image=' + JSON.parse(response).data.link;
      });
    }
  });
});