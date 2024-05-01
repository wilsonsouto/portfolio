import { About, Contact, Education, Experiences, Projects } from '@/components/sections';
import { IconType } from 'react-icons';

interface HomeProps {
  section: string;
  component: IconType;
}

export const homeData: HomeProps[] = [
  { section: 'about', component: About },
  { section: 'experiences', component: Experiences },
  { section: 'education', component: Education },
  { section: 'projects', component: Projects },
  { section: 'contact', component: Contact },
];
