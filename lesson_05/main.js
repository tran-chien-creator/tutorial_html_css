const get_class_element = document.getElementsByClassName("group-class");
console.log(get_class_element);

const get_id_element = document.getElementById("test-1");
console.log(get_id_element);
get_id_element.style.backgroundColor = "red";
get_id_element.style.color = "white";
get_id_element.style.fontSize = "30px";
get_class_element[0].style.fontSize = "20px";
