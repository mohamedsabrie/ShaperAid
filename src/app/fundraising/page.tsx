import Modal from "@/components/Modal";
import Image from "next/image";
import introImage from "/public/fundraising.webp";
import Link from "next/link";
import TableView from "@/components/TableView";
import tableData from "./tableData.json";

function FundraisingPage() {
  return (
    <Modal>
      <h1 className="modal-title">Fundraising</h1>
      <div className="flex flex-col gap-y-8">
        <Image priority src={introImage} alt="intro-image" />
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">HOW WILL YOUR FUNDS IMPACT LIVES?</h3>
        <p className="desc">
          Every contribution matters. If you’re able to provide more, here’s how
          you can provide relief:
        </p>
      </div>
      <div className="mt-8">
        <TableView data={tableData} />
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">ARE THERE OTHER FUNDRAISING EFFORTS?</h3>
        <p className="desc">
          &quot;Artists 4 Aid&quot; is dedicated to raising funds for Anera
          through the selling of prints of original artworks generously donated
          by artists. See here.
        </p>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">WHAT HELP HAS BEEN DEPLOYED?</h3>
        <p className="desc">
          👉🏽 Anera&apos;s Gaza and West Bank Daily Response Log.
        </p>
        <p className="desc">
          The information is verifiable by Saddam Sayyaleh (Amman Hub),
          Community Champion for the Levant region and Regional Development Lead
          at Anera.
        </p>
      </div>

      <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-4  ">
        <Link
          href="https://support.anera.org/a/shapers-for-palestine"
          className="primBtn w-full  sm:w-fit "
        >
          Donate
        </Link>

        <Link href="/resources" className="secBtn w-full  sm:w-fit ">
          Resources
        </Link>
      </div>
    </Modal>
  );
}

export default FundraisingPage;
