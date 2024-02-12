function handleNoMouseOver() {
    document.querySelector('.cat').style.display = 'none';
    document.querySelector('.die').style.display = 'block';
    document.getElementById('title').innerHTML = 'you sure about that?';
}

function handleNoMouseOut() {
    document.querySelector('.cat').style.display = 'block';
    document.querySelector('.die').style.display = 'none';
    document.getElementById('title').innerHTML = 'Will You Be my Valentine?';
}

function handleYesClick() {
    document.querySelector('.cat').style.display = 'none';
    document.querySelector('.cat-happy').style.display = 'block';
    document.getElementById('title').innerHTML = 'I LOVE YOU';
    document.getElementById("yes").disabled = true;
    document.getElementById("no").disabled = true;
    document.getElementById('no').removeEventListener('mouseover', handleNoMouseOver);
    document.getElementById('no').removeEventListener('mouseout', handleNoMouseOut);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('no').addEventListener('mouseover', handleNoMouseOver);
    document.getElementById('no').addEventListener('mouseout', handleNoMouseOut);
    document.getElementById('yes').addEventListener('click', handleYesClick);
});
