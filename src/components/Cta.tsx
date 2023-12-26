export function Cta() {
  return (
    <>
      <section className="font-sans w-full bg-cta-sp md:bg-cta-pc bg-cover flex-col flex">
        <div className="w-full py-[120px] bg-black bg-opacity-50  justify-center flex">
          <div className="w-[328px] md:w-[1280px] flex-col gap-16 md:gap-20 flex">
            <h2 className="text-center text-white text-xl md:text-[40px] font-bold leading-[30px] md:leading-[60px] tracking-wide">
              業界・規模問わず多くの企業様に
              <br className="md:hidden" />
              ご利用いただいております。
              <br />
              まずはお気軽にご相談ください。
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 px-6 md:px-16 py-10 bg-zinc-800 rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tr-none flex-col items-end gap-10 flex">
                <div className="justify-start items-start flex absolute">
                  <p className="text-stone-500 text-[40px] font-bold font-inter leading-10 tracking-wider">
                    CONTACT
                  </p>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col ustify-start items-start flex">
                    <h3 className="text-white text-2xl font-bold leading-9 tracking-wide z-10">
                      お問い合わせ
                    </h3>
                  </div>
                  <p className="text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                    IT全般についてのご相談をお受けしております。
                    <br />
                    カウンセリング、見積もり作成ともに無料でご対応いたしますので、お気軽にご相談ください。
                  </p>
                  <div className="w-60 px-8 py-4 bg-lime-300 rounded-full justify-center items-center flex">
                    <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                      お問い合わせ
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-6 md:px-16 py-10 bg-stone-500 md:bg-neutral-400 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl md:rounded-bl-none flex-col items-end gap-10 flex">
                <div className="justify-start items-start inline-flex absolute">
                  <p className="text-neutral-400 md:text-stone-300 text-[40px] font-bold font-inter leading-10 tracking-wider">
                    DOCUMENT
                  </p>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col ustify-start items-start flex">
                    <h3 className="text-white text-2xl font-bold leading-9 tracking-wide z-10">
                      資料ダウンロード
                    </h3>
                  </div>
                  <p className="text-zinc-100 text-base font-medium leading-normal tracking-wide mb-4">
                    会社案内、法人エンジニア研修に関するPDF資料をご用意しております。
                    <br />
                    一覧ページよりお受け取りください。
                  </p>
                  <div className="w-60 px-8 py-4 bg-white rounded-full justify-center items-center flex">
                    <button className="text-center text-neutral-800 text-base font-bold leading-normal tracking-wide">
                      資料ダウンロード
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
