var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "universe";
    }
    Greeter.prototype.greet = function () {
        return "Hello guys, " +
            this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
