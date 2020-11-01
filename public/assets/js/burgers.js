$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");
    
        var newBurgerState = {
          eaten: newBurger
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            console.log("changed burger to", newBurger);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        type: $("#burger").val().trim(),
        // eaten: $("[name=eaten]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});