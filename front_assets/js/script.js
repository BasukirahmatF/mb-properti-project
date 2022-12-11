$(".-carousel").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: $("#arrowNext"),
    prevArrow: $("#arrowPrev"),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                dots:true,
                slidesToShow: 1,
                arrows: false,
            },
        }
    ]
});

function myFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input=document.getElementById('search-home');
    filter=input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
}