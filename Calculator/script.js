
document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('output2').style.visibility = 'hidden';
let wid = document.getElementById('input-weight');

wid.addEventListener('input', convert);


function convert(e){
    let unit = document.getElementById('select-unit');
    let selected = unit.options[unit.selectedIndex].value;
    let weight = e.target.value;
    
    if(selected === 'p'){
        document.getElementById('output2').style.visibility = 'visible';
        document.getElementById('output1').style.visibility = 'hidden';
        document.getElementById('gram2').innerHTML = weight*454;
        document.getElementById('kg2').innerHTML = weight/2.205;
        document.getElementById('ounce2').innerHTML = weight*16;
    }else{
        document.getElementById('output1').style.visibility = 'visible';
        document.getElementById('output2').style.visibility = 'hidden';
        document.getElementById('gram1').innerHTML = weight*1000;
        document.getElementById('pound1').innerHTML = weight*2.205;
        document.getElementById('ounce1').innerHTML = weight*35.274;
    }
}
