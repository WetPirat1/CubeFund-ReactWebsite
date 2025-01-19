import { createClient } from '@supabase/supabase-js';

// Создаем клиента для взаимодействия с базой данных
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchMonthlyPnL = async () => {
  const { data, error } = await supabase
    .from('pnl_data') // Имя таблицы
    .select('month, monthly_pnl'); // Новые столбцы

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  // Округляем значения monthly_pnl до сотых
  const roundedData = data.map((item) => ({
    ...item,
    monthly_pnl: parseFloat(item.monthly_pnl.toFixed(2)) // Округляем до двух знаков после запятой
  }));

  return roundedData;
};

export const fetchReserveData = async () => {
  const { data, error } = await supabase
    .from('reserves_data')  // Имя таблицы
    .select('reserves')     // Поле, которое нам нужно
    .order('createdat', { ascending: false }) // Исправлено имя столбца
    .limit(1); // Получаем только один результат

  if (error) {
    console.error('Error fetching reserve data:', error);
    return null;
  }

  return data.length > 0 ? data[0].reserves : 0; // Возвращаем значение резерва или 0
};



export const fetchProfitData = async () => {
  const { data, error } = await supabase
    .from('profit_data')  // Имя таблицы
    .select('invested, rewarded')  // Столбцы для выборки

  if (error) {
    console.error('Error fetching profit data:', error);
    return null;
  }

  // Возвращаем данные с округленными значениями
  return data.length > 0 ? data[0] : null;
};

