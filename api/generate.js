export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
  }

  const { prompt, imageB64, imageMime } = req.body;
  if (!prompt || !imageB64 || !imageMime) {
    return res.status(400).json({ error: 'Missing required fields: prompt, imageB64, imageMime' });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`;

  const body = {
    contents: [{
      parts: [
        { inline_data: { mime_type: imageMime, data: imageB64 } },
        { text: prompt }
      ]
    }],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  try {
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      return res.status(geminiRes.status).json({
        error: data.error?.message || `Gemini API Error ${geminiRes.status}`
      });
    }

    const parts = data.candidates?.[0]?.content?.parts || [];
    const ip = parts.find(p =>
      (p.inlineData?.mimeType || p.inlineData?.mime_type || '').startsWith('image/') ||
      (p.inline_data?.mimeType || p.inline_data?.mime_type || '').startsWith('image/')
    );

    if (!ip) {
      return res.status(500).json({ error: 'No image returned by Gemini. Check your quota.' });
    }

    const imgPart = ip.inlineData || ip.inline_data;
    return res.status(200).json({
      b64: imgPart.data,
      mime: imgPart.mimeType || imgPart.mime_type || 'image/png'
    });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
