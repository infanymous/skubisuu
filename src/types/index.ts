export interface NavLink {
    label: string;
    href: string;
}

export interface PageContent {
    title: string;
    description: string;
    imageUrl?: string;
}

export interface GalleryImage {
    id: string;
    title: string;
    url: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface AboutUs {
    mission: string;
    vision: string;
    teamMembers: Array<{ name: string; role: string; photoUrl: string }>;
}