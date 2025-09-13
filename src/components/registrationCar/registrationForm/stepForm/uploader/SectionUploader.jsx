"use client";

import Image from "next/image";
import { Row, Col } from "react-bootstrap";

export default function SectionUploader({
  title,
  note,
  files = [],
  selectedId = null,
  onUpload,
  onSelect,
}) {
  return (
    <section className="mainBody__uploadfile mb-4 pb-3 border-bottom">
      {/* Title */}
      <h6 className="mb-2 fw-semibold fSize-4 text-dark">{title}</h6>

      {/* Upload box */}
      <label
        className="choseFile__body w-100 rounded-3 d-flex flex-column align-items-center justify-content-center py-3"
        style={{ cursor: "pointer" }}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => onUpload(e.target.files)}
          className="d-none"
        />
        <div className="d-flex align-items-center gap-3">
          <Image src="/assets/img/uploadImageIcon.png" alt="" width={19} height={18}/>
        <div className="fSize-2 fw-light">Choose the files</div>
        
        </div>
      </label>

      {/* Note */}
      {note && (
        <p className="mt-2 fSize-3 fw-light text-dark gap-2">
          <strong className="fw-bold text-dark">Note:</strong> <span className="fst-italic">{note}</span>
        </p>
      )}

      {/* Thumbnails */}
      <Row className="g-3 mt-1">
        {files.map((img) => (
          <Col xs={12} sm={6} md={4} lg={4} key={img.id}>
            <div
              className="position-relative border rounded overflow-hidden"
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(img.id)}
            >
              <Image
                src={img.id}
                alt={`${title} photo`}
                width={500}
                height={130}
                className="w-100 object-fit-cover"
              />

              {/* select circle */}
              <div
                className={`position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center rounded-circle border border-2 ${
                  selectedId === img.id
                    ? "bg-transparent border-white"
                    : "bg-transparent border-white"
                }`}
                style={{ width: 22, height: 22 }}
              >
                {selectedId === img.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.485 1.929a.75.75 0 011.06 1.06L6.03 11.505a.75.75 0 01-1.06 0L1.454 7.989a.75.75 0 111.06-1.06L5.5 9.915l7.985-7.986z" />
                  </svg>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
