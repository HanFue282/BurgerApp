$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newEats = $(this).data("neweats");

        var newEatState = {
            devoured: newEats
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("Changed devour to", newEats);
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger!");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created burger!");
                location.reload();
            }
        );
    });
});