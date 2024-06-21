const OpenAI = require("openai");
const env = require("../env.js");

const openai = new OpenAI({
    apiKey: env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

async function summarize(transcript) {
    const prompt = "Summarize the following consultation between the doctor and patient:\n" + transcript
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo"
    });

    const summary = completion.choices[0].message.content;
    return summary;
}

module.exports = { summarize };