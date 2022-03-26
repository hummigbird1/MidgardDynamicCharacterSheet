export class CheckNumberResult {
    isNumber: boolean = false;
    value: number = Number.NaN; 
}

export class CheckEvaluatableToNumberResult {
    isEvaluatable: boolean = false;
    isExpressionTerminated: boolean = false;
    value: number = Number.NaN; 
}