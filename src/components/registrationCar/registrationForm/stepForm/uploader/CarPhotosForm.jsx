"use client";

import { useState } from "react";
import SectionUploader from "./SectionUploader";

export default function CarPhotosForm() {
  const [sections, setSections] = useState({
    exterior: { files: [], selectedId: null },
    interior: { files: [], selectedId: null },
    highlights: { files: [], selectedId: null },
    tyres: { files: [], selectedId: null },
  });

  const addFiles = (key, fileList) => {
    const files = Array.from(fileList).map((file) => ({
      id: URL.createObjectURL(file),
      file,
    }));
    setSections((prev) => ({
      ...prev,
      [key]: { ...prev[key], files: [...prev[key].files, ...files] },
    }));
  };

  const selectFile = (key, id) => {
    setSections((prev) => ({
      ...prev,
      [key]: { ...prev[key], selectedId: id },
    }));
  };

  return (
    <div>
      <SectionUploader
        title="Exterior"
        note="Upload clear front, rear, and side shots of the car. Include close-ups of headlights, taillights, and overall body condition."
        files={sections.exterior.files}
        selectedId={sections.exterior.selectedId}
        onUpload={(fl) => addFiles("exterior", fl)}
        onSelect={(id) => selectFile("exterior", id)}
      />

      <SectionUploader
        title="Interior"
        note="Upload photos of seats (front & rear), dashboard, steering wheel, gear lever, and infotainment system."
        files={sections.interior.files}
        selectedId={sections.interior.selectedId}
        onUpload={(fl) => addFiles("interior", fl)}
        onSelect={(id) => selectFile("interior", id)}
      />

      <SectionUploader
        title="Highlights"
        note="Highlight special additions/features like sunroof, touchscreen, reverse camera, alloy wheels, or custom accessories."
        files={sections.highlights.files}
        selectedId={sections.highlights.selectedId}
        onUpload={(fl) => addFiles("highlights", fl)}
        onSelect={(id) => selectFile("highlights", id)}
      />

      <SectionUploader
        title="Tyres"
        note="Take close-up photos of each tyre, including tread condition and spare tyre."
        files={sections.tyres.files}
        selectedId={sections.tyres.selectedId}
        onUpload={(fl) => addFiles("tyres", fl)}
        onSelect={(id) => selectFile("tyres", id)}
      />
    </div>
  );
}
