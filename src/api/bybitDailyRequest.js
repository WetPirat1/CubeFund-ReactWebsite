import axios from 'axios';
import * as crypto from 'crypto-js'; // Для создания HMAC подписи
import { supabase } from './supabaseClient'; // Импорт клиента Supabase

const url = 'https://api.bybit.com'; // API Bybit
const apiKey = import.meta.env.VITE_BYBIT_API_KEY; // Используем ключ API
const secret = import.meta.env.VITE_BYBIT_API_SECRET; // Секретный ключ API
const recvWindow = 5000; // Время ожидания запроса (в миллисекундах)

// Функция для генерации подписи запроса
function generateSignature(parameters, secret, timestamp) {
    const dataToSign = timestamp + apiKey + recvWindow + parameters;
    const signature = crypto.HmacSHA256(dataToSign, secret);
    return signature.toString(crypto.enc.Hex);
}

// Функция для получения PnL за последние 24 часа
const fetchAndSaveDailyPnL = async (accountType = 'UNIFIED', coin = 'USDT') => {
    const currentTimestamp = Date.now();
    const startTime = currentTimestamp - 24 * 60 * 60 * 1000; // 24 часа назад

    // Параметры запроса для Bybit API
    const parameters = `accountType=${encodeURIComponent(accountType)}&currency=${encodeURIComponent(coin)}&startTime=${startTime}&endTime=${currentTimestamp}`;
    const timestamp = currentTimestamp.toString();
    const sign = generateSignature(parameters, secret, timestamp);
    const fullUrl = `${url}/v5/account/transaction-log?${parameters}`;

    const headers = {
        'X-BAPI-SIGN-TYPE': '2',
        'X-BAPI-SIGN': sign,
        'X-BAPI-API-KEY': apiKey,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow.toString(),
    };

    try {
        // Запрос к API Bybit
        const response = await axios.get(fullUrl, { headers });

        if (response.data.retCode === 0 && response.data.result && response.data.result.list) {
            const transactions = response.data.result.list;

            // Суммирование реализованного PnL за последние 24 часа
            let dailyPnL = 0;
            transactions.forEach((transaction) => {
                if (transaction.change) {
                    dailyPnL += parseFloat(transaction.change); // Суммируем все изменения (реализованный PnL)
                }
            });

            // Формируем дату для записи в формате YYYY-MM-DD
            const date = new Date(currentTimestamp).toISOString().split('T')[0]; // Используем только дату

            // Проверка на существование записи за текущий день в базе данных
            const { data: existingData, error: fetchError } = await supabase
                .from('pnl_data')
                .select('id')
                .eq('date', date) // Проверяем, существует ли запись с такой датой
                .single(); // Мы ожидаем только одну запись

            if (fetchError) {
                console.error('Error checking existing data in Supabase:', fetchError);
            }

            // Если запись существует, ничего не делаем
            if (existingData) {
                console.log(`Запись для ${date} уже существует. Ничего не делаем.`);
                return;
            }

            // Если записи нет, вставляем новую
            const { data, error } = await supabase
                .from('pnl_data')
                .insert([
                    {
                        date,
                        daily_pnl: dailyPnL.toFixed(2), // Округляем до двух знаков после запятой
                    }
                ]);

            if (error) {
                console.error('Error inserting data into Supabase:', error);
            } else {
                console.log('PnL data successfully saved in Supabase:', data);
            }
        } else {
            throw new Error(`API Error: ${response.data.retMsg}`);
        }
    } catch (error) {
        console.error('Error fetching transaction log from Bybit:', error);
    }
};

// Экспортируем функцию для использования в других частях приложения
export { fetchAndSaveDailyPnL };
