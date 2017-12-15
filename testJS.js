jQuery(function () {
    readJSON=function () {
        $.ajax({
            url: "testJson",
            type: "GET",
            dataType: "JSON",
            context: this,
            success: function (data) {
                $("#tartalom").empty();
                var innertable= $("<table style= 'border: 2px solid';> </table>").attr('id', 'innertable');
                
				innertable.append("<tr> <th style= 'border-right: 1px solid';><center>N�v:</center></th><th style= 'border-right: 1px solid';><center>Mana�rt�k:</center></th><th><center>Kieg�sz�t�:</center></th></tr></table>");
				
				for (i in data){
                    innertable.append("<tr><td style= 'border-right: 1px solid';><center>"+data[i].Nev+"</center></td><td style= 'border-right: 1px solid';><center>"+ data[i].Mana+"</center></td><td><center>"+ data[i].Kieg+"</center></td> </tr>");
                }
               $("#tartalom").append(innertable)
            }
            }
        )
    }
})