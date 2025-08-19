import aboutText from "../mdData/about";
import worksText from "../mdData/works";
import linksText from "../mdData/links";
import productsText from "../mdData/products";

// マークダウンデータ取得

function getAbout() {
    return aboutText;
}

function getWorks() {
    return worksText;
}

function getLinks() {
    return linksText;
}

function getProducts() {
    return productsText;
}

export { getAbout, getWorks, getLinks, getProducts };