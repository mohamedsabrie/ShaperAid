import Modal from "@/components/Modal";
import Image from "next/image";
import resourcesImage from "/public/resources.webp";
import TableView from "@/components/TableView";
import tableData from './tableData.json'



function ResourcesPage() {
  return (
    <Modal>
      <h1 className="modal-title">Resources</h1>
      <div className="flex flex-col gap-y-8 mb-8">
        <Image priority src={resourcesImage} alt="intro-image" />
        <TableView data={tableData} />
      </div>
    </Modal>
  );
}

export default ResourcesPage;
