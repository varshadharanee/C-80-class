var names =[] ;

function submit(){
    for (var x = 1; x <= 4;x++){
        var temp_name = document.getElementById("name_of_the_student_"+ x).value;
        names.push(temp_name);
    }
    console.log(names);
    var display_name = [];
    for ( var i = 0;i<names.length;i++){
      
        display_name.push("<h4>Name -"+names[i]+"</h4>");
       
    }
    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML=display_name;

    var remove = display_name.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}
function sorting(){
   names.sort();
   var display_name = [];
   for ( var k = 0;k<names.length;k++){
     
        display_name.push("<h4>Name -"+names[k]+"</h4>");
     
    }
    document.getElementById("display_name_with_commas").innerHTML=display_name;
    console.log(display_name);
     
    var remove_sort = display_name.join("")
    document.getElementById("display_name_without_commas").innerHTML=remove_sort;
    console.log(remove_sort);
}
