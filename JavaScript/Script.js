jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });
    if ($(window).width() <= 768) {
        $(".page-wrapper").removeClass("toggled");
    }
    $("[value='Pesquisar']").click(function(){
        $(".table").removeClass("d-none");
        $(".espacos").removeClass("d-block")
        $(".espacos").addClass("d-none")
    })
    $("[value='Limpar']").click(function () {
        $(".table").addClass("d-none");
        $(".espacos").addClass("d-block")
        $(".espacos").removeClass("d-none")
    })
});