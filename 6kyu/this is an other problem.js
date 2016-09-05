function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    
    Object.defineProperty(this,'fullName', {
      get : function(){ return this.firstName + ' ' + this.lastName },
      set : function(name){
      	name = name.split(" ");
        if(name.length === 2){
        	this.firstName = name[0];
          this.lastName = name[1];
        }
      }
    });
    

}