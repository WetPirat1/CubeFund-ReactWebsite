import { useState, useEffect } from 'react';
import axios from 'axios';
import * as crypto from 'crypto-js'; // Используем crypto-js для HMAC

const url = 'https://api.bybit.com'; // Полный URL
const apiKey = import.meta.env.VITE_BYBIT_API_KEY; // Используйте переменные окружения
const secret = import.meta.env.VITE_BYBIT_API_SECRET; // Используйте переменные окружения
const recvWindow = 5000;

function generateSignature(parameters, secret, timestamp) {
    // Создаем строку для подписи
    const dataToSign = timestamp + apiKey + recvWindow + parameters;
    console.log("Data to sign:", dataToSign); // Логируем строку для подписи

    // Создаем HMAC с использованием секретного ключа и параметров
    const signature = crypto.HmacSHA256(dataToSign, secret);

    // Преобразуем результат в строку
    return signature.toString(crypto.enc.Hex); // Преобразуем результат в строку
}

const WalletBalance = ({ accountType = 'UNIFIED', coin = 'USDT' }) => {
    const [walletData, setWalletData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWalletBalance = async () => {
            const endpoint = "/v5/account/wallet-balance";
            const parameters = `accountType=${encodeURIComponent(accountType)}&coin=${encodeURIComponent(coin)}`;
            const timestamp = Date.now().toString();
            const sign = generateSignature(parameters, secret, timestamp);
            const fullUrl = `${url}${endpoint}?${parameters}`;

            const headers = {
                'X-BAPI-SIGN-TYPE': '2',
                'X-BAPI-SIGN': sign,
                'X-BAPI-API-KEY': apiKey,
                'X-BAPI-TIMESTAMP': timestamp,
                'X-BAPI-RECV-WINDOW': recvWindow.toString()
            };

            try {
                // Запрос к API
                const response = await axios.get(fullUrl, { headers });
                console.log("API Response:", response.data);

                // Проверка ответа и извлечение данных
                if (response.data.retCode === 0 && response.data.result && response.data.result.list && response.data.result.list[0]) {
                    const walletBalance = response.data.result.list[0];
                    console.log("Wallet Balance Data:", walletBalance);
                    setWalletData(walletBalance); // Устанавливаем данные
                    setError(null); // Сбрасываем ошибку, если запрос успешен
                } else {
                    throw new Error(`Unexpected response format or error: ${response.data.retMsg}`);
                }
            } catch (error) {
                console.error("Error fetching wallet balance:", error);
                setError("Не удалось загрузить баланс");
                setWalletData(null); // Устанавливаем в null, если произошла ошибка
            }
        };

        getWalletBalance();
    }, [accountType, coin]); // зависимость от accountType и coin

    // Отображаем данные или ошибку
    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!walletData) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h2>Ваш баланс: {walletData.totalEquity}</h2>
            <p>Доступный баланс: {walletData.unrealisedPnl}</p>
        </div>
    );
};

export default WalletBalance;
