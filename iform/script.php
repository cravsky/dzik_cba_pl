<html>
<body>
    <h1>Your data was appended to the file</h1>
    <?php
    // Binding variables with the form data
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $age = $_POST["age"];
    $color = $_POST["color"];
    $slider = $_POST["slider"];
    
    // Saving input from the form in the file
    $myfile = fopen("myfile.txt", "a") or die("Unable to open file!");
    
    // I could use timestamp or user number here
    fwrite($myfile, "*** NEXT USER ***\n");
    fwrite($myfile, "First name: ".$fname."\n");
    fwrite($myfile, "Last name: ".$lname."\n");
    fwrite($myfile, "Gender: ".$gender."\n");
    fwrite($myfile, "Age: ".$age."\n");
    fwrite($myfile, "Color: ".$color."\n");
    fwrite($myfile, "Slider position: ".$slider."\n");
    fwrite($myfile, "\n");
    fclose($myfile);
    ?>
    
   <!-- <a href="result.html">View the file</a> -->
    <h2>File preview</h2>
    <iframe src="myfile.txt"></iframe>
    <br>
    <a href="iForm.html">Reload the form</a>
</body>

</html>