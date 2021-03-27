
export default (() => {
    //https://stackoverflow.com/a/43553836   -- Singleton approach
    class NonRepeatRandomNumber
{
    constructor(low,high)
    {
        this.low = low;
        this.high = high;
      	this.remaining = [];
    }
    getRandomInt(min, max) {       
       //https://stackoverflow.com/a/42321673
        const randomBuffer = new Uint32Array(1);

        window.crypto.getRandomValues(randomBuffer);

        let randomNumber = randomBuffer[0] / (0xffffffff + 1);

        min = Math.ceil(min);
        max = Math.floor(max);     
        return Math.floor(randomNumber * (max - min + 1)) + min;
    }
    reset(){
        
        for (var i = this.low; i <= this.high; i++) {
            this.remaining.push(i);
        }
    }
    get() {
        if (!this.remaining.length) {
            this.reset();
        }
        var index = this.getRandomInt(0,(this.remaining.length-1))
        var val = this.remaining[index];
        this.remaining.splice(index, 1);
        return val;        
    }
   
}
    return {
      // Public static factory method
      getRandomNumber(low,high)
        {
            if (!NonRepeatRandomNumber.instance) {
                NonRepeatRandomNumber.instance = new NonRepeatRandomNumber(low, high);
            }
            return NonRepeatRandomNumber.instance;
        }
    };
  
  })();