var student_name_array = [];

function submit(){


    for(var i = 1; i<=4; i++){
        var temp = document.getElementById("name_of_the_student_"+i).value; 
        student_name_array.push(temp); 
    }

    console.log(student_name_array)


    var display_student_name_array = [];
    var length = student_name_array.length;


    for(var i = 0;i<length;i++){
        display_student_name_array.push("<h2> Name of the student  "+ student_name_array[i]+"</h2>");
    }

    console.log(display_student_name_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_name_array;

    var remove = display_student_name_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove; 
}