import PageContainer from "@/components/providers/pageContainer";
import BestSellerSection from "./bestSallerSection";
import BrandsSection from "./BrandsSection";
import BudgetSection from "./budgetSection";
import NewArrivalSection from "./newArrivalSection";
import StoreFeaturesSection from "./storeFeatures";
import HeroSwiper from "./swiperSection";

export default function HomePage() {
	return (
		<div>
			<HeroSwiper />
			<PageContainer>
				<BestSellerSection />
				<BrandsSection />
				<NewArrivalSection />
			</PageContainer>
			<BudgetSection />
			<StoreFeaturesSection />
		</div>
	);
}
