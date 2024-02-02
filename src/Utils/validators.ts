// Check if the given string contains at least one digit (0-9)
const hasNumber = (number: string): boolean => new RegExp(/[0-9]/).test(number);

// Check if the given string contains a mix of lowercase and uppercase letters
const hasMixed = (number: string): boolean => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// Check if the given string contains at least one special character
const hasSpecial = (number: string): boolean => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// Regular expression for validating Uzbekistan phone numbers
export const PHONE_REGEX = new RegExp(/^\+?998?\s?-?(90|91|93|94|95|98|99|33|97|71)\s?-?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/);

// Regular expression for validating user names
export const USER_REGEX = new RegExp(/^[A-z][A-z0-9-_]{3,23}$/);

// Regular expression for validating passwords with specific criteria
export const PWD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);

// Regular expression for validating email addresses
export const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

// Instagram clone email and password regexs
export const InstaCloneEMAIL = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const InstaCloneSignInPWD = new RegExp(/^[a-zA-Z0-9 ,_-]+$/);
export const InstaCloneSignUpPWD = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,20}$/);

export const InstaCloneFULLNAME = new RegExp(/^[a-zA-Z\s]{3,25}$/);
export const InstaCloneUSERNAME = new RegExp(/^(?=[a-zA-Z0-9._-]{4,19}$)(?!.*[_.]{2})[^_.].*[^_.]$/);

// Set color based on the strength count of the password
export const strengthColor = (count: number): { label: string; color: string } => {
    if (count < 2) return { label: 'Poor', color: 'error.main' };
    if (count < 3) return { label: 'Weak', color: 'warning.main' };
    if (count < 4) return { label: 'Normal', color: 'warning.dark' };
    if (count < 5) return { label: 'Good', color: 'success.main' };
    if (count < 6) return { label: 'Strong', color: 'success.dark' };
    return { label: 'Poor', color: 'error.main' };
};

// Evaluate the strength of a password based on various criteria
export const strengthIndicator = (number: string): number => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};
