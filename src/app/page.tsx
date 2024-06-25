import Content from "@/components/Home/Content";
import ContentBottom from "@/components/Home/ContentBottom";
import ContentTop from "@/components/Home/ContentTop";
import ContentWrapper from "@/components/Home/ContentWrapper";
import Footer from "@/components/Home/Footer";
import HomeBackground from "@/components/Home/HomeBackground";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center   min-h-screen bg-black">
      <HomeBackground />
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
