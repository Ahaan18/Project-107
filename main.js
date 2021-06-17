prediction = "";
Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90
});
cam = document.getElementById("camerae");
Webcam.attach("#camerae");
console.log("ml5.version", ml5.version);
x = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qUMYT2Zdd/model.json', moelLoaded);
function moelLoaded(){
    console.log("Model loaded!");
}
function capture(){
    Webcam.snap(function(sfh){
document.getElementById("result").innerHTML = '<img id="img654" src="'+sfh+'">';
    });
}