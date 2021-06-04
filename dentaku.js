$(function(){

    var uti = 0;
    var hyouji;
    var keta = 1;
    var ketah = 10000000;
    var ju = 10;

    var hozon = 0;

    var enzan = 1;

    var kake = 1;
    var waru = 1;
    var tasu = 0;
    var hiku = 0;

    var checksyousuu;
    var checkzentai;
    var checkseisuu;
    var checkketa;

    var error = 0;


    var syokika = 1;
    var syousuu = 0;

    $('button').on('click',function(){

        $('.hyouji').text('');

    });

    $('#1').on('click',function(){
        uti = 1 * keta + ju * uti;
    });

    $('#2').on('click',function(){
        uti = 2 * keta + ju * uti;
    });

    $('#3').on('click',function(){
        uti = 3 * keta + ju * uti;
    });

    $('#4').on('click',function(){
        uti = 4 * keta + ju * uti;
    });

    $('#5').on('click',function(){
        uti = 5 * keta + ju * uti;
    });

    $('#6').on('click',function(){
        uti = 6 * keta + ju * uti;
    });

    $('#7').on('click',function(){
        uti = 7 * keta + ju * uti;
    });

    $('#8').on('click',function(){
        uti = 8 * keta + ju * uti;
    });

    $('#9').on('click',function(){
        uti = 9 * keta + ju * uti;
    });

    $('.number-button').on('click',function(){

        uti = Number(uti);
        uti = uti.toFixed(syousuu);

        hyouji = Number(uti);

        checksyousuu = syousuu;
        checkseisuu = String(Math.floor(uti)).length;

        if(checksyousuu == 0){
            checkketa = checkseisuu;
        }
        else{
            checkketa = checksyousuu + checkseisuu;
        }

        if(checkketa < 8){

            $('.hyouji').text('' + hyouji + '');
        }
        else{
            $('.hyouji').text('');
            $('.hyouji').text('(7桁を超えました)E');
            error = 1;
        }

        if(enzan == 1){tasu = hyouji;}
        if(enzan == 2){hiku = hyouji;}
        if(enzan == 3){kake = hyouji;}
        if(enzan == 4){waru = hyouji;}

        if(syokika == 0){
            hozon = 0;
            syokika = 1;
        }
    });

    $('#0').on('click',function(){

      if(keta != 1){
          syousuu = Math.log10(1 / keta);
      }
      else{
          syousuu = 0;
      }

        checksyousuu = syousuu;
        checkseisuu = String(Math.floor(uti)).length;

        if(checksyousuu == 0){
            checkketa = checkseisuu;
        }
        else{
            checkketa = checksyousuu + checkseisuu;
        }

        if(checkketa < 7){
            if(keta == 1){
                uti = 0 * keta + ju * uti;
                hyouji = Number(uti);

                $('.hyouji').text('' + hyouji + '');
            }

            if(enzan == 1){tasu = hyouji;}
            if(enzan == 2){hiku = hyouji;}
            if(enzan == 3){kake = hyouji;}
            if(enzan == 4){waru = hyouji;}

            if(syokika == 0){
                hozon = 0;
                syokika = 1;
            }
        }

        else{
            $('.hyouji').text('');
            $('.hyouji').text('(7桁を超えました)E');
            error = 1;
        }
    });

    $('.kigou').on('click',function(){

     if(error == 0){
         if(enzan == 1){
             tasu = tasu * ketah;
             hozon = hozon * ketah;
             hozon = Math.round(hozon + tasu);
             hozon = hozon / ketah;
         }

         if(enzan == 2){
             hiku = hiku * ketah;
             hozon = hozon * ketah;
             hozon = Math.round(hozon - hiku);
             hozon = hozon / ketah;
         }

         if(enzan == 3){
             kake = kake * ketah;
             hozon = hozon * ketah;
             hozon = Math.round(hozon * kake);
             hozon = hozon / ketah / ketah;
         }

         if(enzan == 4){
             waru = waru * ketah;
             hozon = hozon * ketah;
             hozon = hozon / waru;
         }

         checkseisuu = String(Math.floor(hozon)).length;
         checkzentai = String(hozon).length;
         checksyousuu = checkzentai - checkseisuu - 1;

         if(checksyousuu == -1){
             checkketa = checkzentai;
         }
         else{
             checkketa = checkzentai - 1;
         }

         uti = 0;
         hyouji = 0;
         tasu = 0;
         hiku = 0;
         kake = 1;
         waru = 1;
         keta = 1;
         ju = 10;
         syokika = 1;

         $('.hyouji').text('');
     }
    });


    $('#＋').on('click',function(){
        if(error == 0){
            enzan = 1;

            if(checkketa < 8){
                $('.hyouji').text('' + hozon + '+');
            }
            else{
                $('.hyouji').text('(7桁を超えました)E');
                error = 1;
            }
        }
    });

    $('#－').on('click',function(){
        if(error == 0){
            enzan = 2;

            if(checkketa < 8){
                $('.hyouji').text('' + hozon + '-');
            }
            else{
                $('.hyouji').text('(7桁を超えました)E');
                error = 1;
            }
        }
    });

    $('#×').on('click',function(){
        if(error == 0){
            enzan = 3;

            if(checkketa < 8){
                $('.hyouji').text('' + hozon + '×');
            }
            else{
                $('.hyouji').text('(7桁を超えました)E');
                error = 1;
            }
        }
    });

    $('#÷').on('click',function(){
        if(error == 0){
            enzan = 4;

            if(checkketa < 8){
                $('.hyouji').text('' + hozon + '÷');
            }
            else{
                $('.hyouji').text('(7桁を超えました)E');
                error = 1;
            }
        }
    });

    $('#＝').on('click',function(){
        if(error == 0){
            if(enzan == 1){
                tasu = tasu * ketah;
                hozon = hozon * ketah;
                hozon = Math.round(hozon + tasu);
                hozon = hozon / ketah;
            }

            if(enzan == 2){
                hiku = hiku * ketah;
                hozon = hozon * ketah;
                hozon = Math.round(hozon - hiku);
                hozon = hozon / ketah;
            }

            if(enzan == 3){
                kake = kake * ketah;
                hozon = hozon * ketah;
                hozon = Math.round(hozon * kake);
                hozon = hozon / ketah / ketah;
            }

            if(enzan == 4){
                waru = waru * ketah;
                hozon = hozon * ketah;
                hozon = hozon / waru;
            }

           uti = 0;
           hyouji = 0;
           tasu = 0;
           hiku = 0;
           kake = 1;
           waru = 1;
           ju = 10;
           enzan = 1;
           syousuu = 0;
           syokika = 0;

            $('.hyouji').text('');

            checkzentai = String(hozon).length;
            checkseisuu = String(Math.floor(hozon)).length;
            checksyousuu = checkzentai - checkseisuu -1;

            if(checksyousuu == -1){
                checkketa = checkzentai;
            }
            else{
                checkketa = checkzentai -1;
            }

            if(checkketa < 8){
                $('.hyouji').text('' + hozon + '');
            }
            else{
                $('.hyouji').text('(7桁を超えました)E');
                error = 1;
            }
        }
    });

    $('#AC').on('click',function(){

        uti = 0;
        hyouzi = 0;
        tasu = 0;
        hiku = 0;
        kake = 1;
        waru = 1;
        keta = 1;
        ju = 10;
        hozon = 0;
        enzan = 1;
        error = 0;
        $('.hyouji').text('');
        $('.hyouji').text('0');
    });
})
