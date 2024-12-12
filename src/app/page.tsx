import HorizontalSlidder from './Components/HorizontalSlidder';


export default function Home() {

  return (
    <>
      <main className="ml-20">
        <h1 className="fixed text-2xl font-normal tracking-widest mb-10">
          RECENT WORK
        </h1>
        <HorizontalSlidder />
      </main>
    </>
  );
}