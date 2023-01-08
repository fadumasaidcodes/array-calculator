function calculate() {
    // Get the array from the input field
    var array = document.getElementById("array").value;
    
    // Split the array into individual elements
    array = array.split(",");
    
    // Convert the elements to numbers
    for (var i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    
    // Calculate the sum of the array
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    // Calculate the average of the array
    var average = sum / array.length;
    
    // Display the result
    document.getElementById("result").innerHTML = "Sum: " + sum + "<br>Average: " + average;
  }
  