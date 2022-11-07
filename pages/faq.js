import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

export default function FaqPage(props) {

    return (
        <div>
            <Head>
                <title>FQA - Alura Cases</title>
            </Head>
            <h1>Alura Cases - Pag Page</h1>
            <Link href='/'>Home</Link>
            <ul>
            {props.faq.map((faq, index) => (
                <li key={`faq-${index}`}>
                    <article>
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </article>
                </li>
            ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {

    const faqUrl = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await axios.get(faqUrl);

    return {
        props: {
            faq: faq.data
        },
    };
}