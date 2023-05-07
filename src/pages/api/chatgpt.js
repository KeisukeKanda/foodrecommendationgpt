// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const prompt = req.body.prompt;

//       const requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "text-davinci-002", // モデルを追加
//           prompt: `${req.body.message}\nAI: `,
//           max_tokens: 50,
//           n: 1,
//           stop: "\n",
//           temperature: 0.7,
//         }),
//       };

//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           prompt: prompt,
//           max_tokens: 150,
//         }),
//       });

//       console.log("Response from OpenAI:", response); // 追加

//       const result = await response.json();

//       console.log("Result:", result); // 追加

//       res.status(200).json({ text: result.choices[0].text.trim() });
//     } catch (error) {

//       console.error("Error fetching data from ChatGPT API:", error);

//       res.status(500).json({ error: 'Error fetching data from ChatGPT API.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed. Use POST.' });
//   }
// }

// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const prompt = req.body.prompt;

//       // console.log(prompt);

//       const requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           // prompt: `${req.body.message}\nAI: `,
//           max_tokens: 100,
//           n: 1,
//           stop: "\n",
//           temperature: 0.7,
//           messages: [{ "role": "user", "content": prompt}]
//         }),
//       };

//       const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);

//       // console.log("Response from OpenAI:", response);

//       const result = await response.json();

//       console.log("Result:", result);

//       if (!response.ok) {
//         // APIからのエラーメッセージをキャッチ
//         throw new Error(result.error.message);
//       }

//       // res.status(200).json({ text: result.choices[0].text.trim() });
//       res.status(200).json({ text: result.choices[0].message.content.trim() });
//     } catch (error) {

//       // console.error("Error fetching data from ChatGPT API:", error);

//       res.status(500).json({ error: error.message || 'Error fetching data from ChatGPT API.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed. Use POST.' });
//   }
// }


import axios from 'axios';

const API_URL = "https://api.openai.com/v1/chat/completions";

export const createMenu = async (prompt) => {
  try {
    const response = await axios.post(API_URL, {
      model: "gpt-3.5-turbo",
      messages: [
          { role: 'system', content: 'You are a professional nutritionist and chef.' },
          { role: 'user', content: prompt },
        ],
      // prompt: prompt,
      max_tokens: 600, // 適切なトークン数を設定してください
      temperature: 0.5, // 生成テキストの多様性を制御する値。0.0-1.0の範囲で選択してください
      // top_p: 1,
      // frequency_penalty: 0,
      // presence_penalty: 0,

    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error in ChatGPT API call:", error);
  }
};
