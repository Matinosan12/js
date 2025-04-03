
function disable() {
    document.getElementById('btn').disabled = true;

}
function showName() {
    const btn = document.getElementById('btn').type;
    document.getElementById('demo').innerHTML = btn;
}

function reset() {
     document.getElementById('form').reset();
}
function method() {
    const form = document.getElementById('form').method;
     document.getElementById('demo2').innerHTML = form;
}
function lenth() {
    const form = document.getElementById('form').length;
     document.getElementById('dem').innerHTML = form;
}

function dis() {
    document.getElementById('drap').disabled=true;
}
function en() {
    document.getElementById('drap').disabled=false;
}

function remove() {
   const drap = document.getElementById('drap');
   drap.remove(drap.selectionIndex)
}

function change() {
    const drap = document.getElementById('drap');
    drap.options[drap.selectedIndex].text = "haaaa";
 }
