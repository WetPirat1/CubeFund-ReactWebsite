export default function FloatingSquares() {
  const squares = Array.from({ length: 30 }); // Количество квадратов

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {squares.map((_, index) => {
        const size = Math.floor(Math.random() * 40) + 10; // Размер квадрата (10-50px)
        const positionX = Math.random() * 90; // Ограничиваем, чтобы квадраты не выходили за границы
        const positionY = Math.random() * 90;
        const delay = Math.random() * 5; // Задержка анимации
        const duration = Math.random() * 10 + 5; // Продолжительность анимации

        return (
          <div
            key={index}
            className="absolute bg-blue-300 opacity-70 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${positionY}%`,
              left: `${positionX}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
