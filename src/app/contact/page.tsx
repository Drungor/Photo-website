export default function Contact () {

const linkCss = "text-typo font-semibold uppercase hover:text-primary";
const bottomSpacingCss = "mb-2";


    return (
        <>
            <main>
                <section className="md:ml-20">
                    <div>
                    <h1 className=" md:text-2xl font-normal tracking-widest mb-10">
                        ABOUT ME
                    </h1>
                    </div>
                        <div className="text-justify md:text-left text-secondary font-medium md:text-lg md:text-xl tracking-widest">
                            <p className={bottomSpacingCss}>こんにちは、 メタと申します。<br/>2021年から日本（福岡）に移住したフランス人です。</p>
                            <p className={bottomSpacingCss}>小学校時代から写真に情熱を持ち、15歳の時に写真撮影を始めました。</p>
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

