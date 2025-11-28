import { PageWrapper } from "../PageWrapper";
import ArchWithStar from "../components/ArcWithStar";
import MyMenu from "../components/MyMenu";

const MenuPage: React.FC = () => {
  return (
    <PageWrapper page={"page"} header={"header"} footer={"footer"}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px] ">
        <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-6 lg:text-5xl lg:leading-none">
          Меню
        </h1>

        <ArchWithStar />
        <section className="h-full lg:h-[100vh]">
          <div className="h-full items-center grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="lg:p-12 p-4">
              <MyMenu />
            </div>
            <div className="lg:py-12 p-4">
              <img
                alt=""
                src="./menu-new.png"
                className=" w-full  object-contain h-[600px]"
              />
            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default MenuPage;
