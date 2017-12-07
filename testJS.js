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
                
				innertable.append("<tr> <th style= 'border-right: 1px solid';><center>N�v: </th><th>Neptun k�d:</center></th> </tr></table>");
				
				for (i in data){
                    innertable.append("<tr><td style= 'border-right: 1px solid';><center>"+data[i].Name+"</center></td><td><center>"+ data[i].Neptun+"</center></td> </tr>");
                }
               $("#tartalom").append(innertable)
            }
            }
        )
    }
})