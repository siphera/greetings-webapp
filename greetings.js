 module.exports = function greetingsLogic() {
     let greetedNames = {};
     let greeting = "";
     let Name = "";

     let logic = function (language, Name) {
         let name = Name.toUpperCase();

         if (name != "") {

             if (greetedNames[name] === undefined) {

                 greetedNames[name] = 0;

             }

         }


         if (language === 'isixhosa') {
             greeting = "Molo, " + Name;
         }
         if (language === 'afrikaans') {

             greeting = "hallo, " + Name;

         }
         if (language === 'english') {
             greeting = "Hello, " + Name;
         }
         return greeting;
     }

     function mygreeting() {
         return greeting;
     }

     function myCounter() {
         return Object.entries(greetedNames).length;

     }

     function reset() {

         greetedNames = {};
         greeting = "";
         Name = "";

     }

     return {
         mygreeting,
         logic,
         myCounter,
         reset

     }

 }
