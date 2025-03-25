import aboutText from "../mdData/about";
import worksText from "../mdData/works";
import linksText from "../mdData/links";

function getAbout(){
    return aboutText;
}

function getWorks(){
    return worksText;
}

function getLinks(){
    return linksText;
}

export {getAbout,getWorks,getLinks};