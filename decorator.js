const Decorator = function() {
  this.stock = [];
}

Decorator.prototype.addStock = function (paintToAdd) {
  this.stock.push(paintToAdd);

};

Decorator.prototype.amountOfPaint = function () {
  let amount = 0
  for (paint of this.stock){
    amount += paint.volume
  }
  return amount
};

Decorator.prototype.canPaintRoom = function (room) {
  return this.amountOfPaint() > room.area
};

Decorator.prototype.paintRoom = function (room) {
  if (this.canPaintRoom(room)){
    room.paintRoom()
  }

};

module.exports = Decorator;
