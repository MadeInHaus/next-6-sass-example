import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        const { buildManifest } = this.props;
        const { css } = buildManifest;
        return (
            <html>
                <Head>
                    {css.map(file => {
                        return (
                            <link
                                rel="stylesheet"
                                href={`/_next/${file}`}
                                key={file}
                            />
                        );
                    })}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
