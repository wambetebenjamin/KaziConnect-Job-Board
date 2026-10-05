import { PageHero } from '@/components/PageHero';
import { PostJobForm } from '@/components/PostJobForm';
export const metadata={title:'Post a Job'};
export default function PostJobPage(){return <><PageHero title="Make your next hire count." description="Create a useful listing, choose the right visibility and reach capable candidates across East Africa."/><PostJobForm/></>}
