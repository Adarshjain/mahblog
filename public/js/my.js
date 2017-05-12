$(document).ready(function() {
    $("#bloggit").click(function() {
        $("#bloggit").empty().append("<i class=\"fa fa-circle-o-notch fa-spin fa-3 x fa-fw \"></i> <span class = \"sr-only \"> Loading... </span>");
        var myObj = {};
        myObj["title"] = $("#tinput").val();
        myObj["content"] = $("#contentin").val();
        if(myObj["content"].length === 0) {
            var $toastContent = $('<span class="yellow-text">Please enter content!</span>');
            Materialize.toast($toastContent, 4000);
            $("#bloggit").html("ADD");
            return;
        }
        var data = JSON.stringify(myObj);
        $.ajax({
            type: "POST",
            url: '/tasks',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(myObj),
            success: function(data, status, jqXHR) {
                var $toastContent = $('<span class="yellow-text">Success</span>');
                Materialize.toast($toastContent, 4000);
                $("#tinput").text = "";
                $("#contentin").text = "";
                $("#bloggit").html("ADD");
            },
            error: function(jqXHR, status) {
                var $toastContent = $('<span class="red-text">Error!</span>');
                Materialize.toast($toastContent, 4000);
                console.log('fail' + status.code);
                $("#bloggit").html("ADD");
            },
        });
    });
});
