//create a biosensor simulator, many people, dispay output to console
//simulates heartrate

/* class queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }
*/

let getRandomArbitrary = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
    }
    beat(){
        let hr=getRandomArbitrary(60,80)
        console.log('name', this.name)
        console.log(hr)
    }
    live(){
        setInterval(()=>{
            this.beat()
        },1000)
    }
};

let james = new Biosensor('james');