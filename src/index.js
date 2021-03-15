module.exports = function reverse (n) {
    f="";
    n=Math.abs(n);
    n=String(n);
    for (let i=n.length-1;i>=0;i--){
      f+=n[i];
    }
    f=Number(f);
    return f;
}
