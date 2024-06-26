import Modal from "@/components/Modal";
import { EnvelopeIcon, GlobeAmericasIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function ContactPage() {
  return (
    <Modal>
      <h1 className="modal-title">Contact</h1>
      <div className="flex flex-col gap-y-8">
        <p className="desc">
          If you would like to get in touch or collaborate, feel free to reach
          out to us via mail,{" "}
          <Link
            className="border-b border-dashed"
            href="https://www.instagram.com/shaperaid/"
          >
            Instagram
          </Link>{" "}
          or your Hub Curator/
          <Link
            className="border-b border-dashed"
            href="https://bit.ly/shaperaidcoordinators"
          >
            regional coordinator/Community Champion
          </Link>
        </p>
        <div className="flex items-center gap-x-4 mb-4 sm:mb-10">
          <Link
            href="mailto:someone@example.com"
            className="p-2 rounded-full border border-white"
          >
            <EnvelopeIcon className="h-4" />
          </Link>
          <Link
            href="https://toplink.weforum.org/"
            className="p-2 rounded-full border border-white"
          >
            <GlobeAmericasIcon className="h-4" />
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default ContactPage;
