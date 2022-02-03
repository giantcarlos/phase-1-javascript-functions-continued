function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!` ;
}

function mondayWork(a = "go to the office") {
    return `This Monday, I will ${a}.`;
}

function wrapAdjective(c = "*") {
    return function(b = "special") {
        return `You are ${c}${b}${c}!`;
    }
}