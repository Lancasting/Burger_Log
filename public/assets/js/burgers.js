$(function () {
    $(".change-devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        let newDevouredState = {
            devoured: newDevoured
        }
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to,", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("click", function (event) {
        event.preventDefault();
        var NewBurger = {
            name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
        }).then(
            function () {
                console.log("deleted burger", id)
                location.reload();
            }
        );
    });
});