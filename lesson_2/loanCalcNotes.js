// INPUTS:
// loanAmount - integer
// interest rate - integer
// loanDuration (years) - integer

// OUTPUTS:
// monthly cost
// total payment
// total interest

// REQUIREMENTS:
// Three pieces of info needed:
// - loan amount
// - Annual Percentage Rate (APR)
// - loan duration (months)

// calculate 2 things:
// - the monthly interest rate (convert APR to monthly) apr interest / durationInMonths
// EX : 10% / 12 months = 0.0083%
// - loan duration in months

// formula:
// let monthlyCost = loanAmount * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-durationInMonths))));

// run code through ESLint

// QUESTIONS:

// EXAMPLES / TEST CASES:
// loanCalculator(loanAmount, annualRate, durationInMonths) -> monthlyCost

// edge cases:
// - support no-interest loans? - yes
// - loans that aren't for an integer number of years? - no, term is mandatory
// - will loan duration input be in months or years? - accept both
// - paying back predetermined / fixed amount (amortized loan) only? - yes!
// - will it accept international currencies? - yes, USD is default
// - trim an user inputs with white spaces, adjust casing
// - no special characters accepted

// DATA STRUCTURES
// numbers
// strings

// ALGORITHMS:

// messages:
// welcome: 'Welcome to the Loan Calculator!'
// loanAmount: 'What is your loan amount?'
// annualInterestRate: "What is your interest rate?"
// loanDurationInYears: 'What is your loan term in years?'
// goAgain: 'Would you like to get another loan calculation? (y/n)'

// error messages:
// errorNumber: 'Invalid answer, please type an integer (no letters Aa-Zz or special characters like % or $).'
// errorGoAgain: ``Please type 'y' or 'n'.`
