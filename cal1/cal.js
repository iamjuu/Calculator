var res=document.getElementById('screen');



function btnclick(num){
    res.value+=num;

}
 function clearscreen(){
    res.value="";
}
function findresult(){
    var result = eval(res.value)
    res.value=result


}

