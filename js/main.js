$(document).ready (function () {

        $(".generate").click(function (e) {

            (e).preventDefault();
            
            let combi1 = [$("#brand").val(),' '+$("#product").val()];
            let combi2 = [$("#brand").val(),' '+$("#reference").val()];
            let combi3 = [$("#brand").val(),' '+$("#specification").val()];
            let combi4 = [$("#product").val(),' '+$("#reference").val()];
            let combi5 = [$("#product").val(),' '+$("#specification").val()];
            let combi6 = [$("#reference").val(),' '+$("#specification").val()];
            let combi7 = [$("#brand").val(),' '+$("#product").val(),' '+$("#reference").val()];
            let combi8 = [$("#brand").val(),' '+$("#product").val(),' '+$("#specification").val()];
            let combi9 = [$("#brand").val(),' '+$("#reference").val(),' '+$("#specification").val()];
            let combi10 = [$("#product").val(),' '+$("#reference").val(),' '+$("#specification").val()];
            let combi11 = [$("#brand").val(),' '+$("#product").val(),' '+$("#reference").val(),' '+$("#specification").val()];

            $("#combination").append(`${combi1} <br/> ${combi2} <br/> ${combi3} <br/> ${combi4}<br/> ${combi5}<br/> ${combi6}<br/> ${combi7}<br/> ${combi8}<br/> ${combi9}<br/> ${combi10}<br/> ${combi11}`);

            $("#brand").val("");
            $("#product").val("");
            $("#reference").val("");
            $("#specification").val("");

        });

        $(".reset").click(function (e) {
            $("#combination").empty();
        });


        $(".selectAll").click(function (e) {
            let selectAll = document.querySelector("#combination");
            let range = document.createRange();
            range.selectNode(selectAll);
            window.getSelection().addRange(range);
                $(".paste").click(function (e) {
                    e.preventDefault();
                    navigator.clipboard.writeText($("#combination").html());
                    alert("Le texte a bien été copié !");
                });
        });
        
        
        
    //end of document ready
    });