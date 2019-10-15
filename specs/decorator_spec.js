const assert = require("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js")
const Room = require("../room.js")

describe("Decorator", function(){

  let decorator;
  let paint;
  let room;

  beforeEach ( function(){
    decorator = new Decorator();
    paint = new Paint(25);
    room = new Room(20);
  });

  it("starts with an empty paint stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a can of paint", function(){
    decorator.addStock(paint);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paint]);
  });

  it("should be able to calculate total litres of paint it has in stock", function(){
    decorator.addStock(paint);
    const actual = decorator.amountOfPaint();
    assert.strictEqual(actual, 25);
  });

  it("should be able to calculate whether it has enough paint to paint a room", function(){
    decorator.addStock(paint)
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true);
  })

  it("should be able to paint room if has enough paint in stock", function(){
    decorator.addStock(paint)
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })
});
