export default {
  validateImage(field_name){
        var fileName = document.getElementById(field_name).value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            return true;
        }else{
            return false;
        }
    },
  
    validatePdf(field_id){
        var fileName = document.getElementById(field_id).value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="pdf"){
            return true;
        }else{
            return false;
        }
    },
    capFirstLetter(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
};
