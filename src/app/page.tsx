import Content from "@/components/Home/Content";
import ContentBottom from "@/components/Home/ContentBottom";
import ContentTop from "@/components/Home/ContentTop";
import ContentWrapper from "@/components/Home/ContentWrapper";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center">
      <ContentWrapper>
        <div className="relative z-10 flex flex-col  items-center justify-center w-full h-full ">
          <ContentTop />
          <Content />
          <ContentBottom />
        </div>
        <Footer />
      </ContentWrapper>
    </main>
  );
}
