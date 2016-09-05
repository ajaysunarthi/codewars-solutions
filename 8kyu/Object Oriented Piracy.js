function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = function() {
    //draft - 1.5*crew > 20
    var whole = Math.round( (draft)- (1.5*crew) );
    if( whole > 20 ){return true;}
    else {return false;}
};

}