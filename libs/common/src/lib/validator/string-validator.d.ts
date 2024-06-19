import { ValidatorFunction } from './validator-function';
type StringValidationOptions = {
    minLength: number;
    maxLength: number;
    notEmpty: boolean;
    noSpace: boolean;
};
export declare function createStringValidator(options: Partial<StringValidationOptions>): ValidatorFunction<string>;
export {};
