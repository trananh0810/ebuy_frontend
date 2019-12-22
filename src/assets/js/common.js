$(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    onScrollWindow();
    $(window).scroll(() => {
        onScrollWindow();
    })
})

onScrollWindow = () => {

    let position = $(window).scrollTop();

    if (position > 50) {
        $('#sec-header').addClass('header-fixed').addClass('fadeInDown');
    } else {
        $('#sec-header').removeClass('header-fixed').removeClass('fadeInDown');
    }
}