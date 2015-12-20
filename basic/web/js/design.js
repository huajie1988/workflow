/**
 * Created by Huajie on 2015/12/20.
 */

var dpi=72;
var A4_SIZE=[210,297];
var MM_TO_DPI=25.4;
var MAX_WIDTH=$('.highlight').width();
var MAX_HRIGHT=$('.highlight').height();
var controls=['text',0];
var is_add=false;


$(document).ready(function(){
    rotationPaper(0);
});

$("[data-direction]").click(function(){

    var direction=$(this).attr('data-direction');

    if(direction=="vertical"){
        rotationPaper(0);
    }else{
        rotationPaper(1);
    }
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$("[data-controls]").click(function(){
    is_add=true;
    controls[0]=$(this).attr('data-controls');
    createControls();
    $('#addPanel').fadeIn();
});

$('.win_close').click(function(){
    $('.myalert').fadeOut()
})

$('#addControlBtn').click(function(){

    var check=['label','radio','select'];
    if(check.indexOf( controls[0])>=0 && $('.c_v').val()=='' ){
        alert("The Value must write");
        return false;
    }

    var control_select=['select'];
    var cv=$('.c_v').val();
    if(control_select.indexOf( controls[0])>=0){
        var s_arr=$('.c_v').val().replace(new RegExp(/(，)/g),',').split(',');
        var s_t='';
        for(var i=0;i<s_arr.length;i++){
            s_t+="<option value='"+i+"'>"+s_arr[i]+"</option>"
        }
        cv=s_t;
    }

    $('#paper').append(controls[2].replace("{%name%}",$('.c_k').val()).replace("{%value%}",cv));
    var $draggable = $('.drag').draggabilly({});
    $('.win_close').click();
})

function createControls(){
    switch(controls[0])
    {
        case "text":
            __createTextControl();
            break;
        case "label":
            __createLabelControl();
            break;
        case "textarea":
            __createTextareaControl();
            break;
        case "checkbox":
            __createCheckboxControl();
            break;
        case "select":
            __createSelectControl();
            break;
        case "radio":
            __createRadioControl();
            break;
        case "button":
            __createButtonControl();
            break;
        default:
            alert("control don't isset");
            return false;
    }
}

function rotationPaper(type){
    type=parseInt(type);

    dpi=js_getDPI()[0];

    var paperW=A4_SIZE[0]/MM_TO_DPI*dpi;
    var paperH=A4_SIZE[1]/MM_TO_DPI*dpi;
    if(type==0){
        $("#paper").css({width:paperW,height:paperH});
    }else if(type==1){
        if(paperH>MAX_WIDTH){
            paperH= MAX_WIDTH/paperH *paperW;
            paperW=MAX_WIDTH;
        }
        $("#paper").css({width:paperW,height:paperH});
    }else{
        alert("type is error");
    }

}


function js_getDPI() {
    var arrDPI = new Array();
    if (window.screen.deviceXDPI != undefined) {
        arrDPI[0] = window.screen.deviceXDPI;
        arrDPI[1] = window.screen.deviceYDPI;
    }
    else {
        var tmpNode = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        arrDPI[0] = parseInt(tmpNode.offsetWidth);
        arrDPI[1] = parseInt(tmpNode.offsetHeight);
        tmpNode.parentNode.removeChild(tmpNode);
    }
    return arrDPI;
}

function __createTextControl(){
    var html="<input type='text' name='text_"+$('#paper').find("input[type='text']").length+"' class='form-control drag w_1_3' value='{%value%}'>";
    controls[2]=html;
    html="<input class='c_v form-control' type='text' placeholder='请输入默认值，如无请留空' />"
    $('#control_value').html(html);
}

function __createLabelControl(){
    var html="<h4 class='drag'>{%value%}</h4>";
    controls[2]=html;
    html="<input class='c_v form-control' type='text' placeholder='请输入内容' />"
    $('#control_value').html(html);
}

function __createTextareaControl(){
    var html="<textarea name='textarea_"+$('#paper').find("textarea").length+"' class='form-control drag w_1_3'>{%value%}</textarea>";
    controls[2]=html;
    html="<input class='c_v form-control' type='text' placeholder='请输入默认值，如无请留空' />"
    $('#control_value').html(html);
}

function __createCheckboxControl(){
    var html="<input type='checkbox' name='checkbox_"+$('#paper').find("input[type='checkbox']").length+"' class=' drag w_1_3' value='{%value%}'>";
    controls[2]=html;
    html="<input class='c_v form-control' type='text' placeholder='请输入默认值，如无请留空' />"
    $('#control_value').html(html);
}

function __createSelectControl(){
    var html="<select name='select_"+$('#paper').find("select").length+"' class='form-control drag w_1_3'>{%value%}</select>";
    controls[2]=html;
    html="<input class='c_v form-control' type='text' placeholder='请输入下拉框值，以英文逗号分割' />"
    $('#control_value').html(html);
}

function __createRadioControl(){
    var html="<input type='radio' name='{%name%}' class=' drag w_1_3' value='{%value%}'>";
    controls[2]=html;
    html="<input class='c_k form-control' type='text' placeholder='请输入标识符名称，同标识符的radio互斥' /><input class='c_v form-control' type='text' placeholder='请输入默认值' />"
    $('#control_value').html(html);
}

function __createButtonControl(){

}