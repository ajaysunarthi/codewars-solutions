function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    //return {name: this.firstName + ' ' + this.lastName};
    this.name = this.firstName + ' ' + this.lastName;
}