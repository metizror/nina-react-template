import donationblock from "../data/donation/donation.json";
import category from "../data/donation/category.json";
import tags from "../data/donation/tags.json";

// Post details
function getPost(id) {
    return donationblock.filter(post => { return post.id === parseInt(id) })[0];
}
// Categroy
function getCategories(items) {
    var elems = category.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
function getTags(items) {
    var elems = tags.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Count Category
function setCategoriesCount() {
    for (let i = 0; i < category.length; i++) {
        var count = donationblock.filter(post => { return post.category.includes(parseInt(category[i].id)) });
        count = count.length;
        category[i].count = count;
    }
}
setCategoriesCount();
// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    donationblock.slice(0, 4).map((item) => {
        item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        item.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return item;
    });
}
setDemoDate();

function recentPost() {
    var elems = donationblock.filter((item) => {
        return item.timestamp < new Date(item.postdate);
    });
    return elems;
}

// Filter
function getFilteredposts(posts, filter = { cat: '', tag: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    return posts;
}

export { getPost, getCategories, getTags, recentPost ,getFilteredposts };

