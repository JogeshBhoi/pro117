function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yhl-whYL6/', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_lable").innerHTML = 'I can hear - '+
      results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accurany - '+
      (results[0].confidence*100).tofixed(2)+" %";
      document.getElementById("result-label").style.color = "rgb("
      +random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("
      +random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');

      if (result[0].lable == "Clap") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (result[0].lable == "bell") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (result[0].lable == "Snapping") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      }else{
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      }
    }
}