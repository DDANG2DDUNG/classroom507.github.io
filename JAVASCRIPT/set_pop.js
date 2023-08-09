


function set_pop_none(chkValue){
    $('#POP'+chkValue).css('display', 'none');
 
}

function set_pop_block(chkValue){
    $('#POP'+chkValue).css('display', 'block');
    
}

function map_hide(){
    $('#POP3').css('visibility', 'hidden');
}

function map_show(){
    $('#POP3').css('visibility', 'show');
}

var list=['1', '2', '3', '4'];

function set_radio_pop(chkValue){
    for(i=0; i<list.length; i++){
        if(list[i]==chkValue) {
           if(chkValue=='3')
            map_show();
           else
            set_pop_block(chkValue);


            set_rad_chk(chkValue);
        }
        else{
            if(list[i]=='3') map_hide();

            else set_pop_none(list[i]);
            set_rad_init(list[i]);
        }
   
    }
}

