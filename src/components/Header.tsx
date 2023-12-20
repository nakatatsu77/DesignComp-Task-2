import Image from "next/image";
import logo from "../../public/Images/Logo.png";
import logo2 from "../../public/Images/heroicons-mini 3/bars-3-bottom-right.png";
import XMarkIcon from "../../public/Images/x-mark.png";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header className="w-full fixed flex-col items-center gap-2.5 flex">
        <div className="w-[328px] md:w-[1280px] px-4 md:px-10 py-3 md:py-4 bg-white rounded-2xl justify-between flex mt-3 md:mt-4">
          <Image
            src={logo}
            alt="株式会社var"
            className="w-10 md:w-12 h-10 md:h-12 pt-[0.62px] md:pt-[0.75px] pb-[0.59px] md:pb-[0.70px] justify-center items-center flex"
          />
          <div className="hidden md:flex justify-start items-center gap-10">
            <nav>
              <ul className="justify-start items-center gap-6 flex">
                <li className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                  サービス
                </li>
                <li className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                  企業情報
                </li>
                <li className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                  採用情報
                </li>
                <li className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                  お知らせ
                </li>
              </ul>
            </nav>
            <div className="justify-start items-center gap-2 flex">
              <div className="w-[184px] px-6 py-3 bg-lime-300 rounded-full justify-center items-center flex">
                <button className="text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  お問い合わせ
                </button>
              </div>
              <div className="w-[184px] px-6 py-3 bg-white rounded-full border border-neutral-800 justify-center items-center flex">
                <button className="text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  資料ダウンロード
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <button onClick={handleMenuOpen}>
              <Image src={logo2} alt="Modal Icon" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </header>
      {openMenu && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setOpenMenu(false)}
          >
            <div className="w-full h-full px-8 py-6 bg-neutral-800 flex-col gap-10 flex">
              <div className="justify-between flex">
                <Image
                  src={logo}
                  alt="株式会社var"
                  className="w-10 h-10 pt-[0.62px] pb-[0.59px] justify-center items-center flex"
                />
                <button onClick={() => setOpenMenu(false)}>
                  <Image
                    src={XMarkIcon}
                    alt="Modal Icon"
                    className="w-10 h-10 relative"
                  />
                </button>
              </div>
              <div className="flex-col justify-center gap-10 flex">
                <nav>
                  <ul className="flex-col justify-center gap-6 flex">
                    <li className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                      サービス
                    </li>
                    <li className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                      企業情報
                    </li>
                    <li className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                      採用情報
                    </li>
                    <li className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                      お知らせ
                    </li>
                  </ul>
                </nav>
                <div className="flex-col justify-center items-start gap-2 flex">
                  <div className="w-full px-6 py-3 bg-lime-300 rounded-full justify-center items-center flex">
                    <button className="text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      お問い合わせ
                    </button>
                  </div>
                  <div className="w-full px-6 py-3 bg-white rounded-full border border-neutral-800  justify-center items-center flex">
                    <button className="text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      資料ダウンロード
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
