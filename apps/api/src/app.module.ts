import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { NotesModule } from './notes/notes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		PrismaModule,
		NotesModule
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
