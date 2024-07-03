import Modal from "@/components/Modal";
import data from "./data.json";
import Link from "next/link";

function FAQPage() {
  return (
    <Modal>
      <h1 className="modal-title">ANERA</h1>
      <div className="flex flex-col gap-y-8 ">
        <div className="mt-10 flex flex-col">
          <h3 className="section-title">WHY ANERA?</h3>
          <p className="desc">
            To mobilize a global fundraising effort for Anera to deliver direct
            relief for families in Gaza and to advocate for the opening of
            humanitarian corridors.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="section-title">
            HOW URGENT IS THE SITUATION IN GAZA?
          </h3>
          <ul className="desc list-disc ml-4">
            <li>
              Anera was one of the first to respond to the crisis in Gaza.
            </li>
            <li>
              It operates very efficiently; ~96% of your donation goes towards
              programs and aid, while only ~4% goes to overhead costs.
            </li>
            <li>
              Anera has been operating in Palestine and the surrounding region
              for the past 55 years, with deep trusted relationships with local
              community organizations. Even now, when aid organizations are
              unable to get into Gaza, Anera is still able to mobilize support
              and provide food and aid.
            </li>
            <li>
              Global Shapers have worked with Anera on a few disaster relief
              initiatives, including the blast in Beirut (2020).
            </li>
            <li>
              The allocation this humanitarian aid is verifiable by a Global
              Shaper, Saddam Sayyaleh (Amman Hub), Community Champion for the
              Levant region and Regional Development Lead at Anera.
            </li>
          </ul>
        </div>
        <div className=" mb-8 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-4  ">
          <Link
            target="_blank"
            href="https://www.anera.org/faq/"
            className="secBtn"
          >
            ANERA FAQ
          </Link>
          <Link
            target="_blank"
            href="https://www.anera.org/blog/gaza-and-west-bank-response-log/"
            className="secBtn"
          >
            DAILY RESPONSE LOG
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default FAQPage;
