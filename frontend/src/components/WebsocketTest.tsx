import { blobToString } from '@/utils/blob';
import { useEffect, useState } from 'react';
const reader = new FileReader();

const WebsocketTest = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8083'); // URL do servidor WebSocket

    async function addMessage(data: Blob) {
      const message = await blobToString(data)
      setMessages((prevMessages: any) => [...prevMessages, message]);
    }

    socket.onopen = () => {
      console.log('Conectado ao servidor WebSocket');
    };

    socket.onmessage = (event) => {
      console.log('Mensagem recebida do servidor:', event.data);
      addMessage(event.data);
    };

    socket.onclose = () => {
      console.log('Desconectado do servidor WebSocket');
    };

    return () => {
      socket.close(); // Fecha a conexão ao desmontar o componente
    };
  }, []);

  return (
    <div>
      <h1>Mensagens do Servidor</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebsocketTest;