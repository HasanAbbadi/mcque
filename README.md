# MCQue

A simple app to generate Multiple Choice Questions from an **AI generated** json object.

I built this app for practice sessions after studying, I hope it helps you too.

## Template

Here is the json template you could use for your AI prompt.

```json
{
  "title": "My Quiz",
  "questions": [
    {
      "title": "What is 1+1?",
      "options": [
        { "id": 1, "value": "one" },
        { "id": 2, "value": "two" },
        { "id": 3, "value": "three" },
        { "id": 4, "value": "four" }
      ],
      "answer": 2
    }
    ....
  ]
}
```

## Usage

1. insert the AI generated json into the input field.
2. start answering the questions.
3. have fun!

## Running Localy

1. `git clone https://github.com/HasanAbbadi/mcque.git`
2. `cd mcque`
3. `./index.html`

## Liscense

MIT
