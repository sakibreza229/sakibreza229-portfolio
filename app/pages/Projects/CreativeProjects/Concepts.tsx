import { useState } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

// Assuming ConceptsData is imported from a data file
import { concepts } from "@/app/data/CreativeWorksData";

const Concepts = () => {
  const [nextItem, setNextItem] = useState<number>(6);

  const loadMoreHandler = () => {
    setNextItem(() => concepts.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {concepts.slice(0, nextItem).map((concept) => (
          <Card key={concept.title} isFooterBlurred className="w-full h-[248px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{concept.title}</p>
            <h4 className="text-white/90 font-medium text-xl">{concept.subtitle}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-2.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 space-x-6">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-sm mb-1 text-white/60 font-medium">{concept.name}</p>
                <p className="text-tiny text-white/60">{concept.shortBrief}</p>
              </div>
            </div>
            <Button radius="full" size="sm" color="primary" variant="flat" className="flex-shrink-0">
            Explore Insights
            </Button>
          </CardFooter>
        </Card>
        ))}
      </div>

      <div className="text-center">
      {nextItem < concepts.length && (
        <Button
          onPress={loadMoreHandler}
          className="mt-6"
          color="primary"
          variant="shadow"
        >
          Show All
        </Button>
      )}
      </div>
    </>
  );
};

export default Concepts;
