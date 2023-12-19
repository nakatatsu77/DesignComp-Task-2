import Link from "next/link";

export function Hero() {
  return (
    <>
      <section className="w-full min-h-screen bg-root-hero-sp md:bg-root-hero-pc bg-cover bg-center flex justify-center items-center">
        <div className="w-[328px] md:w-2/3   flex-col justify-start items-start gap-16 flex">
          <div className="flex-col gap-6 flex">
            <h2 className="text-neutral-800 text-2xl md:text-5xl font-bold font-['Noto Sans JP'] leading-9 md:leading-[72px] tracking-wide">
              テクノロジーを通じて、
              <br />
              夢や目標を実現できる
              <br />
              環境を提供します
            </h2>
            <h3 className="text-zinc-800 text-base md:text-xl font-medium font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide">
              IT教育、システム開発から
              <br className="md:hidden" />
              企業を支援する
              <br />
              テクノロジーカンパニーです。
            </h3>
          </div>
          <div className="w-60 md:w-80 h-14 md:h-[78px] px-8 md:px-12 py-4 md:py-6 bg-lime-300 rounded-full justify-center items-center inline-flex">
            <Link
              className="text-center text-neutral-800 text-base md:text-xl font-bold font-['Noto Sans JP'] leading-normal md:leading-[30px] tracking-wide"
              href="#service"
            >
              事業内容を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
