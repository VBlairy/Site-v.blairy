$('document').ready(function () {
    $('#screenshot').on('click', function () {
        createScreenShotImage();
    });
    $('body').on('keyup', function (e) {

        if (e.keyCode === 32) {
            createScreenShotImage();
        }
    });
});

function createScreenShotImage() {
    html2canvas($('canvas'), {
        onrendered: function (canvas) {
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
}

