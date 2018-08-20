let assert = require("assert");
let greetings = require("../greetings");

describe("greet function", function () {
    it("it should return the name typed in", function () {
        let greeting = greetings();
        greeting.names("siphenkosi");
        assert.equal(greeting.getName(), "siphenkosi");
    });


    it("It should Greet the user in english", function () {
        let greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("english");
        assert.equal(greeting.outputMsg(), "Hello, siphenkosi");
    });


    it("It should Greet the user in isixhosa", function () {
        let greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("isixhosa");
        assert.equal(greeting.outputMsg(), "Molo, siphenkosi");
    });

    it("It should Greet the user in afrikaans", function () {
        let greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("afrikaans");
        assert.equal(greeting.outputMsg(), "Hallo, siphenkosi");
    });

    it('should display "{ siphenkosi: 0, salman: 0, ayanda: 0 }" output if siphenkosi, salman and Ayanda are greeted   ', function () {
        let addToStorage = greetings();
        addToStorage.names("siphenkosi");
        addToStorage.language("isixhosa");
        addToStorage.namesGrtd();

        addToStorage.names("salman");
        addToStorage.language("english");
        addToStorage.namesGrtd();

        addToStorage.names("ayanda");
        addToStorage.language("afrikaans");
        addToStorage.namesGrtd();
        assert.deepEqual(addToStorage.nameMap(), {
            siphenkosi: 0,
            salman: 0,
            ayanda: 0
        });

    });


    it("It should return the correct count of names greeted", function () {
        let greeting = greetings();

        greeting.names("siphenkosi")
        greeting.nameMap("afrikaans");
        greeting.namesGrtd();
        assert.equal(greeting.counter(), 1);
    });

    it('counter should return 1  if one name is greeted in three languages',
        function () {
            let greeting = greetings();

            greeting.names("salman");
            greeting.language("english");
            greeting.namesGrtd();

            greeting.names("salman");
            greeting.language("isixhosa");
            greeting.namesGrtd();

            greeting.names("salman");
            greeting.language("afrikaans");
            greeting.namesGrtd();

            assert.equal(greeting.counter(), 1);

        });

    // it('should return error message', function() {
    //   let error = greetMeBtn();
    //
    //   error.names("");
    //   error.language(!radioCheck);
    //
    //   assert.equal(error.outputMsg(), "Enter name and choose language")
    // })

});
