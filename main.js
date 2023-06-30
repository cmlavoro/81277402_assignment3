const question1 = (myNumber) => {
    let myDept;
    /////// write your IF statement below this line ///////// 
    if (myNumber > 1) {
        myDept = "Informatics";
    }
    /////// write your IF statement above this line ///////// 
    return myDept;
};

const question2 = (myValue) => {
    let myLang;
    /////// write your IF statement below this line /////////
    if (myValue.length == 10) {
        myLang = "JavaScript";
    }
    else {
        myLang = "Python";
    }
    /////// write your IF statement above this line /////////
    return myLang;
};

const question3 = (myValue) => {
    let myLang;
    /////// write your IF statement below this line /////////
    if (myValue.length == 10) {
        myLang = "JavaScript";
    }
    else if (myValue.length > 3) {
        myLang = "PHP";
    }
    else {
        myLang = "Python";
    }
    /////// write your IF statement above this line /////////
    return myLang;
};

const question4 = (myNumber) => {
    let myFaveFood;
    /////// write your SWITCH statement below this line /////////
    switch (myNumber) {
        case 1:
            myFaveFood = "Pizza";
            break;
        case 2:
            myFaveFood = "Hamburger";
            break;
        case 3:
            myFaveFood = "Ice Cream";
            break;
        case 4:
            myFaveFood = "Sushi";
            break;
        default:
            myFaveFood = "Pho";
    }
    /////// write your SWITCH statement above this line /////////
    return myFaveFood;
};

const question5 = (myTemp) => {
    let myWeather;
    /////// write your TERNARY OPERATOR statement below this line /////////
    myWeather = myTemp >= 75 ? "Great weather!" : "Still cold.";
    /////// write your TERNARY OPERATOR statement above this line /////////
    return myWeather;
};


//Unit Testing
console.log('---------Unit Testing---------');
console.log(`question1()--> ${question1()}`);
console.log(`question1(0)--> ${question1(0)}`);
console.log(`question1(1)--> ${question1(1)}`);
console.log(`question1(2)--> ${question1(2)}`);
console.log(`question1('test')--> ${question1('test')}`);
console.log(`question2('length7')--> ${question2('length7')}`);
console.log(`question2('+length8')--> ${question2('+length8')}`);
console.log(`question2('++length9')--> ${question2('++length9')}`);
console.log(`question2('++length10')--> ${question2('++length10')}`);
console.log(`question3('len')--> ${question3('len')}`);
console.log(`question3('+length8')--> ${question3('+length8')}`);
console.log(`question3('++length10')--> ${question3('++length10')}`);
console.log(`question3('+++length11')--> ${question3('+++length11')}`);
console.log(`question4()--> ${question4()}`);
console.log(`question4(0)--> ${question4(0)}`);
console.log(`question4(1)--> ${question4(1)}`);
console.log(`question4(2)--> ${question4(2)}`);
console.log(`question4(3)--> ${question4(3)}`);
console.log(`question4(4)--> ${question4(4)}`);
console.log(`question4(5)--> ${question4(5)}`);
console.log(`question5()--> ${question5()}`);
console.log(`question5('test')--> ${question5('test')}`);
console.log(`question5(-1)--> ${question5(-1)}`);
console.log(`question5(0)--> ${question5(0)}`);
console.log(`question5(45)--> ${question5(45)}`);
console.log(`question5(74)--> ${question5(74)}`);
console.log(`question5(75)--> ${question5(75)}`);
console.log(`question5(145)--> ${question5(145)}`);