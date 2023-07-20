var a=[20,40,40,25,25,48,23,89,89];
document.write("a=[20,40,40,25,25,48,23,89,89]"+"<br>"+"<br>");
var b=[];
a.sort();
let temporary;
for(let i=0;i<a.length;i++){
	if(a[i]!==temporary){
		b.push(a[i]);
		temporary=a[i];
	}
}
document.write(b);