function callBack() {
    console.log("This is my callback");
}

function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    return function names() {
        console.log("This functions has a name.");
    };
}

function returnsAnAnonymousFunction(){
     return () => console.log("This is an anonymous arrow function.");
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("pump iron");
}

function swimFortyLaps(){
    console.log("swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function monday(){
    exerciseRoutine(liftWeights);
}

exerciseRoutine(() => console.log("Stretch and work that core"));

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protien bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`this ${breakfast} is delicious!`);
    };
}