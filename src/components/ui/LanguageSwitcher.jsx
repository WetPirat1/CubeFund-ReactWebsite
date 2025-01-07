import PropTypes from "prop-types";

const LanguageSwitcher = ({ currentLanguage, changeLanguage }) => {
    const isEnglish = currentLanguage === "en";

    return (
        <div className="flex items-center justify-center w-full">
            <button
                type="button"
                onClick={() => changeLanguage(isEnglish ? "ru" : "en")}
                className="relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer focus:outline-none p-1 transition-all duration-500 ease-in-out"
                aria-label="Switch Language"
            >
                {/* Переключатель */}
                <div
                    className={`absolute top-1 w-7 h-6 bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out transform ${
                        isEnglish ? "translate-x-0" : "translate-x-7"
                    }`}
                ></div>

                {/* Метки языков */}
                <span
                    className={`font-mono absolute ml-1 left-1.5 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-gray-700 transition-opacity duration-300 ease-in-out ${
                        isEnglish ? "opacity-100" : "opacity-50"
                    }`}
                >
                    EN
                </span>
                <span
                    className={`font-mono absolute right-1 mr-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-gray-700 transition-opacity duration-300 ease-in-out ${
                        !isEnglish ? "opacity-100" : "opacity-50"
                    }`}
                >
                    RU
                </span>
            </button>
        </div>
    );
};

LanguageSwitcher.propTypes = {
    currentLanguage: PropTypes.oneOf(["en", "ru"]).isRequired,
    changeLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
