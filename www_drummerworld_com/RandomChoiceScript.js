/*jslint browser: true*/
/*global jQuery soloOfTheDaySet videoOfTheDaySet drummerOfTheDaySet drumLessonsSet groovesOfTheDaySet frontPageImageSet*/


function getRandomSubarray(arr, size) {
    "use strict";
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

(function ($) {
    "use strict";
    $.fn.chooseRandomContent = function (childElem, pictureType) {
        return this.each(function () {
            var slots = $(childElem);
            var allElems=[];
            if (pictureType=="soloOfTheDaySet"){
                allElems=soloOfTheDaySet; /*this array is stored in another file! */
            }
            else if(pictureType=="videoOfTheDaySet"){
                allElems=videoOfTheDaySet; /*this array is stored in another file! */
            }
            else if(pictureType=="drummerOfTheDaySet"){
                allElems=drummerOfTheDaySet; /*this array is stored in another file! */
            }
             else if(pictureType=="picOfTheDaySet"){
                allElems=picOfTheDaySet; /*this array is stored in another file! */
            } else if(pictureType=="drumLessonsSet"){
                allElems=drumLessonsSet; /*this array is stored in another file! */
            }
            var shuffledElems = getRandomSubarray(allElems, slots.length);
            for (var i=0; i < shuffledElems.length; i++){
                var path=shuffledElems[i].filePath.concat("/").concat(shuffledElems[i].fileName);
                var link = $('<a></a>', { 
                    "href":shuffledElems[i].linkUrl,
                    "target":"_top"
                });
                var img = $('<img/>', { 
                    src: path,
                    class: 'random-thumb',
                });
                var linkWithImg=link.append(img);
                slots.eq(i).prepend(linkWithImg);
            }
        });    
    };

})(jQuery);

(function ($) {
    "use strict";
    $.fn.chooseRandomSound = function (childElem,pictureType) {
        return this.each(function () {
            var slots = $(childElem);
            if (pictureType=="groovesOfTheDaySet"){
                var allElems=groovesOfTheDaySet; /*this array is stored in another file! */
            }
            var shuffledElems = getRandomSubarray(allElems, slots.length);
            for (var i=0; i < shuffledElems.length; i++){
                var path=shuffledElems[i].filePath.concat("/").concat(shuffledElems[i].fileName);
                var img = $('<img />', { 
                    src: path
                });
                slots.eq(i).find("td.img-container").prepend(img);
                var soundLink = $('<audio></audio>', { 
                    "controls":"controls",
                    "preload":"none",
                    "css":{"height":"55px", "width":"280px"}
                });
                var soundSourceMp3=$('<source></source>', { 
                    "src":shuffledElems[i].linkUrl.concat(".mp3")
                });
                var soundWithSource=soundLink.append(soundSourceMp3);
                slots.eq(i).find("div.audio-container").prepend(soundWithSource);
            }
        });    
    };

})(jQuery);

(function ($) {
    "use strict";
    $.fn.chooseRandomContentNoLink = function (childElem,pictureType) {
        return this.each(function () {
            var slots = $(childElem);
            if (pictureType=="frontPageImageSet"){
                var allElems=frontPageImageSet; /*this array is stored in another file! */
            }
            var shuffledElems = getRandomSubarray(allElems, slots.length);


            for (var i=0; i < shuffledElems.length; i++){
                var path=shuffledElems[i].filePath.concat("/").concat(shuffledElems[i].fileName);
                slots.find('img').attr("src", path) 
                /*$(childElem +" img.placeholder").attr("src", path) */
            }



        });    
    };

})(jQuery);