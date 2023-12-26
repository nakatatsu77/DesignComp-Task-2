export function Service() {
  return (
    <>
      <section
        id="service"
        className="font-sans w-full h-auto bg-neutral-800 py-20 flex flex-col items-center"
      >
        <div className="w-[328px] md:w-[960px] flex-col gap-16 md:gap-20 flex">
          <div className="flex-col justify-start items-center gap-10 flex">
            <div className="flex-col items-center flex">
              <h2 className="text-white text-[40px] font-bold font-inter leading-[60px] tracking-wider">
                Service
              </h2>
              <h3 className="text-lime-300 text-base font-bold leading-normal tracking-wide">
                事業内容
              </h3>
            </div>
            <p className="md:w-[640px] text-zinc-100 text-base font-medium leading-normal tracking-wide">
              ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
            </p>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-start gap-4 flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col justify-start items-start inline-flex">
                <h2 className="text-white text-[32px] font-bold font-inter leading-[48px] tracking-wider">
                  Education
                </h2>
                <h3 className="text-white text-sm font-bold leading-[21px] tracking-wide">
                  ITエンジニア教育事業
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-16">
              <div className="grid md:grid-cols-2 flex-col gap-2 md:gap-6">
                <h3 className="md:order-2 text-white text-2xl font-bold leading-9 tracking-wide">
                  ITスクール
                  <br />
                  RareTECH
                </h3>
                <div className="md:order-1 w-[328px] md:w-[400px] h-[185px] md:h-[225px] bg-raretech bg-cover rounded-2xl row-span-3" />
                <p className="md:order-3 text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                  希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。
                </p>
                <div className="md:order-4 w-60 h-14 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex">
                  <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                    詳しく見る
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 flex-col gap-2 md:gap-6">
                <h3 className="text-white text-2xl font-bold leading-9 tracking-wide">
                  インフラ学習サービス
                  <br />
                  エンベーダー
                </h3>
                <div className="w-[328px] md:w-[400px] h-[185px] md:h-[225px] bg-envader bg-cover rounded-2xl row-span-3 justify-self-end" />
                <p className="text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                  日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。
                </p>
                <div className="w-60 h-14 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex">
                  <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                    詳しく見る
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-2 self-stretch bg-lime-300" />
              <div className="flex-col justify-start items-start inline-flex">
                <h2 className="text-white text-[32px] font-bold font-inter leading-[48px] tracking-wider">
                  Development
                </h2>
                <h3 className="text-white text-sm font-bold leading-[21px] tracking-wide">
                  受託開発事業
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-16">
              <div className="grid md:grid-cols-2 flex-col gap-2 md:gap-6">
                <h3 className="md:order-2 text-white text-2xl font-bold leading-9 tracking-wide">
                  システム・アプリケーション開発
                </h3>
                <div className="md:order-1 w-[328px] md:w-[400px] h-[185px] md:h-[225px] bg-development bg-cover rounded-2xl row-span-3" />
                <p className="md:order-3 text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                  要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。
                </p>
                <div className="md:order-4 w-60 h-14 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex">
                  <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                    詳しく見る
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 flex-col gap-2 md:gap-6">
                <h3 className="text-white text-2xl font-bold leading-9 tracking-wide">
                  Web制作
                </h3>
                <div className="w-[328px] md:w-[400px] h-[185px] md:h-[225px] bg-development2 bg-cover rounded-2xl row-span-3 justify-self-end" />
                <p className="text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                  会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。
                </p>
                <div className="w-60 h-14 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex">
                  <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                    詳しく見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
