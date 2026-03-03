import {
	Get,
	Body,
	Post,
	Param,
	Delete,
	Controller,
	ParseUUIDPipe,
} from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Controller('notes')
export class NotesController {
	constructor(private notesService: NotesService) {}

	@Post()
	async create(@Body() dto: CreateNoteDto) {
		return this.notesService.create(dto);
	}

	@Get()
	async findAll() {
		return this.notesService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id', ParseUUIDPipe) uuid: string) {
		return this.notesService.findOne(uuid);
	}

	@Delete(':id')
	async remove(@Param('id', ParseUUIDPipe) uuid: string) {
		return this.notesService.remove(uuid);
	}
}