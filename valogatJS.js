jQuery(function () {
    valasztJson=function () {
        $.ajax({
            url: "testJson",
            type: "GET",
            dataType: "JSON",
            context: this,
            success: function (data) {
                $("#egyéb").empty();
                var innertable= $("<table style= 'border: 2px solid';> </table>").attr('id', 'innertable');
                
				innertable.append("<tr> <th style= 'border-right: 1px solid';><center>Név:</center></th><th style= 'border-right: 1px solid';><center>Manaérték:</center></th><th><center>Kiegészítõ:</center></th></tr></table>");
				
				for (i in data){
					if (data[i].Kieg == "Un'Goro"){innertable.append("<tr><td style= 'border-right: 1px solid';><center>"+data[i].Nev+"</center></td><td style= 'border-right: 1px solid';><center>"+ data[i].Mana+"</center></td><td><center>"+ data[i].Kieg+"</center></td> </tr>");}
                }
               $("#egyéb").append(innertable)
            }
            }
        )
    }
})