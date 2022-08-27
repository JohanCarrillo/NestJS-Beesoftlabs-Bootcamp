import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IResponse } from "./app.controller";
import { AppConfigService } from "./config/app/config.service";
import { CreateUserDto } from "./createUser.dto";
import { User } from "./database/entities/user.entity";

@Injectable()
export class AppService {
	constructor(
		private readonly appConfig: AppConfigService,
		@InjectRepository(User) private readonly userRepo: Repository<User>
	) {}

	getHello(): IResponse {
		return {
			appName: this.appConfig.name,
			appUrl: this.appConfig.url,
			appPort: this.appConfig.port,
		};
	}

	getAllUsers(): Promise<User[]> {
		return this.userRepo.find();
	}

	getUser(userId: number): Promise<User> {
		return this.userRepo.findOne(userId);
	}

	async createUser(name: string, address: string, email: string, age: number) {
		return await this.userRepo.save({ name, address, email, age });
	}

	async createUserWithDto(createUserDto: CreateUserDto) {
		return await this.userRepo.save({ ...createUserDto });
	}
	async createUserWithDtoResponseWithDto(createUserDto: CreateUserDto) {
		return await this.userRepo.save({ ...createUserDto });
	}
}
