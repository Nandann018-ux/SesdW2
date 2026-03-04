"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = exports.QuoteCommand = exports.GithubCommand = void 0;
var chalk_1 = require("chalk");
var BaseCommand_1 = require("../BaseCommand");
var GithubCommand = /** @class */ (function (_super) {
    __extends(GithubCommand, _super);
    function GithubCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GithubCommand.prototype.register = function () {
        var _this = this;
        this.program
            .command('github <username>')
            .description('Fetch a GitHub user profile')
            .action(function (username) { return __awaiter(_this, void 0, void 0, function () {
            var res, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username))];
                    case 1:
                        res = _a.sent();
                        if (!res.ok)
                            throw new Error('User not found');
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        console.log(chalk_1.default.green("\n=== GitHub Profile: ".concat(data.login, " ===")));
                        console.log(chalk_1.default.blue("Name: ") + (data.name || 'N/A'));
                        console.log(chalk_1.default.blue("Public Repos: ") + data.public_repos);
                        console.log(chalk_1.default.blue("Followers: ") + data.followers);
                        console.log(chalk_1.default.blue("Bio: ") + (data.bio || 'N/A'));
                        console.log('');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(chalk_1.default.red("Error: ".concat(error_1.message)));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return GithubCommand;
}(BaseCommand_1.BaseCommand));
exports.GithubCommand = GithubCommand;
var QuoteCommand = /** @class */ (function (_super) {
    __extends(QuoteCommand, _super);
    function QuoteCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuoteCommand.prototype.register = function () {
        var _this = this;
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .action(function () { return __awaiter(_this, void 0, void 0, function () {
            var res, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://dummyjson.com/quotes/random')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        console.log(chalk_1.default.cyan("\n\"".concat(data.quote, "\"")));
                        console.log(chalk_1.default.yellow("- ".concat(data.author, "\n")));
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(chalk_1.default.red('Failed to fetch quote.'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return QuoteCommand;
}(BaseCommand_1.BaseCommand));
exports.QuoteCommand = QuoteCommand;
var JokeCommand = /** @class */ (function (_super) {
    __extends(JokeCommand, _super);
    function JokeCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JokeCommand.prototype.register = function () {
        var _this = this;
        this.program
            .command('joke')
            .description('Get a random programming joke')
            .action(function () { return __awaiter(_this, void 0, void 0, function () {
            var res, data, joke, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://official-joke-api.appspot.com/jokes/programming/random')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        joke = data[0];
                        console.log(chalk_1.default.magenta("\n".concat(joke.setup)));
                        console.log(chalk_1.default.green("".concat(joke.punchline, "\n")));
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(chalk_1.default.red('Failed to fetch a joke.'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return JokeCommand;
}(BaseCommand_1.BaseCommand));
exports.JokeCommand = JokeCommand;
