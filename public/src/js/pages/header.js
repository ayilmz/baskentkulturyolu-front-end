$(document).ready(function() {
    $(".header-search-bar").click(searchAreaClicked);
    $(".header-search-area-close").click(searchAreaClose);
    $(".language-container").click(selectionLanguage);
});

function selectionLanguage(){
    var language_list = $(".language-list");
    if(language_list.hasClass("d-none")){
        language_list.removeClass("d-none");
    }else{
        language_list.addClass("d-none");
    }
}

function searchAreaClicked (){
    $(".header-search-area").addClass("clicked");
    $(".header-search-area-close").removeClass("d-none");

    $(".search-open").removeClass("d-none");
    $(".header-search-area-categories").removeClass("d-none");
}

function searchAreaClose (){
    $(".header-search-area").removeClass("clicked");
    $(".header-search-area-close").addClass("d-none");

    $(".search-open").addClass("d-none");
    $(".header-search-area-categories").addClass("d-none");
}