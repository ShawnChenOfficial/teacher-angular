import { ValidatorResult } from "../models/validator-result";
import { Validator } from "./validator";

export const COMPARED_WITH = 'value';

export class CompareValidator extends Validator {

    private comparedValue: any;

    constructor(comparedValue: any) {
        super();
        this.comparedValue = comparedValue;
    }

    validate(thisEl: HTMLInputElement): ValidatorResult {
        // If it's empty it's valid
        if (thisEl.value == this.comparedValue) {
            return new ValidatorResult(true);
        }

        const errorMessage = thisEl.type === 'password' ? 'Password do not match' : 'Data do not match';

        return new ValidatorResult(false, errorMessage);
    }
}