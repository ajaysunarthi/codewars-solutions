function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function()
{   this.reset();
    var inp = this.reader.getChunk();
    var prev_char = ' ';
    while(inp !== ''){
      
      for(var i=0; i< inp.length; i++){
        if(inp[i] === '\n'){
          this.lineCount+=1;
          prev_char = ' ';
        }
        else{
          this.charCount++;
          if(this.lineCount === 0){this.lineCount =1;}
          if(inp[i] !== ' ' && prev_char === ' '){ this.wordCount++;}
          prev_char = inp[i];
        }
        
      }
      inp = this.reader.getChunk();
    }
    
    
};