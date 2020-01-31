/* Alter code below this line */
class Thermostat {
    constructor(fahrenheit){
        this._temperature = fahrenheit;
    }
    //getter
    get temperature(){
        return 5/9 * (this._temperature - 32);
    }
    //setter
    set temperature(updatedTemperature){
        this._temperature = updatedTemperature * 9.0 / 5 +32;
    } 
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
