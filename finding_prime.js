var num = function(a){
    var prime = true;
    if(a%2===0&&a>2){
        return 'no'
    }else if(a==2||a==3){
        return 'yes'
    }else if(a>=3){
        for(i=3;i<=Math.sqrt(a);i++){
            if(a%i===0){
                prime=false;
                break;
            }
        }
        if(prime===true){return 'yes'}
        else if(prime===false){return 'no'}
    }
}
var arr = [2,3,5,6,7,8];
arr = arr.filter((val)=>(num(val)=='yes'))
console.log(arr)