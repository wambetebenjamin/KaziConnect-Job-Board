import { SalaryExplorer } from '@/components/SalaryExplorer';
import { PageHero } from '@/components/PageHero';
export const metadata={title:'Salary Guide'};
export default function SalaryGuide(){return <><PageHero title="Know the range. Ask with confidence." description="Explore indicative monthly salary ranges for common roles across East Africa."/><div className="page-content"><p className="results-count">The guide uses a static, illustrative dataset. Actual pay varies by scope, employer, location and benefits.</p><SalaryExplorer/></div></>}
