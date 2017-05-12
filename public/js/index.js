var colors = ["yellow", "pink", "red", "green", "grey darken-3", "deep-orange", "orange", "purple", "deep-purple", "indigo", "blue", "cyan", "teal", "brown"];
var last = [];
var final = "";
$(document).ready(function() {
    $.ajax({
        url: "/tasks",
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            $.each(data, function(index, value) {
                disp(value);
            });
            $("#body").empty().append(final);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(errorThrown);
            console.log(textStatus);
        },

        timeout: 120000,
    });
});

function disp(value) {
    var clss = getClass();
    var color_text = "";
    if (clss != "yellow") {
        color_text = "white-text";
    }
    var content = "<div class=\"col s12 m6\">\
                        <div class=\"card " + clss + "\">\
                            <div class=\"card-content " + color_text +"\">\
                                <span class=\"card-title\">" + value.title + "</span>\
                                <p>" + value.content + "</p>\
                            </div>\
                        </div>\
                    </div>";
    final += content;
}

function getClass() {
    var newRand = Math.floor(Math.random() * colors.length);
    while($.inArray(newRand, last) > -1) {
        if (last.length > 13) {
            last = [];
        }
        newRand = Math.floor(Math.random() * colors.length);
    }
    last.push(newRand);
    return colors[newRand];
}
