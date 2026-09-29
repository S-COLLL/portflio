import Reveal from "../components/Reveal.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import { GALLERY } from "../data.js";

export default function Gallery() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Gallery</h1>
        <p className="page-intro">Pitches, certificates and milestones. Select any image to see it full size.</p></Reveal>
      <GalleryGrid items={GALLERY} />
    </div>
  );
}
