export default function Contact () {

const linkCss = "text-typo font-semibold uppercase hover:text-primary";
const bottomSpacingCss = "mb-2";


{/* <main className="md:mx-0 mx-4 md:ml-20 relative">
<h1 className="my-8 md:sticky md:top-32 text-2xl font-normal tracking-widest"> */}

    return (
        <>
            <main>
                <section className="md:mx-0 mx-4 md:ml-20 relative">
                    <div className="md:sticky md:top-32">
                        <h1 className="my-8  text-2xl font-normal tracking-widest">
                        ABOUT ME
                        </h1>
                    </div>
                    <div className="text-justify md:text-left text-secondary font-medium text-lg md:text-xl tracking-widest mb-8 md:mb-0 md:mt-32">
                        <p className={bottomSpacingCss}>こんにちは、 メタと申します。<br/>2021年から日(（福岡)に移住したフランス人です。</p>
                        <p className={bottomSpacingCss}>小学校時代から写真に興味を持ち始めたら、15歳の時に写真撮影を始めました。</p>
                        <p className={bottomSpacingCss}>少しですが世界を旅する機会もあり、自分の作品を投稿するのは良い考えだと思い、このページを作成しました。</p>
                        <p className={bottomSpacingCss}>自分が見たものを共有し、好きなものを広める手段として使って行きたいと考えています。</p>
                        <p className={bottomSpacingCss}>これまでに、フードメニューや仕事関連のコンテンツを手がける経験もしました。</p>
                        <p className={bottomSpacingCss}>現在は若手のフロントエンド開発者として、スキルを磨くためにできるだけ多くのコードを学んでいます。</p>
                        <p className={bottomSpacingCss}>もし私と一緒に共有したいプロジェクトがあれば、ぜひ<a className={linkCss} href="mailto:leopold.mtr@outlook.com?subject=Hello">こちらから</a>ご連絡ください。</p>
                        <p className={bottomSpacingCss}>私の写真は<a className={linkCss} target="_blank" href="https://unsplash.com/@lm" > Unsplash </a>にすべて無料で公開していますので、ぜひそちらもご覧ください。</p>
                        <p className={bottomSpacingCss}>よろしくお願いします！</p>
                    </div>
                </section>
            </main>
        </>
    );
};

