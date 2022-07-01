"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_entity_1 = require("../user/user.entity");
const community_service_1 = require("./community.service");
const create_post_dto_1 = require("./dto/create-post.dto");
let CommunityController = class CommunityController {
    constructor(communityService) {
        this.communityService = communityService;
    }
    async createPost(createPostDto, user) {
        const userId = user.id;
        return await this.communityService.createPost(userId, createPostDto);
    }
};
__decorate([
    (0, common_1.Post)('post'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "createPost", null);
CommunityController = __decorate([
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
exports.CommunityController = CommunityController;
//# sourceMappingURL=community.controller.js.map