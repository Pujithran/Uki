const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

let client = null;
const hasKey = !!process.env.OPENAI_API_KEY;
if (hasKey) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
} else {
    console.warn('Warning: OPENAI_API_KEY not set. The /chat endpoint will return a fallback message.');
}

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message || '';
    if (!hasKey) {
        return res.json({ reply: "(No API key configured) Received: " + userMessage + " — set OPENAI_API_KEY to get real responses." });
    }

    try {
        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            input: userMessage
        });

        // new Responses API may include content in different fields
        const outText = response.output_text || (response.output && response.output[0] && response.output[0].content && response.output[0].content[0].text) || '';

        res.json({ reply: outText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ reply: 'Sorry, something went wrong.' });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});