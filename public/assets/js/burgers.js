$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");
    
        var newBurgerState = {
          eaten: newBurger
        };
    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            // console.log("Added a new burger: ", newBurger);
            location.reload();
          }
        );
      });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        type: $("#burger").val().trim(),
        
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
  
});