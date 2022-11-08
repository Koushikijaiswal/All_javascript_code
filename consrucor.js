// Default constructor
class Mobile {
    constructor() {
    this.make = 'Samsung';
    this.model = 'Galaxy S1';
    this.cost = 10000
    this.ramInGB = '8'
    }
    }
    const defaultMobile = new Mobile();
    console.log(defaultMobile)
    
    // Parametrized Constructor
    
    class Mobile {
    constructor(make, model, cost, ramInGB) {
    this.make = make
    this.model = model
    this.cost = cost
    this.ramInGB = ramInGB
    }
    }
    const galaxyS1 = new Mobile("Samsung", "Galaxy S1", 10000, "8");
    const galaxyS2 = new Mobile("Samsung", "Galaxy S2", 20000, "12");
    console.log(galaxyS1)
    console.log(galaxyS2)