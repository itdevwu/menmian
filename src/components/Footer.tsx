import { Prompt } from 'next/font/google'
import Link from 'next/link';
import router from 'next/router';

const Prompt_Footer = Prompt({ subsets: ['latin'], weight: "300" });

const Footer = (props: {
    user: string,
    userFooter: string
}) => {
    return (
        <footer
            className={`${Prompt_Footer.className} text-zinc-800 h-1/8 w-full text-center align-text-bottom bottom-0 pb-0 pt-10 text-xs mb-6`}
        >
            {props.userFooter}<br />© {new Date().getFullYear()} <Link href="/" onClick={() => {
                router.reload();
            }}>{props.user}</Link>.
        </footer>
    )
}

export default Footer;