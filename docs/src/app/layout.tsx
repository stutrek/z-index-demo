import type { Metadata } from 'next';
import './globals.css';
import './markdown.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <link rel="icon" href={logoIcon.src} sizes="any" />
                <link rel="apple-touch-icon" href={logoIcon.src} sizes="any" /> */}
            </head>
            <body>
                {children}
                <div className="container max-w-3xl mx-auto p-4 text-sm text-gray-400">
                    <hr className="mb-3" />
                    &copy; 2024 Stu Kabakoff
                </div>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: {
        template: '%s | Project',
        default: 'Project',
    },
    description: 'Project description',
    // openGraph: {
    //     images: [ogImage.src],
    // },
};
