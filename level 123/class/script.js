function removeChar(str){
  if(str.length <= 2){
    return ""
  }else{
    return str.slice(1,str.length - 1)
  }
};


let abbrevName = name => name.split(' ').map(n => n[0].toUpperCase()).join('.')