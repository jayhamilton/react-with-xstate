import {createMachine} from "xstate";


export const myMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgAcBXAIwBtdZtIBiAVQDkAFFgIQBkBJAMoAJANoAGALqJQZAPaxcAF1xz8MkAA9EAWgBM4gOwlxRgIx6zAVgBsADjs2AzABoQAT0RO9Nkk-MGACxOgXqWelYAvpFuaFh4hKQQAE7oAGZKTII8ALL8ACoAYgDyAEqlAKIAavwVAOoS0kgg8ooqahraCPpOZiR6vU6OgXZWZuK9bp4IdsbBRgCcC4FWegsDNtGxGDgExCQEyWAAbrhgAO5MXHxCYlIarcqq6s1dZoZ6JIE24mY2Yd5RutXB5dOMSIZAuJAmYlh8Ik5DDYzFsQHFdokDvgjqcLkxKgApCoAYXyjQeCieHVeiFhfUMY2c-hsVlGfysU0Q4RIdnEEQ+IQmC3EdlR6IS+yOACswJglMxKtluHkyfdmo92i9QF0dLDjENEd4RU4bEi7HpOQg9V8nCErEZ-sizH9ojEQPg5BA4BpxXsiBS2s9OronMKeWsbCM7GZQoYGZadAs7CYmXo7LHof8xTsJaRKLR6IwIAGqVqtF5QiQfizDCarFZlsFLUaSM69ME7MLTaMrIFs-E-SQUuklCXNcHuiFPuaFpGHDG9HGOaCren+rN61DIY4om7fZjDiczucx0GaVarFXflC7IjHObDAtl9NHP1WesOyNVkN+xjJWAZTlSBT2pbVaV8Rd02FQJH0MXkTRBaZrXEZZhQWQwLHEf4+1dIA */
    initial: "draft",

    states:{
        published:{
            on:{
                UNPUBLISH:{
                    target: "draft"
                }
            }
        },

        draft:{
            on:{
                SUBMITFORREVIEW: {
                    target: "inreview"
                }
            }
        },

        inreview:{
            on:{
                PUBLISH: {
                    target: "published"
                },
                REJECT: {
                    target: "rejected"
                }
            }
        },

        rejected:{
            on:{
                RESUBMIT: {
                    target: "draft"
                }
            }
        }
    }
})

