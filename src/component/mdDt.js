import aboutText from "../mdData/about";
import worksText from "../mdData/works";
import linksText from "../mdData/links";
import toolsText from "../mdData/tools";
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

function getTools() {
    return toolsText;
}

export { getAbout, getWorks, getLinks, getProducts, getTools };