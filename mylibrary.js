var mylibrary = (()=> {
    var myLibraryFunc = (a,b)=>{
      sum = a+b;
      return sum.toString();
    }
    return {
      myLibraryFunc: myLibraryFunc,
    };
})();
module.exports = mylibrary;
