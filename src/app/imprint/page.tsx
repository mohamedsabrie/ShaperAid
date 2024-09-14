import Modal from "@/components/Modal";
import imprintData from "./data";
import { twMerge } from "tailwind-merge";

function ImprintPage() {
  return (
    <Modal>
      <h1 className="modal-title">LEGAL</h1>
      <div className="flex flex-col gap-y-8 pb-8">
        {imprintData().map(({ title, desc, id }) => {
          return (
            <div className="flex flex-col gap-y-4" key={id}>
              <h3 className={twMerge("section-title", "mb-0")}>{title}</h3>
              <p className="desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default ImprintPage;
