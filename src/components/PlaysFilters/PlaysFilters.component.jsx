import React from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { Disclosure } from "@headlessui/react";

const PlaysFilter = (props) => {
  return (
    <Disclosure className="bg-gray-700 px-2 py-4 ">
      {({ open }) => (
        <>
          <div className="shadow-md pb-3 my-1">
            <Disclosure.Button className="py-2 flex items-center gap-3">
              {open ? <BiChevronUp className="ml-2"/>  : <BiChevronDown className="ml-2" />}
              <span className={open ? "text-red-600" : "text-gray-700"}>
                {props.title}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <div className="flex items-center gap-3 flex-wrap ml-3">
                {props.tags.map((tag) => (
                  <>
                    <div className="border-2 border-gray-200 px-3 py-2">
                      <span className="text-red-600">{tag}</span>
                    </div>
                  </>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
