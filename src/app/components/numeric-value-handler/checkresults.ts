export class CheckNumberResult {
    isNumber: boolean = false;
    value: Number = Number.NaN; 
}

export class CheckEvaluatableToNumberResult {
    isEvaluatable: boolean = false;
    isExpressionTerminated: boolean = false;
    value: Number = Number.NaN; 
}