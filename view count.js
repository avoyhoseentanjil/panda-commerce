<!DOCTYPE html>
<html>
<head>
  <title>Post View Count</title>
  <script>
    function incrementViewCount() {
      // Get the current view count from the HTML element
      var viewCount = parseInt(document.getElementById("view-count").innerHTML);
      
      // Increment the view count by 1
      viewCount++;
      
      // Update the HTML element with the new view count
      document.getElementById("view-count").innerHTML = viewCount;
    }
  </script>
</head>
<body onload="incrementViewCount()">
  <h1>Post Title</h1>
  <p>Post content goes here...</p>
  <p>Views: <span id="view-count">0</span></p>
</body>
</html>
