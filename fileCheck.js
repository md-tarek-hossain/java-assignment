function isJavascriptFile (file){
    if(file.endsWith('.js')){
        console.log('Yes, It is JavaScript file')
    }
    else{console.log('It is not javascript file')}
  
}
let fileName = 'taklu.jk';
let fileType = isJavascriptFile (fileName)