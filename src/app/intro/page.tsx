import Modal from "@/components/Modal";
import Image from "next/image";
import introImage from "/public/intro.webp";
import Link from "next/link";

function IntroPage() {
  return (
    <Modal>
      <h1 className="modal-title">Intro</h1>
      <div className="flex flex-col gap-y-8">
        <Image priority src={introImage} alt="intro-image" />
        <p className="desc">
          We find ourselves at a critical juncture in history, where our
          collective responsibility towards each other cannot be overlooked. In
          the face of humanitarian crises, it is not just an option but a moral
          imperative for us to come together and act.
        </p>
        <p className="desc">
          <Link href="/help" className=" font-semibold">
            ShaperAid{" "}
          </Link>{" "}
          is a collaborative, cross-hub initiative led by Global Shapers,
          uniting Shapers from around the world to respond to the urgent crisis
          in Palestine. We stand united to protect the civilian population and
          care for the most vulnerable, embodying the essence of global
          solidarity and shared humanity.
        </p>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">MISSION:</h3>
        <p className="desc">
          To mobilize a global{" "}
          <Link className="link" href="/fundraising">
            fundraising
          </Link>{" "}
          effort for Anera to deliver direct relief for families in Gaza and to
          advocate for the opening of humanitarian corridors.
        </p>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">HOW URGENT IS THE SITUATION IN GAZA?</h3>
        <ul className="desc list-disc ml-4">
          <li>
            more than 60% of Gaza is displaced: 1,400,000 people have been
            forced out from their homes, including &gt; 540,000 people taking
            shelter in UN schools*
          </li>
          <li>30% of all housing in Gaza has been destroyed or damaged*</li>
          <li>
            Average water consumption for all needs (drinking, cooking, and
            hygiene) is down to 3ℓ/person/day*
          </li>
        </ul>
      </div>
      <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-4  ">
        <Link href="/help" className="primBtn w-full  sm:w-fit ">
          How can I help?
        </Link>
        <Link href="/anira" className="secBtn w-full  sm:w-fit ">
          more about anira
        </Link>
      </div>
    </Modal>
  );
}

export default IntroPage;
