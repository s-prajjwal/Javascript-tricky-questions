var f = function() {
    var a= 1;
    return function(){
        console.log(a);
    }
}
f();


function d() {
    var a= 1;
    return function(){
        console.log(a);
    }

}
d();

<body>
    <div id="a"> //1
        <div id="c"> //4
        
        </div>
    </div>
    <div id="b"> //2
        <div id="d"> //3
        
        </div>
    </div>
</body>