// everything about lexical scope

function outer(){
    let name="Prajwal"
    //some other code
    function inner(){
        let usn='1VI20IS064'
        console.log(name);

    }
    function secondInner(){
        console.log(usn);
    }
    inner()
    // secondInner()
}
outer()//this is called lexical scope  i.e inner function can access the members of outer function but not vice versa i.e outer cannot access inner members 

//and also siblngs cannot share each others