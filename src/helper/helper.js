
import author from '../data/authors.json';
function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<span className="text-dark-white" key={i}><i className="fas fa-star" /></span>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <span className="text-dark-white text-yellow" key={i}><i className="fas fa-star" /></span>;
        }
    }
    return stars;
};
// Social Share
const pageUrl = window.location.href;
function getSocialShare(title) {
    var socialIcons = [
        {
            title: "facebook",
            iconstyle: "fb",
            iconClass: "fab fa-facebook-f",
            link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "twitter",
            iconstyle: "tw",
            iconClass: "fab fa-twitter",
            link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "linkedin",
            iconstyle: "ln",
            iconClass: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl) + "&title=" + encodeURIComponent(title) + ""
        },
        {
            title: "pinterest",
            iconstyle: "gg",
            iconClass: "fab fa-pinterest-p",
            link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(pageUrl) + ""
        }
    ];
    return socialIcons;
}
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
export { Rating, getSocialShare, getAuthor };