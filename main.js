document.getElementById('output').style.visibility = 'hidden';

document.getElementById('kgInput').addEventListener('input', function(e){
    
    let kg = e.target.value;
    
    // CALCULATE GRAMS
    document.getElementById('gramsOutput').innerHTML = kg * 1000;

    // CALCULATE POUNDS
    document.getElementById('lbsOutput').innerHTML = kg * 2.2;

    // CALCULATE OUNZES
    document.getElementById('ozOutput').innerHTML = kg / 0.02834952;

    document.getElementById('output').style.visibility = 'visible';


});