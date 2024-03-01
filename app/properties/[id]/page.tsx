import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";
import React from "react";
import PictureBanner from "../components/PictureBanner";
import PageContent from "../components/PageContent";

const page = () => {
  return (
    <div>
      <Container>
        <PictureBanner />
        <PageContent />
      </Container>
    </div>
  );
};

export default page;
