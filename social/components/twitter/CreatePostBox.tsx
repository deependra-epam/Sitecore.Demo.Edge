import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const CreatePostBox = () => {
  return (
    <div className="mt-6 rounded-lg bg-white flex flex-col p-3 px-4 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="w-10 h-10">
          <img
            src="https://picsum.photos/200"
            className="w-full h-full rounded-full"
            alt="dp"
          />
        </div>
        <button className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left pl-2 rounded-full h-10 pl-5">
          What&apos;s on your mind?
        </button>
      </div>
      <div className="flex space-x-3 text-sm">
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-400"
            ></FontAwesomeIcon>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Create Video</p>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faImages}
              className="text-green-500"
            ></FontAwesomeIcon>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Photos/Video</p>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faSmile}
              className="text-yellow-500"
            ></FontAwesomeIcon>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Feeling/Activity</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreatePostBox;