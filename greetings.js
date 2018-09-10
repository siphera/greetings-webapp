 module.exports = function greetingsLogic() {
     let greetedNames = {};
     let greeting = "";
     let Name = "";

     let logic = (language, Name) => {
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

     let myCounter = () => Object.entries(greetedNames).length;

     let reset = () => {
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