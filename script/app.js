let json = [{
        q: 'What is the capital of Australia?',
        answers: [
            'Sidney',
            'Perth',
            'Melbourne',
            'Canberra'
        ],
        currentAns: 'Canberra'
    },
    {
        q: `A Woomera is the aboriginal name for?`,
        answers: [
            'Spear thrower',
            'A Kangaroo',
            'A river',
            'A koala'
        ],
        currentAns: 'Spear thrower'
    },
    {
        q: `What is the longest river in Australia?`,
        answers: [
            'Nass river',
            'Darling',
            'Molonglo',
            'Murray river'
        ],
        currentAns: 'Murray river'
    },

    {
        q: ' When is Australia Day?',
        answers: [
            '12th march',
            '26th january',
            '29th july',
            '11th june'
        ],
        currentAns: '26th january'
    },
    {
        q: ' How many time zones are there in Australia?',
        answers: [
            '5',
            '3',
            '2',
            '4'
        ],
        currentAns: '3'
    },
    {
        q: ' How many states are there in Australia?',
        answers: [
            '6',
            '10 ',
            '5 ',
            '7 '
        ],
        currentAns: '6'
    },
    {
        q: 'What percentage of Australia is classified as a desert? ________________.',
        answers: [
            '45%',
            '70%',
            '55%',
            '35%'
        ],
        currentAns: '35%'
    }


]


let t = new Trivia('#parent', json)
t.render()