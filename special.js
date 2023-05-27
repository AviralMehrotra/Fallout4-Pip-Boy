$(document).ready(function() {  
    var special_characterstics = [
        {
            "name": "empty",
            "desc": "",
            "image": "<img src=''>",
        },
        {
            "name": "sp-strength",
            "desc": "Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.",
            "image": "<img src='img/stat-special/Strength_FO4.webp'>",
        },
        {
            "name": "sp-perception",
            "desc": "Perception is your environmental awareness and 'sixth sense,' and affects weapon accuracy in V.A.T.S.",
            "image": "<img src='img/stat-special/Perception_FO4.webp'>",
        },
        {
            "name": "sp-endurance",
            "desc": "Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.",
            "image": "<img src='img/stat-special/Endurance_FO4.webp'>",
        },
        {
            "name": "sp-charisma",
            "desc": "Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.",
            "image": "<img src='img/stat-special/Charisma_FO4.webp'>",
        },
        {
            "name": "sp-intelligence",
            "desc": "Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.",
            "image": "<img src='img/stat-special/Intelligence_FO4.webp'>",
        },
        {
            "name": "sp-agility",
            "desc": "Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.",
            "image": "<img src='img/stat-special/Agility_FO4.webp'>",
        },
        {
            "name": "sp-luck",
            "desc": "Luck is the measure of your general good fortune, and affects the recharge rate of critical hits.",
            "image": "<img src='img/stat-special/Luck_FO4.webp'>",
        },
    ];

    $(".spc-list a").on('click',function(e) {
        $(".spc-list a").removeClass("active");
        $(this).addClass("active");
    });

    $(".spc-list a").on('mouseenter',function(e) {  
        var current_item = $(this).attr("class");
        // console.log(current_item);

        for(spec in special_characterstics){
            if(special_characterstics[spec].name == current_item){
                // console.log(current_item);

                var container= $(".special-description");
                var img_container= $(".item-image");
                container.find(".desc").html(special_characterstics[spec].desc);
                img_container.html(special_characterstics[spec].image);
            }
        }
    });
    $(".spc-list a").on('mouseleave',function(e) {
        var container= $(".special-description");
        var img_container= $(".item-image");
        container.find(".desc").html(special_characterstics[0].desc);
        img_container.html("");
    });

    // $('.spc-list a').on('mouseleave',function(e) {
    //     var current_item = $(':focus');
    //     current_item = $(':focus').attr('class');
    //     for(spec in special_characterstics) {
    //       if(special_characterstics[spec].name + ' active' == current_item){
    //         let container = $('.special-description');
    //         let img_container = $('.item-image');
    //         container.find(".desc").html(special_characterstics[spec].desc);
    //         img_container.html(special_characterstics[spec].image);
    //       }
    //     }
    // });
});