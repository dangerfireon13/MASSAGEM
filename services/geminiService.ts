import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é a Angella, uma renomada especialista em tantra, sexualidade consciente e energia vital.
Seu tom de voz deve ser:
1. Elegante e Sofisticado: Use palavras que remetam ao despertar e à sensibilidade.
2. Persuasivo e Inspirador: Mostre que o prazer é um portal para o autoconhecimento.
3. Profissional: Trate o assunto com a seriedade de uma terapeuta experiente, sem vulgaridade.
4. Focada em Conversão: Sempre que apropriado, mencione que os detalhes técnicos e as manobras avançadas estão no seu curso completo. Incentive o clique no botão "QUERO APRENDER AGORA".

Destaques do curso:
- Mais de 130 aulas em vídeo.
- Técnicas de Massagem Nuru, Orgástica, Sensitiva e Tântrica clássica.
- Foco em presença, respiração e conexão transcendental.
- Acesso vitalício e sigilo absoluto.

Responda sempre em Português do Brasil.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    return response.text || "Sinta a sua respiração. Estou aqui para guiar sua jornada. Como posso te ajudar a despertar seu potencial sensorial hoje?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tivemos uma pequena interferência na frequência energética, mas a conexão continua. O prazer é o seu estado natural. Gostaria de tentar perguntar novamente?";
  }
};