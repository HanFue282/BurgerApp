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
                console.log("Chanfed devour to", newEats);
                location.reload();
            }
        );
    });

    $(".delete-burgers").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");

        $.ajax("/api/burger/" + id, {
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
            name: $("burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("api/burger", {
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