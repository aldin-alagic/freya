import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Gallery.css";
import { getOriginals, getThumbnails } from "../../../store/files";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export function Gallery(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.entities.solutions.loading);
  const attachments = useSelector(
    (state) => state.entities.solutions.solution.attachments
  );
  const originals = useSelector((state) => state.files.originals);
  const thumbnails = useSelector((state) => state.files.thumbnails);

  useEffect(() => {
    let originals = [];
    let thumbnails = [];
    for (const attachment of attachments) {
      originals.push({
        title: attachment.title,
        b64_header: attachment.b64_header,
        path: attachment.original_path,
      });
      thumbnails.push({
        title: attachment.title,
        b64_header: attachment.b64_header,
        path: attachment.thumbnail_path,
      });
    }
    //dispatch(getOriginals(originals));
    //dispatch(getThumbnails(thumbnails));
  });

  const imagess = originals.map((original, index) => {
    return {
      original,
      thumbnail: thumbnails[index],
    };
  });
  console.log("img", imagess);

  const renderReturnControl = () => {
    return (
      <button
        id="return"
        to="/solution/13/overview"
        className="image-gallery-icon image-gallery-fullscreen-button return-btn"
        onClick={props.onReturnClick}
      >
        <FontAwesomeIcon icon={faTimes} size="2x" fixedWidth />
      </button>
    );
  };

  return (
    <div className="animate__animated animate__fadeIn d-flex justify-content-center align-content-center overlay">
      <div className="col-6 gallery">
        <ImageGallery
          items={images}
          renderCustomControls={renderReturnControl}
        />
      </div>
    </div>
  );
}
