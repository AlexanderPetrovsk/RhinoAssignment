import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note } from "@prisma/client";

@Injectable()
export class NotesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateNoteDto): Promise<Note> {
        return this.prisma.note.create({
            data: dto
        });
    }

    async findAll(): Promise<Note[]> {
        return this.prisma.note.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(uuid: string): Promise<Note | null> {
        return this.prisma.note.findUniqueOrThrow({
            where: { id: uuid }
        });
    }

    async remove(uuid: string): Promise<Note> {
        return this.prisma.note.delete({
            where: { id: uuid }
        });
    }
}