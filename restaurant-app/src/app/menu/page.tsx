import EventsPageEventCard from "../EventCard";
import { PageWrapper } from "../PageWrapper";
import ArchWithStar from "../components/ArcWithStar";

const MenuPage: React.FC = () => {
  return (
    <PageWrapper page={"page"} header={"header"} footer={"footer"}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px] ">
        <div className="container max-w-[1198px] min-h-dvh">
          <ArchWithStar />
          <div className="relative px-4 max-w-[400px] mx-auto mb-10 lg:max-w-[745px] lg:mb-20 xl:px-0">
            <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-6 lg:text-5xl lg:leading-none">
              Очаквайте скоро нашето Меню
            </h1>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default MenuPage;
