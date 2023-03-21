export class Resolver {
    ancestor;
    varList;
    #isFunction;

    constructor(ancestor, isFunction) {
        this.ancestor = ancestor;
        this.varList = new Map();
        this.#isFunction = isFunction;
    }

    // create a function called assign that takes in two parameters: identifier and value
    // this function will execute the following steps:
    // 1. call the resolve function with identifier as first parameter and true as second parameter
    // 2. assign the return value of the resolve function to a variable
    // 3. check if the variable is not null. if it is not null, call the reassign function with identifier and value as parameters
    // 4. if the variable is null insert the identifier and value into the varList

    assign(name, value) {
        if (this.resolve(name, true) !== null) {

            this.reassign(name, value);
        } else {
            this.varList.set(name, value);
        }
    }


    // this function will execute the following steps:
    // 1. check if varlist has the identifier. if it does, reassign the value to the identifier
    // 2. if the varlist does not have the identifier, check if the ancestor is not null
    // 3. if the ancestor is not null, call the reassign function of the ancestor with the same identifier and value

    reassign(name, value) {
        if (this.varList.has(name)) {
            this.varList.set(name, value);
        } else if (this.ancestor !== null) {
            this.ancestor.reassign(name, value);
        }
    }

    // create a function called assignparam that takes in two parameters: identifier and value
    // this function will execute the following steps:
    // 1. insert the identifier and value into the varList

    assignParam(name, value) {
        this.varList.set(name, value);
    }

    // this function will execute the following steps:
    // 1. get the value of identifier inside varList and assign it to a variable
    // 2. check if the variable is not undefined or null. if not return the variable value
    // 3. if the variable is undefined or null, check if the ancestor is not null
    // 4. if the ancestor is not null, call the resolve function of the ancestor with the same identifier and flag
    // 5. if the ancestor is null, return null

    resolve(name) {
        let value = this.varList.get(name);

        if (value !== undefined) {
            return value;
        } else if (this.ancestor !== null) {
            return this.ancestor.resolve(name);
        } else {
            return null;
        }

    }
}