module.exports = function (data) {
    let greetedNames = {};
    let name = "";
    let lang = "";

    function setName(value) {
        if (value !== " ") {
            name = value;
        }
    }

    function setLanguage(value) {
        lang = value;
    }

    function setGreetedNames() {
        if (data) {
            greetedNames = data;
        }
        if (name !== "") {
            if (greetedNames[name] === undefined) {
                greetedNames[name] = 0;
            }
        }
    }

    function greetLogic() {
        if (lang === "english") {
            return "Hello, " + name;

        } else if (lang === "afrikaans") {
            return "Hallo, " + name;

        }
        if (lang === "isixhosa") {
            return "Molo, " + name;
        }
    }

    function getName() {
        return name;
    }

    function getLanguage() {
        return lang;
    }

    function getGreetedNames() {
        return greetedNames;
    }

    function resetGreetedNames() {
        return greetedNames = {};
    }

    function namesCounter() {
        return Object.keys(greetedNames).length;
    }

    return {
        setName,
        setLanguage,
        resetGreetedNames,
        setGreetedNames,
        getName,
        getGreetedNames,
        greetLogic,
        getGreetedNames,
        namesCounter

    }
}