import Modal from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";
import introImage from "/public/intro.jpg";

function HelpPage() {
  return (
    <Modal>
      <h1 className="modal-title">Help</h1>
      <div className="flex flex-col gap-y-8">
        <Image src={introImage} alt="intro-image" />
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="section-title">HOW CAN HUBS HELP?</h3>
        <ul className="desc list-disc ml-4">
          <li>
            <span className="font-semibold">Raise Funds:</span> We invite your
            hub to participate in our joint call for aid and help raise
            awareness about the ongoing humanitarian crisis. Share the social
            media assets on your hub&apos;s platforms to spread the word. There
            are many ways to raise funds apart from direct appeals on socials.
            Hubs can do bake sales, talk to corporate partners, etc.
          </li>
          <li>
            <span className="font-semibold">Spread the Word:</span> Encourage
            your hub&apos;s network to join this cause. If fundraising in your
            region/context is challenging, please share the provided social
            media assets on your platforms to spread the word. You can create a
            post and share a story on the Hub’s social media platforms
            (Instagram, LinkedIn, Facebook, etc.)
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col">
        <h3 className="section-title">HOW CAN SHAPERS HELP?</h3>
        <ul className="desc list-disc ml-4">
          <li>
            <span className="font-semibold">Spread the Word:</span> Share the
            provided social media assets on your social platforms to spread the
            word. Create a post and/or share a story on your personal social
            media platforms (Instagram, LinkedIn, Facebook, etc.)
          </li>
          <li>
            <span className="font-semibold">Donate</span> if you can: Every
            contribution, regardless of the amount, counts.
          </li>
          <li>
            <span className="font-semibold">
              Circulate the Media Kit Folder:
            </span>{" "}
            Share the Folder with those around you so that they can also pass on
            the message.
          </li>
          <li>
            <span className="font-semibold">Volunteer:</span> If you have other
            ideas or skills you&apos;d like to contribute, please reach out to
            your Hub Curator/regional coordinator/Community Champion. We value
            every form of support.
          </li>
        </ul>
      </div>
      <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-4  ">
        <Link
          href="https://support.anera.org/a/shapers-for-palestine"
          className="primBtn w-full  sm:w-fit "
        >
          Donate
        </Link>

        <Link
          href="/resources"
          className="secBtn w-full  sm:w-fit "
        >
          Resources
        </Link>
      </div>
    </Modal>
  );
}

export default HelpPage;
