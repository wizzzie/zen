import { useEffect, useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png",
    dir: "ltr",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    img: "https://static.magflags.net/media/catalog/product/cache/75170699113cf9b1963820a3ea1bab40/X/X/XX-saudi_arabia.png",
    dir: "rtl",
  },
  {
    code: "es",
    name: "español",
    country_code: "es",
    img: "https://customflagsaustralia.com.au/wp-content/uploads/2022/06/spain-flag.png",
    dir: "ltr",
  },
  {
    code: "ru",
    name: "русский",
    country_code: "ru",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
  },
  {
    code: "tr",
    name: "Türkçe",
    country_code: "tr",
    img: "https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg",
  },
  {
    code: "de",
    name: "Deutsch",
    country_code: "de",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
];

const Navbar = () => {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguagr = languages.find((l) => l.code === currentLanguageCode);

  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguagr.dir || "ltr";
  }, [currentLanguagr]);
  return (
    <div className="shadow-xl shadow-[#000]">
      <div className="container mx-auto sm:px-0 px-3 ">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="./images/logo.png"
              alt="Logo"
              className="sm:w-[110px] sm:h-[110px] object-contain w-[90px] h-[90px]"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <a
              href="#swap"
              className="text-[18px] capitalize text-red-600 block transition-all ease-in-out duration-300"
            >
              {t("swap")}
            </a>
            <a
              href="#review"
              className="text-[18px] capitalize text-red-600 block transition-all ease-in-out duration-300"
            >
              {t("review")}
            </a>
          </div>
          <div className="relative sm:w-[110px] flex justify-end">
            <BsGlobeAsiaAustralia
              className="text-red-600 text-2xl"
              onClick={() => setShow(!show)}
            />
            <div
              className={`absolute z-10 ${
                document.body.dir === "ltr" ? "right-[0%]" : "left-[0%]"
              } bg-gray-500 w-[230px] p-3 ${
                show ? "top-[150%]" : "-top-[2100%]"
              } transition-all ease-in-out duration-300`}
            >
              {languages.map(({ code, name, country_code, img }) => (
                <div
                  className={`flex items-center gap-[10px] cursor-pointer hover:bg-gray-600 p-2 transition-all ease-in-out duration-300 ${
                    currentLanguagr.code === code && "bg-red-900"
                  }`}
                  key={country_code}
                  onClick={() => {
                    setShow(false);
                    i18next.changeLanguage(code);
                  }}
                >
                  <img
                    src={img}
                    alt="#"
                    className="w-[30px] h-[30px] object-contain"
                  />
                  <p className="text-white text-xl capitalize">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
