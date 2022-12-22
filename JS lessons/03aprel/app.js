function MultipleArguments(a, b) {
  console.log(a, b);
}

//MultipleArguments(2,3)

function MultipleArguments2(...args) {
  console.log(args);
}

//MultipleArguments2(2,3,4,5,7,8,0,4,2,4)

function argumentsObj() {
  console.log(arguments);
}
// yuxarıdakından fərqli olaraq məlumat obyekt şəkilində keyValue pair ilə ötürülür.
//argumentsObj(1,2,3,45,3,4,5,3)

// oop
// object
// property -> variable in object scope
// method  -> function in object scope
// methodun ümumi vəzifəsi nədir?
// methodun tipi nədir: void or return
// hansı tipdə data return edir

const obj = {
  type: "B737",
  register: "4k-az888",
  showData: function () {
    console.log(this.type + ", " + this.register);
  },
};

obj.showData();

const obj2 = {
  type: "B737",
  register: "4k-az888",
  prop: {
    showData: function () {
      console.log(this);
    }
  }
};

obj2.prop.showData()
