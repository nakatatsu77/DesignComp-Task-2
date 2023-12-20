import logo from "../../public/Images/Logo.png";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="w-full pt-20 pb-6 bg-neutral-800 flex-col justify-start items-center gap-2.5 flex">
        <div className="w-[328px] md:w-[1280px] flex-col items-center gap-10 flex">
          <div className="w-full flex-col md:flex-row justify-start md:justify-between gap-10 flex">
            <address className="flex flex-col gap-2">
              <Image
                src={logo}
                alt="株式会社var"
                className="w-16 h-16 pt-px pb-[0.94px] justify-center items-center flex"
              />
              <p className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                株式会社var
              </p>
              <p className="text-zinc-100 text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                〒 891-0145
                <br />
                鹿児島県鹿児島市錦江台3-21-22
              </p>
              <div className="flex gap-2">
                <Link
                  className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                  href="https://twitter.com/RaretechO"
                >
                  Twitter
                </Link>
                <Link
                  className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                  href="https://zenn.dev/var"
                >
                  Zenn
                </Link>
              </div>
            </address>
            <div className="flex-col gap-6 flex">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
                <nav className="flex-col justify-center gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サービス
                  </h2>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    ITスクール RareTECH
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    インフラ学習サービス エンベーダー
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    システム・アプリケーション開発
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    Web制作
                  </Link>
                </nav>
                <nav className="flex-col justify-center gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    企業情報
                  </h2>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    ミッション
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    ビジョン
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    バリュー
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    役員一覧
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    会社概要
                  </Link>
                </nav>
                <nav className="flex-col justify-center gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    採用情報
                  </h2>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    代表メッセージ
                  </Link>
                  <Link
                    className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide"
                    href=""
                  >
                    募集要項
                  </Link>
                </nav>
                <nav className="flex-col justify-center gap-2 flex">
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お知らせ
                  </h2>
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サステナビリティ
                  </h2>
                  <h2 className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    プライバシーポリシー
                  </h2>
                </nav>
              </div>
              <div className="flex flex-col md:flex-row md:justify-end gap-2">
                <div className="w-full md:w-60 px-8 py-4 bg-lime-300 rounded-full justify-center items-center flex">
                  <button className="text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お問い合わせ
                  </button>
                </div>
                <div className="w-full md:w-60 px-8 py-4 bg-white rounded-full justify-center items-center flex">
                  <button className="text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    資料ダウンロード
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-stone-500 text-xs font-bold font-['Inter'] leading-[18px] tracking-wide">
            ©︎ 2023 var Inc.
          </p>
        </div>
      </footer>
    </>
  );
}
