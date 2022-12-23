import React from "react";

interface MediaWrapProps {
  media: Array<{
    id: string;
    type: "image" | "video";
    images: {
      standard_resolution: {
        url: string;
      };
    };
    videos: {
      standard_resolution: {
        url: string;
      };
    };
  }>;
}

const MediaWrap: React.FC<MediaWrapProps> = ({ media }) => {
  return (
    <div>
      {" "}
      {media.map((item) =>
        item.type === "image" ? (
          <img key={item.id} src={item.images.standard_resolution.url} />
        ) : (
          <video key={item.id} src={item.videos.standard_resolution.url} />
        )
      )}
    </div>
  );
};

export default MediaWrap;
