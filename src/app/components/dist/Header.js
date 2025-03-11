"use strict";
exports.__esModule = true;
var headerHero_jpg_1 = require("../../../public/headerHero.jpg");
var image_1 = require("next/image");
function Header() {
    return (React.createElement("section", { id: "home", className: "w-full h-screen relative pt-[110px]" },
        React.createElement("header", { className: "absolute inset-0 w-full h-full overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 bg-dark bg-opacity-80 shadow-lg w-full h-full" }),
            React.createElement("div", { className: "absolute inset-0 w-full h-full z-0" },
                React.createElement(image_1["default"], { src: headerHero_jpg_1["default"], alt: "Zdj\u0119cie pracowni artysty w tle", fill: true, className: "object-cover object-center" })),
            React.createElement("div", { className: "absolute bottom-0 w-full bg-black bg-opacity-50 z-20 p-6 pb-10" },
                React.createElement("div", { className: "container text-center" },
                    React.createElement("blockquote", { className: "text-lg font-semibold text-beigeLight drop-shadow-lg leading-10 italic pb-6" }, "\u201EW mojej robocie interesuje mnie \u201Ejak\u201D na r\u00F3wni z \u201Eco\u201D. Uwa\u017Cam, \u017Ce poprzez \u201Ejak\u201D, ca\u0142o\u015B\u0107, czyli r\u00F3wnie\u017C \u201Eco\u201D, jest g\u0142\u0119bsze. \u017Be, znajduj\u0105c w\u0142a\u015Bciw\u0105 form\u0119, m\u00F3wi\u0119 wi\u0119cej.\u201D"),
                    React.createElement("div", { className: "mt-2 text-right text-sm italic text-beigeLight" },
                        React.createElement("p", null, "S\u0142awomir Grabowy, Autoportret 60 i 35")))))));
}
exports["default"] = Header;
