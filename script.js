$(".compute").click(function() {
    var currentYear=2019;
    var yearborn = $("input").val();
    var age=currentYear-yearborn;
    $(".current-age").append(age);
});

$(".calculate").click(function() {
    var targetYear = $(".Age").val();
    var yearBorn = $(".year-born").val();
    var age= targetYear-yearBorn;
    $(".Any-Age").text(age);
});

$(".wow").click(function() {
    var targetYear = $(".Alternate-Dimensions").val();
    var currentYear = 2019;
    var yearborn = $("input").val();
    var totalAge=targetYear*(currentYear-yearborn);
    $(".total-age").text(totalAge);
    
});