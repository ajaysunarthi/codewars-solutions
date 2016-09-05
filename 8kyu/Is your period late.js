function periodIsLate(last, today, cycleLength)
{
	 var diff = (today-last)/(3600*24*1000);
   if ( (diff - cycleLength) > 0){
   	return true;
   }
   else{return false;}
  //
}