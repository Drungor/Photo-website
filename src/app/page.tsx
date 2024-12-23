import HorizontalSlidder from './Components/HorizontalSlidder';
import Card from './Components/Card';
import imageData from './data/project.js';
import IntroOverlay from './Components/IntroOverlay';

export default function Home() {

  return (
    <>
      <main className="md:mx-0 mx-4 md:ml-20 relative">
      <IntroOverlay/>
      <div className=" md:sticky md:top-32">
        <h1 className="my-8  text-2xl font-normal tracking-widest">
          RECENT WORK
        </h1>
      </div>
        <HorizontalSlidder>
          {imageData.map((item) => (
                <Card
                  mode={item.mode}
                  key={item.id}
                  title={item.title.replace("%20", " ")}
                  id={item.id}
                  image={item.CarrouselImage}
                  year={item.year}
                />
              ))}
          </HorizontalSlidder>
      </main>
    </>
  );
}