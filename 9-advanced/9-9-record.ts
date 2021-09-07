type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

// Page와 PageInfo를 묶어주는 역할
// Page를 Key로 삼고, PageInfo를 value로 삼는다. 
const nav: Record<Page, PageInfo> = {
    home: {title: 'hi'},
    about: {title: 'about'},
    contact: {title: 'Contact'},
};
