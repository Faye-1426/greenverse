import Banner from "../../components/parts/Banner";
import { legumes_bg } from "../../assets/images/photos/products-img";
import { Marquee } from "../../components/parts";
import { BoxContainer, SpacingLayout } from "../../layouts";
import CircleButton from "../../components/parts/CircleButton";
import Card from "../../components/parts/Card";
import { legumes } from "../../constants/contents/products/perPage";
import Transition from "../../components/transition/Transition";

const Legumes = () => {
  return (
    <div>
      <Banner title='Legumes' subtitle='Explore.' image={legumes_bg}></Banner>
      <SpacingLayout>
        <BoxContainer>
          <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
            <div className='definition'>
              <p>
                Legumes are a group of plants in the pea family, which includes beans, vetch, clover, and alfalfa, all of which supply nitrogen to the
                soil through rhizobial bacteria. Planting legumes improves soil health, reduces fertilizer costs, and increases yields. Further
                benefits they provide when used as a cover crop include erosion control, addition of organic matter to the soil, and moisture
                conservation.
              </p>
            </div>
            <div className='source-btn flex justify-end'>
              <CircleButton link='https://www.johnnyseeds.com/farm-seed/legumes/'>Source</CircleButton>
            </div>
          </div>
        </BoxContainer>
      </SpacingLayout>
      <Marquee className='h-[0px]'>Legumes are a group of plants in the pea family</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <hr className='h-[2px] opacity-30 bg-black my-16' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {legumes.map((content) => (
              <Card key={content.id} src={content.img} type={content.type} title={content.title} price={content.price} />
            ))}
          </div>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(Legumes);
