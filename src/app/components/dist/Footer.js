"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Footer() {
    return (react_1["default"].createElement("section", { id: "footer", className: "footer bg-dark text-beigeLight p-4" },
        react_1["default"].createElement("footer", { className: "flex container text-center justify-center items-center" },
            react_1["default"].createElement("p", null,
                "\u00A9 ",
                react_1["default"].createElement("span", null, new Date().getFullYear()),
                " Marek Basiul. Created by Pixel Breeze"))));
}
exports["default"] = Footer;
