import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ZoomImage = ({ ImageUrl, alt }) => {
  return (
    <div className="w-[300px] mx-auto">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: alt,
            isFluidWidth: true, // Allows the small image to be fluid (responsive)
            src: ImageUrl,
          },
          largeImage: {
            src: ImageUrl,
            width: 1200, // Width of the large image for zoom
            height: 1000, // Height of the large image for zoom
          },
          enlargedImageContainerDimensions: {
            width: "250%",
            height: "150%",
          },
          enlargedImageContainerStyle: {
            zIndex: "1",
            marginLeft: "50px",
            border: "1px solid black",
            borderRadius: "8px",
            overflow: "hidden",
            background: "white",
          },
        }}
      />
    </div>
  );
};

export default ZoomImage;
