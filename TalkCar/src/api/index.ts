import axios from "axios";

const url = "https://api.coze.cn/open_api/v2/chat"
const apikey = "pat_u67HLd06we8USgeY9EckZMiKUnU0A8YoUmkJJl4dOfstzVcZY6CfcmKnKGXl8Um8";
const appid = "7496372746289446946";
async function getCozeData(content: string) {
    const headers = {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json',
    };

    const data = {
        "bot_id": appid,
        "conversation_id": "123456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });
        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData