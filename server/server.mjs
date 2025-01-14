// server/server.js
import express from 'express';
import cron from 'node-cron';
import { fetchAndSaveDailyPnL } from "../src/api/bybitDailyRequest.js" // Импорт вашей функции для получения и сохранения данных
import cors from 'cors';
import { supabase } from '../src/api/supabaseClient.js'; // Импорт клиента Supabase

const app = express();
const port = 3001; // Порт для серверной части

// Настройка CORS
app.use(cors()); // Разрешает кросс-доменные запросы

// Настройка cron задачи
cron.schedule('0 0 * * *', async () => {
  try {
    await fetchAndSaveDailyPnL(); // Ваш запрос для получения и сохранения данных
    console.log('Daily PnL fetched and saved!');
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
});

console.log('Cron job is set to run daily at 00:00');

// Пример API для получения данных PnL
app.get('/api/pnl', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('pnl_data')
      .select('*')
      .order('date', { ascending: false })
      .limit(1); // Берем последние данные

    if (error) {
      return res.status(500).json({ message: 'Ошибка при запросе данных', error });
    }

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Ошибка сервера', error });
  }
});

// Запуск сервера на порту 3001
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
