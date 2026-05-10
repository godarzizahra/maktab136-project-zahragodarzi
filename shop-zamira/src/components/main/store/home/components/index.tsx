import PageContainer from "@/components/providers/pageContainer";
import BestSellerSection from "./bestSallerSection";
import BrandsSection from "./BrandsSection";
import HeroSwiper from "./swiperSection";

export default function HomePageClient() {
	return (
		<div>
			<HeroSwiper />
			<PageContainer>
				<BestSellerSection />
				<BrandsSection />
			</PageContainer>
		</div>
	);
}
