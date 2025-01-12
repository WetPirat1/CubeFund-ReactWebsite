import { createClient } from '@supabase/supabase-js';

// Создаем клиента для взаимодействия с базой данных
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchDailyPnL = async () => {
  const { data, error } = await supabase
    .from('pnl_data') // Имя таблицы
    .select('date, daily_pnl'); // Столбцы для выборки

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  // Округляем значения daily_pnl до сотых
  const roundedData = data.map((item) => ({
    ...item,
    daily_pnl: parseFloat(item.daily_pnl.toFixed(2)) // Округляем до двух знаков после запятой
  }));

  // console.log('Success: ', roundedData);
  
  return roundedData;
};
