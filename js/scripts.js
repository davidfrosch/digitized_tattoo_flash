
var imageArray = new Array(); 

function createArray(){
for (i = 0; i < 48; i++) {
    imageArray.push('pics/2016_'+i+'.JPG');
    console.log(imageArray);
  };
}



var j = 0

function updateImgB(){
   j++ ;
   var url = 'url(' + imageArray[j] + ')';
   console.log(url);
   document.getElementById('2016').style.backgroundImage=url;
 }