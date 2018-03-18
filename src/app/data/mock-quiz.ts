import { Quiz } from './quiz';

let questionsBlock = [
    [
        {
            id: 32,
            title: 'FirstQ',
            answers: [
                {

                    id: 435346,
                    title: 'firstA',
                    value: 'yes',

                },
                {

                    id: 327642,
                    title: 'secondA',
                    value: 'yes',

                }
            ],
            type: 'radio',
            display: 'inline',
            multipleAnswers: false,
        }
    ],
    [
        {
            id: 33,
            title: 'SecondQ',
            answers: [
                {

                    id: 264723,
                    title: 'not necessary',
                    value: 'yes',

                }
            ],
            type: 'input',
            display: 'inline',
            multipleAnswers: false,
        },
        {
            id: 34,
            title: 'ThirdQ',
            answers: [
                {

                    id: 365923,
                    title: 'selA1',
                    value: 'yes',

                },
                {

                    id: 554562,
                    title: 'selA2',
                    value: 'yes',

                }
            ],
            type: 'select',
            display: 'inline',
            multipleAnswers: false,
        },
    ]
]

export const QUIZ: Quiz = {
    id: 1,
    per_page: 2,
    name: 'First quiz',
    questions: questionsBlock,
    is_active: true,
    // isAnonymous: true,
}
