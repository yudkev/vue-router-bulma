$(document).ready(function () {
var $body = $("body"); 
    
    var $galleryModal = $(".gallery-modal");
    var $galleryModalItem = $(".project-item");
   

    
    projObj = [{
        "name": "Data Visualization",
        "info": "Mocked up and implemented a client-facing reporting platform for real-time data with custom/mutlidiemsional?? display configuration. Oversaw and completed visual and UX redesign after interviews with product managers and clients. Introduced real-time data dive-"
        },{ 
        "name": "Analytics",
        "info": "I redesigned and helped implement the advanced enterprise version of an existing repricing product that was delivered white-labeled and highly customized for each PBM client, whose pricing analysts were previously accustomed to performing calculations and running simulations with Excel. The greatest challenge was optimizing such a complex and elaborate set of configuration options, requiring several design/information architecture sprints as well as backend consultation to determine the best 'wizard' interface. Since certain steps could be left blank, or assumed defaults set by the admin - others required file upload or manual user override, reconciling our promise of automation with visual warnings made validation an additional challenge. A field left blank, or off by one decimal, could drastically alter the calculated results."
        },{
        "name": "UI Frameworks",
        "info": "At Tabcorp, I had the amazing opportunity to augment their internal team of Javascript and Angular developers. While they focused on the game mechanics happening behind the scenes, I was tasked with structuring the CSS architecture and realizing animation prototypes in browser."
        }];


        $galleryModalItem.each(function(index) {
            var dataProj = $(this).data("project");
            $(this).find(".gallery-label").text(projObj[index].name);
            $(this).on("click", function() { 

                $(".project-name").html(projObj[index].name);
                if (projObj[index].name == "Analytics") {
                    $("#video-row").css("display", "table-row");
                } else {
                    $("#video-row").css("display", "none");
                }
                $(".project-desc").html(projObj[index].info);
                var i;
        var projectImg; 
        for (i = 1; i < 7; i++) { 
            projectImg += "<tr class='project-row'><td><img src='img/" + projObj[index].name + "/img" + i + ".png'></td></tr>";
        }
                $(".project-row").html(projectImg);
                $galleryModal.show(); 
                $body.css("overflow-y", "hidden");
                // $galleryModal.on("click", function() {
                //     $galleryModal.fadeOut();
                // });
                $(document).keyup(function(e) {
                    if (e.keyCode === 27) {
                        $galleryModal.hide(); 
                        $body.css("overflow-y", "auto");
                    }
                });
            });
        });

        $(".modal-close").on("click", function() {
            $galleryModal.fadeOut();
            $body.css("overflow-y", "auto");
        });
    });