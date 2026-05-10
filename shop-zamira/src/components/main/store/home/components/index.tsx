import PageContainer from "@/components/providers/pageContainer";
import BestSellerSection from "./bestSallerSection";
import BrandsSection from "./BrandsSection";
import NewArrivalSection from "./newArrivalSection";
import HeroSwiper from "./swiperSection";

export default function HomePageClient() {
	return (
		<div>
			<HeroSwiper />
			<PageContainer>
				<BestSellerSection />
				<BrandsSection />
				<NewArrivalSection />
			</PageContainer>
		</div>
	);
}
