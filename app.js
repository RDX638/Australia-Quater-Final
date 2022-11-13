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
        q: 'What is the instrument used to detect earthquakes?',
        answers: [
            'Radiometer',
            'Seismograph',
            'Barometer',
            'Quakometer'
        ],
        currentAns: 'Seismograph'
    },
    {
        q: 'What is the smallest bird in Australia?',
        answers: [
            'Black-throated finch',
            'Weebill',
            'Yellow thornbill',
            'Spotted pardalote'
        ],
        currentAns: 'Weebill'
    },
    {
        q: 'How long do plastics degrade?',
        answers: [
            '150 years',
            '10 years',
            '180 years',
            '5000 years'
        ],
        currentAns: '150 years'
    },
    {
        q: 'The gradual increase in the temperature of the atmosphere is known as ________________.',
        answers: [
            'Greenhouse Effect',
            'Carbon Dioxide Gases',
            'Methane',
            'Global Warming'
        ],
        currentAns: 'Global Warming'
    }


]


let t = new Trivia('#parent', json)
t.render()