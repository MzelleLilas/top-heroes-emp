import LinkBanner from '../../../components/atoms/LinkBanner/LinkBanner';

export default function Construct({ lang }) {
    const messages = {
        "fr": "Voir le guide",
        "en": "See the guide",
        "de": "Sehen Sie das Handbuch an"
    }

    return (
        <div className="w-full px-0.5">
            <LinkBanner src="https://top-heroes-guides.notion.site/evenements-gvg-kvk-fr#1cdd7912b47480fda843cb32fa5c3d1d">
                {messages[lang]}
            </LinkBanner>
        </div>
    );
}

