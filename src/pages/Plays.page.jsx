import React from "react";

import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <>
      <div className="container  mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold">Plays in Mumbai</h2>

            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE1heSBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324918-cpsntufkwv-portrait.jpg"
                  title="Julius Caesar"
                  subtitle="English -->100"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE1heSBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324918-cpsntufkwv-portrait.jpg"
                  title="Julius Caesar"
                  subtitle="English -->100"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE1heSBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324918-cpsntufkwv-portrait.jpg"
                  title="Julius Caesar"
                  subtitle="English -->100"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE1heSBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324918-cpsntufkwv-portrait.jpg"
                  title="Julius Caesar"
                  subtitle="English -->100"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 mx-3">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["English", "Hindi", "Marathi", "Tamil"]}
              />
              <PlaysFilter title="Categories" tags={["Theatre"]} />
              <PlaysFilter
                title="Genres"
                tags={[
                  "Drama",
                  "Comedy",
                  "Musical",
                  "Fantasy",
                  "Romantic",
                  "Suspense",
                  "Thriller",
                ]}
              />
              <PlaysFilter
                title="More Filters"
                tags={[
                  "Outdoor Events",
                  "Kids Allowed",
                  "Online Streaming",
                  "Amateur",
                  "Children Theatre",
                ]}
              />
              <PlaysFilter
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 20000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
