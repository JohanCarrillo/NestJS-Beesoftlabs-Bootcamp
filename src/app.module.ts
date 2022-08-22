import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppConfigModule } from "./config/app/config.module";
import { AppConfigService } from "./config/app/config.service";
import { DatabaseConfigModule } from "./config/database/config.module";
import { TypeOrmConfigModule } from "./config/typeorm/typeorm.module";
import { User } from "./database/entities/user.entity";

@Module({
	imports: [
		TypeOrmConfigModule,
		TypeOrmModule.forFeature([User]),
		DatabaseConfigModule,
		AppConfigModule,
	],
	controllers: [AppController],
	providers: [AppService],
	exports: [],
})
export class AppModule {}
