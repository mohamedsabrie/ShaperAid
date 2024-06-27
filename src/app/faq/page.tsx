import Modal from "@/components/Modal";
import data from "./data.json";
import Link from "next/link";

function FAQPage() {
  return (
    <Modal>
      <h1 className="modal-title">FAQ</h1>
      <div className="flex flex-col gap-y-8 ">
        {data.map(({ id, ques, ans }) => {
          return (
            <div className="flex flex-col gap-y-4" key={id}>
              <h3 className="text-[11px] sm:text-[13px] font-semibold tracking-widest">
                {ques}
              </h3>
              <p className="desc">{ans}</p>
            </div>
          );
        })}
        <Link  href="/help"  className="secBtn">HELP</Link>
      </div>
    </Modal>
  );
}

export default FAQPage;
