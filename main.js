Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
 camera = 
 document.getElementById("camera");

 Webcam.attach('#camera') ;
   
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function madeloaded(){
    console.log("model loaded!");
}

function check()
{
    img = document.getElementById('captued_image');
classifier.classify(img, gotResult);
}



function gotResult(error,result) {
    if (error) {
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_object_name").innerhtml =result[0].label;
        document.getElementById("result_object_accuracy").innerhtml =result[0].confidense.tofixed(3
            );
    }
}