$(document).ready(function() {  
    let round_44= 24 
    let round_45= 101
    let sg_shells= 27
    let round_mm10= 12
    let round_2mm_ec= 39
    let round_5mm= 35;
    let round_40mm_gnd= 43;
    let round_308= 23;
    let fusion_cell= 5;
    let round_alien_blaster= 2;

    var weapons = [
        {
            "name": "empty",
            "damage": "--",
            "ammo_type": "Ammo",
            "ammo_count": "--",
            "fire_rate": "--",
            "range": "--",
            "accuracy": "--",
            "value": "--",
            "weight": "--",
            "image": "<img src=''>",
        },
        {
            "name": "the-gainer",
            "damage": 48,
            "ammo_type": ".44 rounds",
            "ammo_count": round_44,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 74,
            "value": 468,
            "weight": "4.4",
            "image": "<img src='img/weapons/the-gainer.webp'>",
        },
        {
            "name": "combat-rifle",
            "damage": 28,
            "ammo_type": ".45 rounds",
            "ammo_count": round_45,
            "fire_rate": 33,
            "range": 120,
            "accuracy": 68,
            "value": 130,
            "weight": "7.0",
            "image": "<img src='img/weapons/combat-rifle.webp'>",
        },
        {
            "name": "double-barrel-shotgun",
            "damage": 80,
            "ammo_type": "Shotgun Shells",
            "ammo_count": sg_shells,
            "fire_rate": 36,
            "range": 36,
            "accuracy": 14,
            "value": 100,
            "weight": "6.0",
            "image": "<img src='img/weapons/double-barrel-shotgun.webp'>",
        },
        {
            "name": "10mm-smg",
            "damage": 17,
            "fire_rate": 91,
            "ammo_type": "10mm rounds",
            "ammo_count": round_mm10,
            "range": 84,
            "accuracy": 50,
            "value": 57,
            "weight": "3.0",
            "image": "<img src='img/weapons/10mm-smg.webp'>",
        },
        {
            "name": "gauss-rifle",
            "damage": 125,
            "ammo_type": "2mm EC",
            "ammo_count": round_2mm_ec,
            "fire_rate": 77,
            "range": 204,
            "accuracy": 60,
            "value": 200,
            "weight": "8.0",
            "image": "<img src='img/weapons/gauss-rifle.webp'>",
        },
        {
            "name": "gatling-gun",
            "damage": 43,
            "ammo_type": "5mm rounds",
            "ammo_count": round_5mm,
            "fire_rate": 20,
            "range": 120,
            "accuracy": 55,
            "value": 175,
            "weight": "18.0",
            "image": "<img src='img/weapons/gatling-gun.webp'>",
        },
        {
            "name": "m79-gnd-lnchr",
            "damage": 3,
            "ammo_type": "40mm grenade rounds",
            "ammo_count": round_40mm_gnd,
            "fire_rate": 3,
            "range": 120,
            "accuracy": 27,
            "value": 30,
            "weight": "6.0",
            "image": "<img src='img/weapons/m79-gnd-lnchr.webp'>",
        },
        {
            "name": "reba",
            "damage": 37,
            "ammo_type": ".308 rounds",
            "ammo_count": round_308,
            "fire_rate": 3,
            "range": 131,
            "accuracy": 71,
            "value": 55,
            "weight": "9.6",
            "image": "<img src='img/weapons/reba.webp'>",
        },
        {
            "name": "laser-gun",
            "damage": 21,
            "ammo_type": "Fusion Cell",
            "ammo_count": fusion_cell,
            "fire_rate": 40,
            "range": 120,
            "accuracy": 72,
            "value": 60,
            "weight": "3.0",
            "image": "<img src='img/weapons/laser-gun.webp'>",
        },
        {
            "name": "bfg-9000",
            "damage": 300,
            "ammo_type": "Alien blaster rounds",
            "ammo_count": round_alien_blaster,
            "fire_rate": "66",
            "range": "11",
            "accuracy": "52",
            "value": 2000,
            "weight": "35.0",
            "image": "<img src='img/weapons/bfg-9000.webp'>",
        },
    ];

    $(".item-list a").on('click',function(e) {
        $(".item-list a").removeClass("active");
        $(this).addClass("active");
    });

    $(".item-list a").on('mouseenter',function(e) {  
        var current_item = $(this).attr("class");
        // console.log(current_item);

        for(weapon in weapons){
            if(weapons[weapon].name == current_item){
                // console.log(current_item);

                var container= $(".item-stats");
                var img_container= $(".item-image");
                container.find(".damage").html(weapons[weapon].damage);
                container.find(".ammo-type").html(weapons[weapon].ammo_type);
                container.find(".ammo-count").html(weapons[weapon].ammo_count);
                container.find(".fire-rate").html(weapons[weapon].fire_rate);
                container.find(".range").html(weapons[weapon].range);
                container.find(".accuracy").html(weapons[weapon].accuracy);
                container.find(".value").html(weapons[weapon].value);
                container.find(".weight").html(weapons[weapon].weight);
                img_container.html(weapons[weapon].image);
            }
        }
    });
    $(".item-list a").on('mouseleave',function(e) {
        var container= $(".item-stats");
        var img_container= $(".item-image");
        container.find(".damage").html(weapons[0].damage);
        container.find(".ammo-type").html(weapons[0].ammo_type);
        container.find(".ammo-count").html(weapons[0].ammo_count);
        container.find(".fire-rate").html(weapons[0].fire_rate);
        container.find(".range").html(weapons[0].range);
        container.find(".accuracy").html(weapons[0].accuracy);
        container.find(".value").html(weapons[0].value);
        container.find(".weight").html(weapons[0].weight);
        img_container.html("");
    });

    $('.item-list a').on('mouseleave',function(e) {
        var current_item = $(':focus');
        current_item = $(':focus').attr('class');
        for(weapon in weapons){
          if(weapons[weapon].name + ' active' == current_item){
            let container = $('.item-stats');
            let img_container = $('.item-image');
            container.find('.damage').html(weapons[weapon].damage);
            container.find(".ammo-type").html(weapons[weapon].ammo_type);
            container.find(".ammo-count").html(weapons[weapon].ammo_count);
            container.find('.fire-rate').html(weapons[weapon].fire_rate);
            container.find('.range').html(weapons[weapon].range);
            container.find('.accuracy').html(weapons[weapon].accuracy);
            container.find('.value').html(weapons[weapon].weight);
            container.find('.weight').html(weapons[weapon].value);
            img_container.html(weapons[weapon].image);
          }
        }
    });
});