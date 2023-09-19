export interface IconedButtonProps {
    iconClass: string,
    title: string,
    width: string,
    height: string,
};

export interface ProvidersProps {
    children: React.ReactNode
}

export interface ProjectProps {
    title: string,
    img: string,
    category: string,
    description: string,
    year: string,
    carousel: Array<string>,
    links: {
        icon: string,
        name: string,
        url: string
    }[],
    tools: Array<string>
}

export interface CertificateProps {
    name: string,
    link: string,
    img: string,
    description: string
}

export interface SkillProps {
    name: string,
    icon: string
}

export interface RevealProps {
    children: JSX.Element
    width?: "fit-content" | "100%"
    reversed?: boolean
}

export interface ImageCarouselProps {
    children: any
}

export interface MainLogoProps {
    color: string
}