
function set_pop_none(chkValue){
    $('#POP'+chkValue).css('display', 'none');
}

function set_pop_block(chkValue){
    $('#POP'+chkValue).css('display', 'block');
}


var list=['1', '2', '3', '4'];

function set_radio_pop(chkValue){
    for(i=0; i<list.length; i++){
        if(list[i]==chkValue) {
            set_pop_block(chkValue);
            set_rad_chk(chkValue);
        }
        else{
            set_pop_none(list[i]);
            set_rad_init(list[i]);
        }
    }
}