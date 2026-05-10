import PageContainer from "@/components/providers/pageContainer";
import BestSellerSection from "./bestSallerSection";
import HeroSwiper from "./swiperSection";

export default function HomePageClient() {
	return (
		<div>
			<HeroSwiper />
			<PageContainer>
				<BestSellerSection />
			</PageContainer>
		</div>
	);
}
