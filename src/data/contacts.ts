import BskyIcon from "@/assets/icons/platforms/bluesky.svg";
import GitHubIcon from "@/assets/icons/platforms/github_black.svg";
import YouTubeIcon from "@/assets/icons/platforms/youtube.png";
import TelegramIcon from "@/assets/icons/platforms/telegram.svg";
import TikTokIcon from "@/assets/icons/platforms/tiktok.png";
import EmailIcon from "@/assets/icons/email.svg";
import DiscordIcon from "@/assets/icons/platforms/discord.svg";

export const contactType = {
    link: "link",
    email: "email",
    code: "code",
}

export const contactIconType = {
    svg: "svg",
    png: "png",
    symbol: "symbol",
}

export const contacts = [
    {
        type: contactType.link,
        name: "Bluesky",
        data: "https://bsky.app/profile/reviilight.bsky.social",
        icon: BskyIcon,
        iconType: contactIconType.svg,
        priority: 100,
    },
    {
        type: contactType.link,
        name: "GitHub",
        data: "https://github.com/Reviilight",
        icon: GitHubIcon,
        iconType: contactIconType.svg,
        priority: 50,
    },
    {
        type: contactType.link,
        name: "YouTube",
        data: "https://www.youtube.com/@Reviilight",
        icon: YouTubeIcon,
        iconType: contactIconType.png,
        priority: 40,
    },
    {
        type: contactType.link,
        name: "Telegram",
        data: "https://t.me/vadim_agababian",
        icon: TelegramIcon,
        iconType: contactIconType.svg,
        priority: 30,
    },
    {
        type: contactType.link,
        name: "TikTok",
        data: "https://www.tiktok.com/@reviilight",
        icon: TikTokIcon,
        iconType: contactIconType.png,
        priority: 20,
    },
    {
        type: contactType.link,
        name: "email",
        data: "mailto:edwardfilm3@gmail.com",
        icon: EmailIcon,
        iconType: contactIconType.svg,
        priority: 10,
    },
    {
        type: contactType.code,
        name: "Discord",
        data: "@reviilight",
        icon: DiscordIcon,
        iconType: contactIconType.png,
        priority: 9,
    },
];