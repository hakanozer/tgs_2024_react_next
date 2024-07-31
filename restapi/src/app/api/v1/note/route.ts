import { INote } from "@/app/models/INote";
import { IProduct } from "@/app/models/IProduct";
import { ApiUtil } from "@/app/utils/ApiUtil";
import { prisma } from "@/lib/prisma";

export async function POST(_request: Request, _response: Response) {
    const note = await _request.json() as INote
    const dbNote = await prisma.note.create({
        data: note
    })
    return ApiUtil(200, "Note Add", dbNote)
}

export async function GET(_request: Request, _response: Response) {
    const allNote = await prisma.note.findMany()
    return ApiUtil(200, "Note List", allNote)
}
