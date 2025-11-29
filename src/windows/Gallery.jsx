import React, { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControlls from "../components/WindowControlls";
import { Search, X } from "lucide-react";

const gallery = [
  { id: 1, img: "/images/gal1.png" },
  { id: 2, img: "/images/gal2.png" },
  { id: 3, img: "/images/gal3.png" },
  { id: 4, img: "/images/gal4.png" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      {/* Header */}
      <div id="window-header">
        <WindowControlls target="photos" />
        <h2>Gallery</h2>
        <Search className="icon" />
      </div>

      {/* Gallery Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {gallery.map(({ id, img }) => (
            <div
              key={id}
              className="w-full h-auto overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Gallery ${id}`}
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 bg-black/50 p-2 rounded-full hover:bg-black/80"
              onClick={() => setSelectedImg(null)}
            >
              <X className="text-white" />
            </button>

            <img
              src={selectedImg}
              alt="Full view"
              className="w-full rounded-xl shadow-lg animate-scaleIn"
            />
          </div>
        </div>
      )}
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
