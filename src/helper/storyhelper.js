import storyblock from "../data/story/story.json";
import tags from "../data/story/tags.json";

// Story details
function getStory(id) {
    return storyblock.filter(story => { return story.id === parseInt(id) })[0];
}
function getTags(items) {
    var elems = tags.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Recent story
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    storyblock.slice(0, 4).map((item) => {
        item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        item.storydate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return item;
    });
}
setDemoDate();
function recentStory() {
    var elems = storyblock.filter((item) => {
        return item.timestamp < new Date(item.storydate);
    });
    return elems;
}
// Filter
function getFilteredStory(storys, filter = { tag: '' }) {
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    // Tag filter
    if (tagFilter) {
        storys = storys.filter(story => {
            return (story.tags !== undefined && story.tags !== null) && story.tags.includes(parseInt(filter.tag))
        })
    }
    return storys;
}
export { getStory, getTags, recentStory, getFilteredStory };