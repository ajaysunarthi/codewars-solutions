function changeMe(moneyIn) {
  var accepted = ['£5','£2','£1','50p','20p'];
  var change = ["20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                "20p 20p 20p 20p 20p",
                "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p",
                "20p 20p 20p 20p 20p", "20p 20p 10p", "10p 10p"]
  var moneyIndex = accepted.indexOf(moneyIn);
  if (moneyIndex == -1) return moneyIn;
  else return change[moneyIndex];
}