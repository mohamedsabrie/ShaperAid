import Modal from "@/components/Modal";
import Image from "next/image";
import resourcesImage from "/public/resources.jpg";

function ResourcesPage() {
  return (
    <Modal>
      <h1 className="modal-title">Resources</h1>
      <div className="flex flex-col gap-y-8">
        <Image src={resourcesImage} alt="intro-image" />
      </div>
    </Modal>
  );
}

export default ResourcesPage;
