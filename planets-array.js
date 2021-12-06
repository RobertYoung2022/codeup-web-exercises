(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun")
    console.log("1. " + planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    //PUSH METHOD
    planets.push("Pluto");
    console.log("2. "+ planets);

    // SPREAD METHOD
   /* planets = [... planets, "Pluto"];
    console.log(planets);*/

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun");
    console.log("3. " + planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto");
    console.log("4. " + planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    let findPlanet = planets.indexOf("Earth");
    console.log("5. The index of Earth is " + findPlanet);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log("6. " + planets);

    console.log("Sorting the planets array.");
    planets.sort()
    console.log("7. " + planets);
})();