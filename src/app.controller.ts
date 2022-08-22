import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { User } from "./database/entities/user.entity";

export interface IResponse {
	appName: string;
	appUrl: string;
	appPort: number;
}
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): IResponse {
		return this.appService.getHello();
	}

	@Get("users/")
	async getAllUsers(): Promise<User[]> {
		return await this.appService.getAllUsers();
	}

	@Get("users/:userId")
	async getUser(@Param("userId") userId: number): Promise<User> {
		return await this.appService.getUser(userId);
	}
}
