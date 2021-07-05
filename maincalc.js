
     var vm = new Vue({
  el: '#app',
  data: {
    currentNum: 0,
    total: 0,
    prevOps: 0,
    display: '',
    res:'',
    color:'',
    	tick: new Audio('https://dl.getdropbox.com/s/kgqqnei0yhv3r8n/219069__annabloom__click1.wav'),
    
  },
                    
  methods: {
    
    
    forStyle:function(){
        
        
        
       
 return {backgroundColor:this.color};
         
          
          
        
       },
    
    
    
    
    
    
    
    clear: function() {    //clear all
      this.currentNum = 0;
      this.total = 0;
      this.display = ''; 
      this.prevOps = 0;          
    },
    
    enterNum: function(val) { //take the operad "number"
   
      if (this.currentNum == 0) { 
        if (this.prevOps == 0)   
          this.total = 0;    

       
          this.currentNum = val;
          this.display += val.toString();
        
        
        
      }
      
      else {
       
          this.currentNum *= 10;  
          this.currentNum += val;   
        
        this.display += val.toString();  
      }
      
      
    },
    
    enterOps: function(ops,o) { //take the operator
              this.display += o.toString();
        
      if (this.total == 0 && this.currentNum == 0) {
        return;
      }
      if (this.total == 0) {
        this.total += this.currentNum;  
      }
      switch (this.prevOps) {
        case 1:
          this.total += this.currentNum;
          break;
        case 2:
          this.total -= this.currentNum;
          break;
        case 3:
          this.total *= this.currentNum;
          break;
        case 4:
          this.total /= this.currentNum;
          break;
        case 0:
          break;
      }

      
      this.currentNum = 0; //0 
      this.prevOps = ops;  //-
    },
    
    
    
    calc: function() {   //when click button =
      switch (this.prevOps) {
        case 1:
          this.total += this.currentNum;
          break;
        case 2:
          this.total -= this.currentNum;
          break;
        case 3:
          this.total *= this.currentNum;
          break;
        case 4:
          this.total /= this.currentNum;
          break;
        case 0:
          break;
      }
      this.display = this.total.toString();  
      this.prevOps = 0;
      this.currentNum = 0;
      
    }
  }
});                   