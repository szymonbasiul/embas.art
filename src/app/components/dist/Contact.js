'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mail_svg_1 = require("../../../public/mail.svg");
var image_1 = require("next/image");
function Contact() {
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        return [4 /*yield*/, fetch('https://api.web3forms.com/submit', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json'
                                },
                                body: JSON.stringify({
                                    access_key: '53d7d26d-b44b-4c9d-86c9-6f8818f33d2d',
                                    name: e.target.name.valueOf,
                                    email: e.target.email.value,
                                    message: e.target.message.value
                                })
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result.success) {
                            console.log(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("section", { id: "kontakt", className: "contact bg-beigeLight text-dark flex-grow py-16" },
        React.createElement("div", { className: "container mx-auto px-4 md:px-8" },
            React.createElement("h2", { className: "section-title text-3xl md:text-4xl font-bold text-center uppercase drop-shadow-lg mb-8" }, "Kontakt"),
            React.createElement("div", { className: "flex justify-center items-center w-full" },
                React.createElement("div", { className: "max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg" },
                    React.createElement("p", { className: "text-center text-dark font-semibold text-lg mb-6" }, "Masz pytania, sugestie lub chcesz nawi\u0105za\u0107 kontakt? Napisz do mnie:"),
                    React.createElement("div", { className: "flex flex-col items-center space-y-4 text-center mb-6" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement(image_1["default"], { rel: "icon", src: mail_svg_1["default"], alt: "Mail icon", sizes: "any" }),
                            React.createElement("span", { className: "text-dark font-medium" }, "embas@wp.pl"))),
                    React.createElement("form", { onSubmit: handleSubmit, className: "mt-6 flex flex-col space-y-6 max-w-lg mx-auto" },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { htmlFor: "name", className: "text-lg font-semibold" }, "Imi\u0119"),
                            React.createElement("input", { type: "text", id: "name", name: "name", placeholder: "Podaj swoje imi\u0119", className: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark", required: true })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { htmlFor: "email", className: "text-lg font-semibold" }, "E-mail"),
                            React.createElement("input", { type: "email", id: "email", name: "email", placeholder: "Podaj sw\u00F3j adres e-mail", className: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark", required: true })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { htmlFor: "message", className: "text-lg font-semibold" }, "Wiadomo\u015B\u0107"),
                            React.createElement("textarea", { id: "message", name: "message", placeholder: "Napisz wiadomo\u015B\u0107", className: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark", required: true })),
                        React.createElement("button", { type: "submit", className: "w-full p-3 text-white bg-dark bg-opacity-75 rounded-md hover:bg-darkLight transition duration-300 uppercase font-bold" }, "Wy\u015Blij")))))));
}
exports["default"] = Contact;
